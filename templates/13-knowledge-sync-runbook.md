# Knowledge Sync Runbook

## Purpose

Document how knowledge changes are detected, reviewed, synced, and corrected. This covers both human-initiated updates and AI-proposed changes.

## Owner

TODO: Person responsible for knowledge sync operations.

## Allowed sync roots

List every location where knowledge may be read from or written to.

| Root | Path or URL | Read | Write | Sync method |
|---|---|---|---|---|
| | | yes / no | yes / no | manual / pull request / scheduled review |
| | | | | |

## Update workflows

### Human updates a knowledge source

1. Person edits the source document.
2. Change is committed, saved, or published.
3. Dependent agents and skills are notified (manually, or via review cycle).
4. Agent skill registers are checked for stale references.
5. Evidence log entry: what changed, who changed it, when.

### Agent proposes a knowledge update

1. Agent drafts the proposed change.
2. Draft is saved to a staging location (not the source of truth).
3. Designated reviewer is notified.
4. Reviewer approves, edits, or rejects the change.
5. If approved, the change is applied to the source of truth.
6. Evidence log entry: what was proposed, who reviewed it, decision, when.

### Stale knowledge detected

1. A knowledge source has not been reviewed within its review cycle.
2. The owner is notified.
3. Owner reviews and updates or confirms the source is current.
4. Review date is updated.
5. Evidence log entry: what was reviewed, outcome, when.

### Incorrect agent output traced to bad knowledge

1. A user or reviewer identifies an AI output based on incorrect or outdated knowledge.
2. The knowledge source is identified and flagged.
3. The source is corrected or marked as stale.
4. Affected agent skills are reviewed.
5. Evidence log entry: what went wrong, root cause, correction, when.

## Write policy

- **Who may update knowledge sources:** TODO (list people or roles)
- **Who may approve agent-written changes:** TODO
- **What agents may write:** TODO (new records, draft updates, evidence logs)
- **What agents may never write:** TODO (source-of-truth documents without review, credentials, policy)

## Review log

Track knowledge reviews here or in a separate file.

| Date | Source reviewed | Reviewer | Outcome | Notes |
|---|---|---|---|---|
| | | | current / updated / flagged | |

## Escalation

- **Stale knowledge not reviewed within cycle:** Escalate to TODO
- **Agent wrote to a restricted source:** Escalate to TODO immediately
- **Knowledge conflict between sources:** TODO resolves conflicts

## Vendor-exit notes

TODO: If your sync process depends on a specific tool or platform, document what happens if you leave it. Can the same review process be run manually?

## Review schedule

- **Runbook review:** TODO (quarterly recommended)
- **Reviewer:** TODO
