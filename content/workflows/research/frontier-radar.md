---
id: frontier-radar
type: workflow
title: 前沿雷达与论文蒸馏
description: 检索领域前沿范式与代表论文，并把文献蒸馏成可读懂的卡片与术语表。
category: 研究
tags: [前沿, 论文, 文献综述, 术语表, 检索, 研究]
models: []
verified: false
featured: false
status: draft
created: 2026-10-10
updated: 2026-10-10
use_cases: [接触领域前沿, 快速读懂论文, 补足知识缺口, 追踪方向动态]
inputs:
  - name: domain
    description: 所在领域
    required: true
  - name: topic
    description: 关注的具体方向
    required: true
outputs: [范式综述, 代表论文清单, 术语表, 补课清单, 论文卡片]
steps:
  - title: 检索前沿
    description: 联网收集最新论文、综述与专家访谈。
  - title: 归纳范式
    description: 概括当前 3–5 个主流流派与各自核心理念。
  - title: 筛选代表论文
    description: 每个范式挑出 2–3 篇代表作并说明重要性。
  - title: 提取术语
    description: 汇总方向内高频术语并给出通俗解释。
  - title: 判断知识缺口
    description: 指出从现有基础到看懂前沿还缺哪几块。
  - title: 蒸馏卡片
    description: 把每篇代表论文压成一张结构化卡片。
related: [domain-cartographer, research-assistant]
---

## 使用说明

在已有基础知识直觉之后使用效果最好。需要联网检索与阅读，请用带检索能力的模型；论文标题、年份与结论务必回原始来源核对。

## Prompt

```prompt
你是前沿情报分析员。领域：{{domain}}，我关注的方向：{{topic}}

请联网检索最新的论文、综述与专家访谈，然后：

1. 概括当前该方向的 3–5 个主流范式/流派，各自的核心理念一句话说清；
2. 每个范式列出 2–3 篇代表论文（标题 + 年份 + 一句话为什么重要 + 难度）；
3. 生成术语表：方向内高频且我可能不懂的关键术语 + 通俗解释；
4. 判断"从我的基础到看懂这些前沿，还缺哪几块知识"，按优先级排序；
5. 把每篇代表论文蒸馏成一张卡片：它解决什么问题、核心方法、结论、局限、和我方向的关联。

不确定或无法验证的信息要标注，不要编造引用。
```

## 示例

领域：机器学习；方向：大模型推理与 Agent。产出应包含范式划分、代表作清单与一份术语表。

## 我的实战备注

草稿条目，尚未经过我的实战验证。没有检索能力时会把过时内容当前沿，因此这一条对联网能力的要求比"领域版图测绘师"还高。卡片要能独立复述，不然等于没读。
