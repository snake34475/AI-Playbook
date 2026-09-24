---
name: create-playbook-entry
description: Turn a user's short brief into a validated AI Playbook Prompt, Skill, or Workflow Markdown entry for this repository. Use when adding or drafting library content, not for changing the website UI.
---

# Create an AI Playbook entry

Create one useful, immediately reusable Markdown entry in this repository from the user's brief. The goal is a concise artifact that can be searched locally and copied without cleanup.

## Read the local contract

Before editing, read the root `AGENTS.md` and inspect one or two related entries in `content/` to match the library's vocabulary and avoid duplicating an existing item.

## Choose the entry shape

Use the simplest accurate type:

- `prompt`: a single self-contained instruction a user can paste into an AI product.
- `skill`: a reusable method with inputs, outputs, and usually a repeatable sequence.
- `workflow`: several dependent stages, often including research, review, handoff, or multiple prompts.

If the brief is ambiguous, choose `prompt` unless it clearly describes a repeatable process. Do not ask a question merely to choose a type; make the smallest reasonable choice and state it in the handoff.

## Write the content file

Create the file in one of these paths:

```text
content/prompts/<folder>/<id>.md
content/skills/<folder>/<id>.md
content/workflows/<folder>/<id>.md
```

Use a lowercase kebab-case `id` that exactly matches the filename. Include this Frontmatter shape, omitting only fields that truly do not apply:

```yaml
---
id: concise-kebab-id
type: prompt # prompt | skill | workflow
title: 清楚、可搜索的中文标题
description: 一句说明它解决什么问题、何时使用。
category: 编程
tags: [可搜索标签, 领域标签]
models: []
verified: false
featured: false
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
use_cases: [具体使用场景]
inputs:
  - name: input_name
    description: 输入说明
    required: true
outputs: [可交付的输出]
steps:
  - title: 步骤名称
    description: 仅适用于 Skill 或 Workflow 的必要步骤。
related: []
---
```

Rules for metadata:

- Use one of the project's established categories unless a new category is genuinely needed.
- Add search-oriented Chinese and English tags only when they are meaningful.
- Do not set `verified: true`, `featured: true`, or `status: active` unless the user explicitly says the content has been personally validated.
- Do not claim model compatibility that the user did not name. Keep `models: []` when unknown.
- Use the current local date for `created` and `updated` on new entries.

Use these standard body sections:

````md
## 使用说明

Explain the minimum context or variables the user should supply.

## Prompt

```prompt
The exact copy-ready instruction. Use {{variables}} for user-provided values.
```

## 示例

Show one short, realistic input or use case when it materially reduces ambiguity.

## 我的实战备注

Add a concise limitation, boundary, or practical tip. Do not invent personal experience; label it as a draft note when needed.
````

For a `skill` or `workflow`, also populate `inputs`, `outputs`, and `steps` in Frontmatter. The body still has one primary `## Prompt` block unless the user explicitly needs multiple independently copyable prompts.

## Validate and hand off

Run `npm run content:build`. Fix any parser or metadata error before finishing. Do not edit generated JSON to fix content.

Report:

1. the created file path;
2. the selected type and category;
3. any assumption that resulted in draft/unverified status;
4. the validation result.
