import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'content');
const DATA_DIR = path.join(ROOT, 'data');
const PUBLIC_DATA_DIR = path.join(ROOT, 'web', 'public', 'data');

const types = new Set(['prompt', 'skill', 'workflow']);

type Frontmatter = {
  id?: string;
  type?: string;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  models?: string[];
  verified?: boolean;
  featured?: boolean;
  status?: string;
  created?: string | Date;
  updated?: string | Date;
  use_cases?: string[];
  inputs?: { name: string; description?: string; required?: boolean }[];
  outputs?: string[];
  steps?: { title: string; description?: string }[];
  related?: string[];
};

function asDate(value: string | Date | undefined): string | undefined {
  if (!value) return undefined;
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
}

function section(source: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = source.match(new RegExp(`^##\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'mi'));
  return match?.[1]?.trim() ?? '';
}

function promptFrom(source: string): string {
  const promptSection = section(source, 'Prompt');
  const fenced = promptSection.match(/```(?:prompt|text|md|markdown)?\s*\n([\s\S]*?)```/i);
  return (fenced?.[1] ?? promptSection).trim();
}

async function markdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(target);
    return entry.isFile() && entry.name.endsWith('.md') ? [target] : [];
  }));
  return nested.flat();
}

async function main() {
  const files = await markdownFiles(CONTENT_DIR);
  const ids = new Set<string>();
  const items = [];

  for (const file of files) {
    const parsed = matter(await readFile(file, 'utf8'));
    const meta = parsed.data as Frontmatter;
    if (!meta.id || !meta.title || !meta.description || !meta.category || !meta.type) {
      throw new Error(`${path.relative(ROOT, file)} must define id, type, title, description, and category.`);
    }
    if (!types.has(meta.type)) throw new Error(`${meta.id}: unsupported type "${meta.type}".`);
    if (ids.has(meta.id)) throw new Error(`Duplicate content id: ${meta.id}`);
    ids.add(meta.id);

    const prompt = promptFrom(parsed.content);
    const record = {
      id: meta.id,
      type: meta.type,
      title: meta.title,
      description: meta.description,
      category: meta.category,
      tags: meta.tags ?? [],
      models: meta.models ?? [],
      verified: Boolean(meta.verified),
      featured: Boolean(meta.featured),
      status: meta.status ?? 'active',
      created: asDate(meta.created),
      updated: asDate(meta.updated),
      useCases: meta.use_cases ?? [],
      inputs: meta.inputs ?? [],
      outputs: meta.outputs ?? [],
      steps: meta.steps ?? [],
      related: meta.related ?? [],
      prompt,
      sections: {
        usage: section(parsed.content, '使用说明'),
        examples: section(parsed.content, '示例'),
        notes: section(parsed.content, '我的实战备注')
      },
      searchText: [
        meta.title, meta.description, meta.category, ...(meta.tags ?? []), ...(meta.models ?? []),
        ...(meta.use_cases ?? []), parsed.content
      ].join(' ').replace(/\s+/g, ' ').trim()
    };
    items.push(record);
  }

  items.sort((a, b) => Number(b.featured) - Number(a.featured) || (b.updated ?? '').localeCompare(a.updated ?? ''));
  const output = JSON.stringify({ schemaVersion: 1, generatedAt: new Date().toISOString(), items }, null, 2) + '\n';
  await mkdir(DATA_DIR, { recursive: true });
  await mkdir(PUBLIC_DATA_DIR, { recursive: true });
  await writeFile(path.join(DATA_DIR, 'prompts.json'), output);
  await writeFile(path.join(PUBLIC_DATA_DIR, 'prompts.json'), output);
  console.log(`Indexed ${items.length} items from Markdown.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
