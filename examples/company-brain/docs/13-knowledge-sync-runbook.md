# Knowledge Sync Runbook — Northstar Studio

## Owner

Sarah Chen, Operations Manager

## Allowed sync roots

| Root | Path or URL | Read | Write | Sync method |
|---|---|---|---|---|
| Company brain (Git) | `company-brain/knowledge/` | yes | via pull request | Manual PR |
| Obsidian vault (company) | `~/Documents/northstar-vault/company/` | yes (source) | yes (working copy) | Manual copy to Git after review |
| Agent skills | `company-brain/agents/skills/` | yes | via pull request | Manual PR |
| Evidence logs | `company-brain/evidence/` | yes | append-only | Automatic (agent writes directly) |

## Update workflows

### Human updates a knowledge source

1. Person edits the source in the Obsidian vault or directly in the Git repo.
2. If edited in the vault: person copies the updated file to the Git repo and creates a commit.
3. If the change affects agent behaviour (e.g. pricing change in offers.md), person reviews relevant agent skills.
4. Evidence log entry: "Knowledge source [name] updated by [person] on [date]. Reason: [reason]."

### Agent proposes a knowledge update

1. Agent saves proposed change to a staging folder (not the source of truth).
2. Sarah Chen is notified by email or Slack.
3. Sarah reviews within 48 hours.
4. If approved: Sarah applies the change to the source document and commits to Git.
5. If rejected: Sarah notes the reason and the proposal is archived.
6. Evidence log entry: "Agent proposed update to [source]. Reviewed by [person]. Decision: [approved/rejected]. Reason: [reason]."

### Stale knowledge detected

Stale means: the source has not been reviewed within its review cycle.

1. Monthly: Sarah checks the Company Knowledge Register for overdue reviews.
2. Owner of each overdue source is notified.
3. Owner reviews and either updates the source or confirms it is current.
4. Review date is updated in the Knowledge Register.
5. Evidence log entry: "Knowledge source [name] reviewed by [person] on [date]. Outcome: [current/updated]."

### Incorrect agent output traced to bad knowledge

This happened in April 2026 when stale pricing in offers.md caused a wrong quote in a draft proposal.

1. A reviewer identifies an agent output based on incorrect or outdated knowledge.
2. The knowledge source is identified (check the agent's SKILL.md for which sources it reads).
3. The source is corrected or marked for update.
4. Affected agent outputs are flagged for re-review.
5. Evidence log entry: "Incorrect output traced to [source]. Root cause: [stale/wrong/incomplete]. Correction: [what changed]. Reported by: [person]."

## Write policy

- **Who may update knowledge sources:** Source owners (see Company Knowledge Register)
- **Who may approve agent-written changes:** Sarah Chen (Operations Manager)
- **What agents may write:** Evidence logs (append-only), draft replies (staging), draft proposals (staging)
- **What agents may never write:** Source-of-truth documents directly, client data, credentials, decision log

## Review log

See `sync/review-log.md` for the full review history.

## Escalation

- **Stale knowledge not reviewed within cycle:** Sarah Chen follows up with source owner
- **Agent wrote to a restricted source:** Alert Sarah Chen and Pieter de Vries immediately. Review agent skill configuration.
- **Knowledge conflict between sources:** Sarah Chen resolves conflicts. If the conflict involves pricing or scope, Pieter de Vries decides.

## Vendor-exit notes

The sync process is entirely manual: Git commits and file copies. There is no sync engine, no automation platform, and no provider-specific tooling. If we change AI providers, the sync process does not change. If we change from Obsidian to another note system, only the vault paths change.

## Review schedule

- **Runbook review:** Quarterly (next: 2026-08-01)
- **Reviewer:** Sarah Chen
