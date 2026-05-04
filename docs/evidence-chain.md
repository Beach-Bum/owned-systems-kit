# Evidence Chains

An evidence chain is a structured record of every AI decision: what was asked, which model answered, what was approved, who approved it, and when.

## Why evidence chains

AI systems make decisions that affect people and organizations. Without a record of those decisions, there is no way to audit, debug, or improve the system. Evidence chains make AI operations auditable without requiring a separate compliance layer.

## What an evidence record contains

Each record captures:

- **ID** — unique identifier
- **Timestamp** — when the decision was made
- **Workflow** — which workflow the decision belongs to
- **Step** — which step in the workflow
- **Prompt reference** — which prompt template was used
- **Model and provider** — which AI model answered
- **Input hash** — hash of the input data for reproducibility
- **Output summary** — what the model produced
- **Human review status** — pending, approved, rejected, or not required
- **Reviewer** — who reviewed the decision
- **Notes** — additional context

## Creating evidence records

Use the CLI:

```bash
osk evidence add \
  --workflow invoice-classification \
  --step "Classify invoice" \
  --model claude-3.5-sonnet \
  --provider Anthropic \
  --reviewer "Jane Smith" \
  --review-status approved \
  --output "Classified as recurring/normal-urgency"
```

This creates a timestamped Markdown file in `evidence/`.

## Storage

Evidence records are plain-text Markdown files stored in your repository. They are Git-backed, diffable, and portable. No database required.
