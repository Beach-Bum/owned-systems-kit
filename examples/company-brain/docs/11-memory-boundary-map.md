# Memory Boundary Map — Northstar Studio

## Owner

Sarah Chen, Operations Manager

## Boundary rules

| Knowledge source | Agent may read | Agent may write | Requires review | Restricted | Notes |
|---|---|---|---|---|---|
| Company profile | yes | draft-only | yes | no | Core reference for all agents |
| Service offers | yes | no | — | no | Read-only; pricing changes are human-only |
| Workflows | yes | no | — | no | Reference only |
| Decision log | no | no | — | no | Human-maintained historical record |
| Obsidian vault (company) | scoped | no | — | no | Agents read the Git copy, not the vault directly |
| Obsidian vault (clients) | no | no | — | yes | Requires project-level approval |
| Client project files | no | no | — | yes | Requires project-level approval |
| Google Drive archive | no | no | — | no | Archived, not actively used |
| Agent skills | yes | no | — | no | Agents read their own skill definitions |
| Evidence logs | yes | yes | no | no | Append-only, immutable |

## Read boundaries

### Company profile

- **What agents can read:** The entire document.
- **What agents cannot read:** Nothing restricted in this source.
- **Scoping method:** File path. Agent instructions reference `knowledge/company-profile.md` explicitly.
- **Why this access is needed:** Agents need company context for replies and proposals.
- **Review frequency:** Quarterly.

### Service offers

- **What agents can read:** The entire document.
- **What agents cannot read:** Nothing restricted, but agents must quote pricing as "from" amounts.
- **Scoping method:** File path.
- **Why this access is needed:** Agents match inquiries to services and draft proposals.
- **Review frequency:** Monthly.

### Obsidian vault (company sections)

- **What agents can read:** Only the Git repo copy in `knowledge/`, not the vault directly.
- **What agents cannot read:** Vault sections not synced to the repo (drafts, personal notes).
- **Scoping method:** Agents only access the Git repo. The vault is the working copy; the repo is the reviewed version.
- **Why this access is needed:** Ensures agents use reviewed, version-controlled knowledge.
- **Review frequency:** Monthly.

## Write boundaries

### Evidence logs

- **What agents can write:** New evidence records (classification, summary, draft, reviewer decision).
- **What agents cannot write:** Past evidence records. Evidence is append-only and immutable.
- **Review process:** Evidence records do not require approval. They are factual records of what happened.
- **Approval required:** No.
- **Rollback process:** Incorrect evidence is corrected by appending a new entry with a correction note.

### Company profile (draft-only)

- **What agents can write:** Proposed updates saved to a staging area.
- **What agents cannot write:** The source document directly.
- **Review process:** Sarah Chen reviews proposed changes within 48 hours.
- **Approval required:** Yes.
- **Rollback process:** If an incorrect change is approved and applied, it is corrected in the source document and a decision log entry is added.

## Off-limits sources

| Source | Reason | Enforced by |
|---|---|---|
| Client project files | Client confidentiality | File path exclusion in agent skill definitions |
| Obsidian vault client notes | Client confidentiality | Not synced to Git repo; not in agent read paths |
| HR and personnel files | Privacy | File path exclusion; not in any knowledge root |
| Credentials and API keys | Security | Never stored in knowledge sources |

## Data classification

| Classification | Description | Agent access |
|---|---|---|
| Public | Published company information | Read: yes. Write: no. |
| Internal | Company procedures, pricing, workflows | Read: yes (scoped). Write: draft-only with review. |
| Confidential | Client data, project specifics | Read: no (unless project-level approval). Write: no. |
| Restricted | Credentials, personal data, HR | Read: never. Write: never. |

## Vendor-exit notes

All boundaries are enforced by file path and agent skill definitions in plain text. There is no provider-specific access control. If we change AI providers, the same boundaries apply by updating the agent skill definitions.

## Review schedule

- **Boundary review:** Monthly (next: 2026-06-01)
- **Reviewer:** Sarah Chen
