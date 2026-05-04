# Allowed Sync Roots

These are the locations where Northstar Studio's company knowledge lives. Agents and AI tools may only read from and write to these locations according to the rules defined in the Memory Boundary Map and Write Policy.

## Knowledge roots

| Root | Location | Type | Read | Write |
|---|---|---|---|---|
| Company brain | `company-brain/knowledge/` (this repo) | Markdown files | Agents: yes | Agents: draft-only with review |
| Obsidian vault | `~/Documents/northstar-vault/` | Markdown (Obsidian) | Agents: scoped | Agents: no |
| Google Drive archive | `Northstar Studio/Archive/` on Google Drive | Mixed formats | Agents: no | Agents: no |
| Client projects | `~/Projects/clients/` | Mixed formats | Agents: no (requires project-level approval) | Agents: no |

## Agent configuration roots

| Root | Location | Type | Read | Write |
|---|---|---|---|---|
| Agent skills | `company-brain/agents/skills/` (this repo) | SKILL.md files | Agents: yes (this is their instruction set) | Agents: no (human-maintained) |
| Prompt templates | `company-brain/agents/prompts/` (this repo) | Markdown | Agents: yes | Agents: no |

## Excluded roots

These locations are never accessible to AI tools:

- `~/Documents/northstar-vault/clients/` — client-specific notes
- `~/Documents/northstar-vault/hr/` — personnel files
- Any file containing credentials, API keys, or access tokens
- Google Drive folders marked "Confidential"

## Notes

- The Obsidian vault is the working copy. The Git repo (`company-brain/`) is the documented, reviewed version.
- Knowledge changes flow from the vault to the repo through a review process (see Write Policy and Knowledge Sync Runbook).
- Agents read from the Git repo, not directly from the Obsidian vault. This ensures they use reviewed knowledge.
