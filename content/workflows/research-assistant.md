---
id: research-assistant
type: workflow
title: 研究到结论工作流
description: 将问题拆解、资料检索、证据判断与结构化结论串成可复用流程。
category: 研究
tags: [研究, 搜索, 证据, 写作, Claude]
models: [ChatGPT, Claude]
verified: true
featured: false
status: active
created: 2026-09-24
updated: 2026-09-21
use_cases: [比较产品方案, 阅读陌生领域, 撰写研究结论]
inputs:
  - name: question
    description: 要研究的问题
    required: true
outputs: [问题拆解, 证据表, 结论与不确定性]
steps:
  - title: 拆解问题
    description: 区分事实问题、判断问题与待验证假设。
  - title: 收集证据
    description: 优先寻找一手资料与权威来源。
  - title: 综合输出
    description: 区分事实、推断与未知项。
related: [feynman-learning]
---

## 使用说明

适用于需要可靠结论的任务。涉及近期信息时，必须要求 AI 提供来源链接与日期。

## Prompt

```prompt
我要研究的问题是：{{question}}

请按以下流程协助我：
1. 先把问题拆成可验证的子问题，并列出关键假设；
2. 为每个子问题说明最可靠的证据类型；
3. 收集资料时优先使用一手或权威来源，并记录发布日期；
4. 输出证据表：主张、来源、支持程度、局限性；
5. 最后给出结论，明确区分事实、推断和仍不确定的内容。

不要为了给出确定答案而掩盖证据不足。
```

## 我的实战备注

研究型 Prompt 的价值不在于“自动得出答案”，而在于持续暴露证据强度和不确定性。
