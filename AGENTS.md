# AI Playbook agent guide

## Project purpose

AI Playbook is a small, personal, verified library of AI Prompts, Skills, and Workflows. The primary experience is: search quickly, understand quickly, copy quickly.

## Source-of-truth rules

- Every library entry is Markdown under `content/`. Markdown and its Frontmatter are the only hand-authored content source.
- `data/prompts.json` and `web/public/data/prompts.json` are generated artifacts. Never edit them directly.
- Run `npm run content:build` after changing content. Run `npm run build` when changing the site, parser, or deployment configuration.
- Keep the existing standard sections when applicable: `## 使用说明`, `## Prompt`, `## 示例`, and `## 我的实战备注`.
- The text inside the fenced `prompt` block is the exact text users copy. Do not put explanations, heading text, or Markdown fences inside it.

## Creating library entries

When asked to add a Prompt, Skill, Workflow, or Playbook entry, read and follow [skills/create-playbook-entry/SKILL.md](skills/create-playbook-entry/SKILL.md) before editing files.

Use these top-level directories:

```text
content/prompts/<category>/
content/skills/<category>/
content/workflows/<category>/
```

Use a lowercase kebab-case filename and an identical unique `id`. Prefer the existing categories: `学习`, `编程`, `AI Agent`, `工作`, `健身`, `写作`, `研究`, and `其他`.

## Site conventions

- Keep the site static and GitHub Pages compatible: no backend, accounts, database, or network-time runtime dependency.
- Search must remain local and include title, description, category, tags, models, use cases, and body text.
- Keep interaction density high and decoration low. A prominent copy action is required wherever an entry has a Prompt.

## Change hygiene

- Preserve user-authored content and unrelated changes.
- Do not claim an entry is verified without evidence from the user. Use `verified: false` and `status: draft` for newly inferred or untested content.
- Do not invent model compatibility. Omit `models` or use only models the user named.
- Do not commit, push, deploy, or alter GitHub settings unless the user explicitly asks.
