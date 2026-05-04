# Owned Systems Kit

Open-source toolkit for documenting and operating AI systems your team can understand, run, and own.

Owned Systems Kit creates plain-text system records, workflow maps, human review gates, evidence logs, operator runbooks, and vendor-exit plans. Everything lives in your Git repository. No database, no SaaS, no vendor lock-in.

## Not technical? Start here.

If you run a small business or team, do not start with the CLI. Start with one workflow that causes delays, rework, risk, or repeated admin. The workflow packs show how to decide what AI can safely assist with, what a person must approve, and what evidence your team should keep.

- [Business Owner Quickstart](docs/business-owner-quickstart.md) — map one workflow in 30 minutes, no code required
- [First Workflow Packs](docs/workflow-packs.md) — five common starting points: inquiry triage, quoting, document review, knowledge base, handover notes
- [First Workflow Example](examples/first-workflow/) — a complete filled-in documentation package for customer inquiry triage

## Why

Most AI systems are undocumented. The prompts live in someone's head. The approval process is ad hoc. The evidence trail does not exist. When the person who built it leaves, the system becomes a black box.

Owned Systems Kit fixes this by making documentation a first-class deliverable:

- **Local-first.** Everything runs on your machine and lives in your repository.
- **Git-backed.** Version history, diffs, and pull request workflows for documentation changes.
- **Human checkpoints.** Defined review points where a person decides before the system acts.
- **Evidence chains.** Structured records of every AI decision: what was asked, which model answered, who approved it, and when.
- **Vendor exit.** Migration paths, tested alternatives, and manual fallbacks for every dependency.
- **Plain text.** YAML and Markdown. No proprietary formats.

## Install

```bash
npm install -g owned-systems-kit
```

Or use directly with npx:

```bash
npx owned-systems-kit init
```

## Local development

```bash
git clone https://github.com/Beach-Bum/owned-systems-kit.git
cd owned-systems-kit
npm install
npm run build
node dist/cli.js --help
```

Run the type checker:

```bash
npm run typecheck
```

## Quickstart

```bash
# Create a new documentation package
osk init

# Edit the generated files
# Fill in owned-system.yaml with your system details
# Complete the docs/ templates

# Validate your documentation
osk check

# Add an evidence record
osk evidence add \
  --workflow invoice-classification \
  --step "Classify invoice" \
  --model claude-3.5-sonnet \
  --provider Anthropic \
  --reviewer "Jane Smith" \
  --review-status approved \
  --output "Classified as recurring/normal-urgency"

# List the documentation package
osk docs build

# Export an audit package
osk audit export
```

## Generated folder structure

After running `osk init`:

```
your-project/
  owned-system.yaml              # System record
  docs/
    00-overview.md               # System overview
    01-workflow-map.md            # Workflow documentation
    02-tools-and-dependencies.md # Dependency inventory
    03-data-boundaries.md        # Data flow and access
    04-prompts-and-templates.md  # Prompt register
    05-human-review-gates.md     # Human review definitions
    06-evaluation-checklist.md   # Quality criteria
    07-runbook.md                # Operator runbook
    08-maintenance.md            # Maintenance plan
    09-exit-plan.md              # Vendor exit plan
  evidence/                      # Evidence chain records
  workflows/                     # Workflow definitions
  gates/                         # Review gate definitions
```

## Commands

### `osk init`

Create a new owned system documentation package in the current directory. Generates `owned-system.yaml`, ten documentation templates in `docs/`, and empty directories for evidence, workflows, and gates.

### `osk check`

Validate that required files exist and basic schema checks pass. Reports OK, WARN, or FAIL for each file.

### `osk evidence add [options]`

Create a timestamped evidence record in `evidence/`. Options:

| Flag | Description |
|------|-------------|
| `--workflow` | Workflow name |
| `--step` | Workflow step |
| `--model` | Model name |
| `--provider` | Provider name |
| `--prompt` | Prompt reference |
| `--input-hash` | Hash of input data |
| `--output` | Output summary |
| `--reviewer` | Reviewer name |
| `--review-status` | pending, approved, or rejected |
| `--notes` | Additional notes |

### `osk docs build`

Verify the documentation package exists and list its contents with status.

### `osk audit export`

Export a portable audit package to `audit-export/YYYY-MM-DD/` containing the system record, documentation, evidence records, and a manifest.

## Schemas

JSON schemas for validating system records:

| Schema | Purpose |
|--------|---------|
| `system.schema.json` | Top-level system record |
| `workflow.schema.json` | Workflow definitions |
| `dependency.schema.json` | External dependencies |
| `review-gate.schema.json` | Human review gates |
| `evidence.schema.json` | Evidence chain records |
| `exit-plan.schema.json` | Vendor exit plans |

## Examples

### First workflow (non-technical)

See `examples/first-workflow/` for a complete documentation package written for a non-technical team. Uses customer inquiry triage at a fictional small business (Northstar Studio) with all ten documentation templates filled in, two human review gates, and a sample evidence record.

### Invoice triage (technical)

See `examples/invoice-triage/` for a developer-oriented example of AI-assisted invoice classification with a system record, workflow definition, human review gate, and evidence record.

## Roadmap

- [x] **Phase 1: Templates and schemas** — YAML/Markdown starters, JSON schemas, CLI scaffold
- [x] **Phase 2: CLI validator** — Schema validation, completeness checks, evidence logging
- [ ] **Phase 3: Evidence chain format** — Append-only log specification, query tools
- [ ] **Phase 4: Self-hosted control plane** — Dashboard that reads from Git (future, separate repo)

## Revenue model

The kit is open source. [10x Associates](https://10x.associates) earns revenue through audits, implementation sprints, training, deployment support, custom templates, and future support for self-hosted control planes. The method should be inspectable; the implementation help is paid.

You do not need to hire us to use the kit.

## License

Apache-2.0. See [LICENSE](./LICENSE).

```
SPDX-License-Identifier: Apache-2.0
```
