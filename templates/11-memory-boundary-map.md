# Memory Boundary Map

## Purpose

Define what agents and AI tools may read, what they may write, and what is off-limits. Boundaries prevent scope creep, protect sensitive data, and make access auditable.

## Owner

TODO: Person responsible for maintaining these boundaries.

## Boundary rules

| Knowledge source | Agent may read | Agent may write | Requires review | Restricted | Notes |
|---|---|---|---|---|---|
| | yes / no / scoped | yes / no / draft-only | yes / no | yes / no | |
| | | | | | |
| | | | | | |

## Read boundaries

For each knowledge source where agents have read access:

### Source: TODO

- **What agents can read:** TODO (the full source, specific folders, specific fields)
- **What agents cannot read:** TODO (sensitive sections, credentials, personal data)
- **Scoping method:** How is access limited? (file path, folder, tag, field-level, API scope)
- **Why this access is needed:** TODO
- **Review frequency:** How often is this boundary reviewed?

## Write boundaries

For each knowledge source where agents have any write access:

### Source: TODO

- **What agents can write:** TODO (new records only, draft updates, append-only logs)
- **What agents cannot write:** TODO (source-of-truth documents, policy files, financial records)
- **Review process:** Who reviews agent-written changes before they become official?
- **Approval required:** yes / no
- **Rollback process:** How are incorrect agent writes corrected?

## Off-limits sources

List knowledge sources that agents must never access:

| Source | Reason | Enforced by |
|---|---|---|
| | | |

## Data classification

| Classification | Description | Agent access |
|---|---|---|
| Public | Published information, marketing materials | Read: yes. Write: no. |
| Internal | Internal procedures, project docs, knowledge base | Read: scoped. Write: draft-only with review. |
| Confidential | Client data, financials, HR records | Read: no (unless specifically scoped). Write: no. |
| Restricted | Credentials, API keys, personal data | Read: never. Write: never. |

## Vendor-exit notes

TODO: If boundaries are enforced by a provider (e.g. a chatbot platform's access controls), document what happens if you leave that provider. Can the same boundaries be enforced elsewhere?

## Review schedule

- **Boundary review:** TODO (monthly recommended)
- **Reviewer:** TODO
