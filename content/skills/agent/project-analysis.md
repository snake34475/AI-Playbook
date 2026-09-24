---
id: project-analysis
type: skill
title: 项目代码库分析
description: 帮助 AI 快速建立代码库地图、识别入口、依赖关系与高风险区域。
category: AI Agent
tags: [Agent, Claude Code, Codex, 项目分析, 架构]
models: [Claude Code, Codex]
verified: true
featured: true
status: active
created: 2026-09-24
updated: 2026-09-22
use_cases: [接手陌生项目, 修复 Bug 前理解架构, 制定重构计划]
inputs:
  - name: repository
    description: 本地代码仓库
    required: true
outputs: [项目地图, 核心路径, 风险点, 建议阅读顺序]
steps:
  - title: 建立地图
    description: 识别技术栈、入口、模块边界和运行方式。
  - title: 追踪核心路径
    description: 从用户入口走到关键业务或数据流。
  - title: 输出结论
    description: 给出风险点与下一步建议。
---

## 使用说明

在 Agent 已打开目标仓库后使用。先让它只分析，再进入实际修改。

## Prompt

```prompt
请先不要修改代码。分析当前代码仓库并输出一份简洁的项目地图：

1. 技术栈、包管理方式与启动入口；
2. 顶层目录职责；
3. 请求、状态、数据和渲染的关键路径；
4. 最值得先读的 5 个文件及原因；
5. 当前最可能出问题的边界或高风险区域；
6. 如果要完成“{{task}}”，建议的最小修改范围。

每个结论请标注依据的文件路径；不确定时明确写出假设。
```

## 我的实战备注

对大型仓库尤其有用。不要把第一次输出当作最终事实，应沿着它列出的关键文件继续验证。
