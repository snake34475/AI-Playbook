# AI Playbook

一个由 Markdown 驱动的个人 AI Prompt、Skill 与 Workflow 知识库。

## 本地运行

```bash
npm install
npm run dev
```

## 内容工作流

在 `content/` 中新增或修改 Markdown 后，执行：

```bash
npm run content:build
```

脚本会校验 Frontmatter，并自动生成：

- `data/prompts.json`：可供 CLI / MCP 等程序化消费者使用的索引；
- `web/public/data/prompts.json`：网站运行时可访问的索引。

不要手工修改这两个 JSON 文件。

## 用 Skill 快速新增内容

本仓库内置 `create-playbook-entry` Skill。让 Codex 在本仓库中调用它，并给出简短需求，例如：

```text
使用 $create-playbook-entry：
新增一个用于审查 React 性能问题的 Prompt；目标模型是 Claude Code；
它尚未经过我的实战验证。
```

Skill 会选择合适的 `prompt`、`skill` 或 `workflow` 类型，创建带有标准 Frontmatter 和固定 Markdown 区块的内容文件，并自动生成搜索索引。它不会把未验证内容标记为“已验证”。

## 部署 GitHub Pages

推送至 `main` 后，GitHub Actions 会构建并部署网站。首次使用时，请在仓库的 **Settings → Pages** 中将 Source 设置为 **GitHub Actions**。
