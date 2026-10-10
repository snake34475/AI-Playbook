---
id: motor-skill-progression
type: prompt
title: 身体技能进阶拆解
description: 为健身、滑板这类实践主导的技能设计动作依赖树、训练安排与反馈闭环。
category: 健身
tags: [身体技能, 动作进阶, 训练计划, 反馈闭环, 健身, 滑板]
models: []
verified: false
featured: false
status: draft
created: 2026-10-10
updated: 2026-10-10
use_cases: [规划身体技能训练, 拆解动作进阶顺序, 建立训练反馈与安全边界]
inputs:
  - name: skill
    description: 要提升的身体技能，如力量训练 / 滑板
    required: true
  - name: current_level
    description: 当前水平
    required: true
  - name: available_time
    description: 每周可投入的训练时间
    required: true
outputs: [进阶树, 阶段验收标准, 训练安排, 反馈机制, 安全边界, 找教练建议]
related: [shoulder-mobility]
---

## 使用说明

填入 `{{skill}}`、`{{current_level}}`、`{{available_time}}`。这是"知识型学习方法"在身体技能上的替代版本：这类领域的进步主要来自练习与反馈，不是读书时长。

## Prompt

```prompt
你是运动技能进阶教练。技能：{{skill}}（如：力量训练 / 滑板）
我的当前水平：{{current_level}}；每周可投入：{{available_time}}

请把这门技能的"依赖顺序"设计成一张进阶树，而不是知识清单：

1. 拆解出达成目标所需的能力/动作节点，标注前置依赖（谁必须先掌握）；
2. 分阶段给出：阶段目标、关键动作/能力、可量化的验收标准（能完成什么算过关）；
3. 每个阶段给出训练频率、单次时长、强度与恢复安排（强调神经状态和受伤预防）；
4. 建立反馈闭环：如何用录像/训练日志/身体感受发现问题并修正；
5. 列出明确的"停止信号"和受伤预警，出现时该怎么做；
6. 说明什么时候必须找真人教练或加入社区，以及如何在本地找到他们。

不要用读书时长代替练习时长；优先保证动作质量，避免在疲劳下重复错误动作。
```

## 示例

技能：滑板；水平：能滑行不会 ollie；每周 5 小时。产出应从滑行/转弯起步，按 ollie→shuvit→flip 的依赖顺序排，并给出停止信号。

## 我的实战备注

草稿条目，尚未经过我的实战验证。它解决的是"读教材 + 读论文"对技能型领域基本无效的问题；真正管用的是进阶树、高频短时练习、录像复盘和真人指导。涉及伤病与健康时，请以医生或持证教练的意见为准。
