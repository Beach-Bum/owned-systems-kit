# Agent Skill Register — Northstar Studio

## Owner

Sarah Chen, Operations Manager

## Agent skills

| # | Skill name | Agent / tool | Purpose | Knowledge read | Knowledge written | Owner | Last reviewed |
|---|---|---|---|---|---|---|---|
| 1 | Customer inquiry triage | Claude 3.5 Sonnet | Classify inquiries, draft replies | company-profile, offers | evidence logs, draft replies | Sarah Chen | 2026-05-01 |
| 2 | Proposal drafting | Claude 3.5 Sonnet | Extract requirements, draft proposals | company-profile, offers, workflows | evidence logs, draft proposals | Pieter de Vries | 2026-05-01 |

## Skill details

### 1. Customer inquiry triage

- **Agent or tool:** Claude 3.5 Sonnet via Anthropic API
- **Purpose:** Classify incoming customer inquiries, summarize context, and draft a reply for human review.
- **Source of truth:** `agents/skills/customer-inquiry-triage/SKILL.md`
- **Format:** SKILL.md (Markdown)
- **Knowledge sources read:** company-profile.md, offers.md, incoming inquiry (provided as input)
- **Knowledge sources written:** evidence/ (new evidence records), staging area (draft replies)
- **Review gates:** Yes. Every draft reply reviewed by team member. Financial items require manager approval.
- **Owner:** Sarah Chen
- **Last reviewed:** 2026-05-01
- **Update process:** Changes to SKILL.md reviewed by Operations Manager before deployment.
- **Restricted data:** No. Agent does not access client-specific data.
- **Vendor-exit notes:** Skill definition is plain Markdown. Can be adapted for any AI provider.

### 2. Proposal drafting

- **Agent or tool:** Claude 3.5 Sonnet via Anthropic API
- **Purpose:** Extract requirements from a qualified inquiry and draft a proposal outline for partner review.
- **Source of truth:** `agents/skills/proposal-drafting/SKILL.md`
- **Format:** SKILL.md (Markdown)
- **Knowledge sources read:** company-profile.md, offers.md, workflows.md, inquiry notes (provided as input)
- **Knowledge sources written:** evidence/ (new evidence records), staging area (draft proposals)
- **Review gates:** Yes. Every proposal draft reviewed by a partner before finalisation.
- **Owner:** Pieter de Vries
- **Last reviewed:** 2026-05-01
- **Update process:** Changes to SKILL.md reviewed by Operations Manager before deployment.
- **Restricted data:** No. Agent does not access client-specific data from other engagements.
- **Vendor-exit notes:** Skill definition is plain Markdown. Can be adapted for any AI provider.

## Prompt templates

| # | Template name | Used by | Purpose | Last reviewed |
|---|---|---|---|---|
| 1 | Inquiry classification | Customer inquiry triage | Classify inquiry type and urgency | 2026-05-01 |
| 2 | Reply drafting | Customer inquiry triage | Draft customer reply in company voice | 2026-05-01 |
| 3 | Requirement extraction | Proposal drafting | Extract client requirements from inquiry | 2026-05-01 |
| 4 | Proposal outline | Proposal drafting | Draft proposal structure and pricing | 2026-05-01 |

## Gaps

- No skill defined for monthly process review summarisation (currently manual).
- No skill defined for onboarding knowledge delivery (currently manual).

## Review schedule

- **Register review:** Monthly (next: 2026-06-01)
- **Reviewer:** Sarah Chen
