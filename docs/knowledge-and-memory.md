# Knowledge and Memory Layer

## What this is

Most teams already have a company brain. Notes in Obsidian. Documents in Google Drive. Procedures in Notion. Decisions in Slack threads. Runbooks in Git repos. Agent instructions in skill files.

Owned Systems Kit does not replace any of these. It documents how they are used, who owns them, what AI tools may read, what AI tools may write, and how changes are reviewed.

The goal is owned memory: portable, inspectable, reviewable, and removable.

## Why this matters

AI tools are useful when they can reference your company knowledge. But knowledge access creates risk:

- **Stale information.** An AI drafting replies from a policy document that was updated three months ago but never synced.
- **Scope creep.** An agent reading client financials when it only needed product descriptions.
- **Unreviewed writes.** An AI updating your runbook without anyone checking the changes.
- **Vendor lock-in.** Knowledge stored inside a chatbot platform that cannot be exported.
- **Missing audit trail.** No record of what an AI read, when, or what it did with the information.

OSK helps you map these risks and create boundaries before they become problems.

## Four types of company memory

### A. Semantic memory

Facts about your company, clients, products, offers, policies, systems, and decisions.

| | |
|---|---|
| **Examples** | Company profile, pricing, product catalogue, client list, policies, org chart |
| **Where it lives** | Obsidian vault, Google Drive, Notion, Markdown files, CRM, internal wiki |
| **Who owns it** | Usually the team lead or department head responsible for that area |
| **Can agents read it?** | Yes, with defined scope. An agent answering customer questions needs product info but not HR policies. |
| **Can agents write to it?** | Rarely. AI may draft updates, but a person should review before the source of truth changes. |
| **Review process** | Periodic review (monthly or quarterly). Flag when source documents are updated. |

### B. Episodic memory

Records of what happened. Project history, incident reviews, audit outcomes, launch notes, prior decisions and why they were made.

| | |
|---|---|
| **Examples** | Project retrospectives, incident reports, meeting notes, decision logs, audit results |
| **Where it lives** | Git commit history, project folders, Notion databases, shared drives, evidence chain logs |
| **Who owns it** | The person who recorded it, or the project/team lead |
| **Can agents read it?** | Yes, for context. An agent drafting a proposal may reference past project outcomes. |
| **Can agents write to it?** | Only to create new records (evidence logs, summaries). Never to edit past records. |
| **Review process** | Append-only. New entries are reviewed. Past entries are not changed. |

### C. Procedural memory

Instructions for how work is done. Standard operating procedures, runbooks, agent skills, Claude Code instructions, ChatGPT custom instructions, prompt templates.

| | |
|---|---|
| **Examples** | SOPs, operator runbooks, agent SKILL.md files, Claude Code CLAUDE.md, ChatGPT skills, gstack skills, prompt templates |
| **Where it lives** | Git repos, Markdown files, agent configuration folders, prompt registries |
| **Who owns it** | The person or team that operates the workflow |
| **Can agents read it?** | Yes. This is usually the primary input for agent behaviour. |
| **Can agents write to it?** | With review. An agent may propose a runbook update, but a person approves it. |
| **Review process** | Version-controlled. Changes go through pull requests or review before they take effect. |

### D. Evidence memory

Records that prove what happened. Approvals, evaluations, AI outputs, review logs, change records.

| | |
|---|---|
| **Examples** | Evidence chain logs, approval records, AI output logs, review decisions, compliance records |
| **Where it lives** | evidence/ folder in your repo, audit exports, compliance systems |
| **Who owns it** | The system operator and the reviewer |
| **Can agents read it?** | Yes, for audit and analysis. |
| **Can agents write to it?** | Yes, but only to append new records. Never to modify or delete past records. |
| **Review process** | Append-only. Evidence records are immutable once written. Corrections are added as new entries. |

## How to use this with OSK

OSK provides four templates for documenting your knowledge and memory layer:

| Template | Purpose |
|---|---|
| [10 — Company Knowledge Register](../templates/10-company-knowledge-register.md) | List every knowledge source: what it contains, who owns it, where it lives |
| [11 — Memory Boundary Map](../templates/11-memory-boundary-map.md) | Define what agents may read, what they may write, and what is off-limits |
| [12 — Agent Skill Register](../templates/12-agent-skill-register.md) | Inventory every agent skill, instruction set, and prompt template |
| [13 — Knowledge Sync Runbook](../templates/13-knowledge-sync-runbook.md) | Document how knowledge changes are reviewed, synced, and corrected |

OSK also provides schemas for validating these documents:

- `schemas/knowledge-source.schema.json`
- `schemas/memory-boundary.schema.json`
- `schemas/agent-skill.schema.json`

## What OSK does not do

- **OSK does not sync knowledge.** It documents where knowledge lives and how it should be accessed.
- **OSK does not embed or index.** No vector search, no embeddings, no database.
- **OSK does not connect to providers.** No API keys, no provider-specific integrations.
- **OSK does not ingest private data.** Templates and schemas only. Your data stays where it is.

## Principles

1. **Document first.** Before connecting an AI tool to your company knowledge, write down what it will access and why.
2. **Scope narrowly.** An agent that needs product descriptions should not also have access to HR policies.
3. **Review writes.** AI may draft updates, but a person approves changes to the source of truth.
4. **Keep evidence.** Log what knowledge an AI accessed and what it produced.
5. **Plan for exit.** If your knowledge is trapped inside a provider, it is not owned. Keep sources in portable formats.

## Example

See [examples/company-brain/](../examples/company-brain/) for a complete example of a company knowledge and memory layer at Northstar Studio, including a company knowledge register, memory boundary map, agent skill register, and knowledge sync runbook.
