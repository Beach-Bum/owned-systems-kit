# Write Policy

## Who may update knowledge sources

| Knowledge source | Who may update | Approval required |
|---|---|---|
| Company profile | Sarah Chen (Operations Manager) | No (owner responsibility) |
| Service offers | Pieter de Vries (Managing Partner) | No (owner responsibility) |
| Workflows | Sarah Chen or the workflow owner | No |
| Decision log | Anyone on the team | No (append-only, no edits to past entries) |
| Agent skills | The skill owner | Yes — reviewed by Operations Manager |
| Prompt templates | The skill owner | Yes — reviewed by Operations Manager |

## What agents may write

| What | Where | Review required |
|---|---|---|
| Draft replies | Staging area (not sent directly) | Yes — team member reviews |
| Draft proposals | Staging area (not finalised directly) | Yes — partner reviews |
| Evidence records | `evidence/` folder | No (append-only, immutable) |
| Knowledge update proposals | Staging area | Yes — source owner reviews |

## What agents may never write

- Source-of-truth documents (company profile, offers, workflows) without human review
- Client-specific project data
- Financial records
- HR or personnel files
- Credentials or API keys
- The decision log (humans only)

## How agent-proposed changes are reviewed

1. Agent saves proposed change to a staging location.
2. The source owner is notified.
3. Owner reviews the proposed change within 48 hours.
4. Owner approves (applies the change), edits (modifies before applying), or rejects.
5. An evidence record is created with the decision.

## Escalation

- If a proposed change is not reviewed within 48 hours, escalate to Operations Manager.
- If an agent writes to a restricted location, alert Operations Manager immediately and review the agent skill configuration.
