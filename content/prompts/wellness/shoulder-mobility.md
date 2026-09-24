---
id: shoulder-mobility
type: prompt
title: 肩胛稳定训练规划
description: 根据训练目标与身体反馈，生成保守、可调整的肩胛稳定训练建议。
category: 健身
tags: [肩胛骨, 训练, 健身, 动作评估]
models: [ChatGPT, Claude]
verified: false
featured: false
status: draft
created: 2026-09-24
updated: 2026-09-20
use_cases: [安排肩胛稳定训练, 记录动作反馈]
inputs:
  - name: goal
    description: 训练目标与当前反馈
    required: true
outputs: [低风险训练计划, 停止条件, 复盘问题]
---

## 使用说明

仅用于一般训练规划与记录，不代替医生、物理治疗师或专业教练诊断。

## Prompt

```prompt
请以保守的训练规划方式帮助我安排肩胛稳定练习。

我的目标与当前反馈：{{goal}}

请输出：
1. 训练前需要确认的风险信号；
2. 2 到 4 个由易到难的动作；
3. 每个动作的目的、组数、次数和停止条件；
4. 训练后应记录的疼痛、活动度或疲劳反馈；
5. 哪些情况应停止训练并咨询专业人士。

不要做医学诊断，也不要承诺恢复效果。
```

## 我的实战备注

仍在整理中，因此标为草稿而非“个人验证”。
