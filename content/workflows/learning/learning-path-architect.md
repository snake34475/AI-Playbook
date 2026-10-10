---
id: learning-path-architect
type: workflow
title: 依赖顺序路线规划师
description: 把领域版图排成按依赖顺序推进、带里程碑与验收标准的学习计划。
category: 学习
tags: [学习计划, 依赖顺序, 学习路线, 里程碑, 验收标准]
models: []
verified: false
featured: false
status: draft
created: 2026-10-10
updated: 2026-10-10
use_cases: [制定学习计划, 安排自学路线, 评估目标周期是否现实]
inputs:
  - name: domain
    description: 目标领域
    required: true
  - name: current_level
    description: 我目前的水平与已掌握的基础
    required: true
  - name: weekly_hours
    description: 每周可投入的学习小时数
    required: true
  - name: deadline
    description: 期望达成的周期
    required: true
outputs: [分阶段路线图, 阶段验收标准, 自测题, 时间排期, 关键前置风险]
steps:
  - title: 确定依赖顺序
    description: 用拓扑排序排出阶段先后，区分串行与并行。
  - title: 拆解阶段内容
    description: 每阶段给出目标、教材章节、课程与练习项目。
  - title: 设定验收标准
    description: 用可完成的产出定义"过关"，并配套自测题。
  - title: 对齐时间排期
    description: 结合每周投入估算工时，给出真实可执行的排期。
  - title: 标注风险
    description: 指出容易跳过却会导致后续崩盘的关键前置。
related: [domain-cartographer, knowledge-structure-learning, feynman-learning]
---

## 使用说明

最好先跑一遍"领域版图测绘师"，把版图结果一并贴进来，路线会更准。`{{deadline}}` 填你希望的时间，如果明显不现实，提示词会要求先指出并给替代方案。

## Prompt

```prompt
你是学习路线规划师。领域：{{domain}}
我的现状：{{current_level}}；每周可投入：{{weekly_hours}} 小时；期望周期：{{deadline}}

基于该领域知识的依赖顺序（前置关系），为我排一条学习路线：

1. 用拓扑排序确定阶段顺序，明确哪些必须串行、哪些可并行；
2. 每个阶段给出：阶段目标、要读的教材章节/要看的课、动手练习或小项目、验收标准；
3. 每个阶段配一套自测题（用于判断"我是否真的过了这一关"）；
4. 标注每阶段的预估工时，并和我的 {{weekly_hours}} 对齐，给出真实可完成的排期；
5. 指出最容易卡住或跳过会导致后面崩盘的"关键前置"。

只给必要的内容，避免穷举；如果我的目标周期明显不现实，直接指出并给出最省时间的替代路径。
```

## 示例

领域：数据分析；现状：会 Excel 但不会编程；每周 10 小时；期望 6 个月能独立完成分析项目。

## 我的实战备注

草稿条目，尚未经过我的实战验证。要点是按依赖顺序学，而不是按兴趣随机跳，否则容易反复回补前置知识。排期留出缓冲，自测题不过关就不要进入下一阶段。
