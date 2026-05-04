# Human Review Gates

Human review gates are defined points in a workflow where a person reviews and approves an AI-generated output before it takes effect.

## Why gates, not just monitoring

Monitoring tells you something went wrong after the fact. Gates prevent the wrong thing from happening. Human approval is architecture, not bureaucracy.

## What a gate defines

Each gate specifies:

- **Which workflow and step** — where in the process
- **Who reviews** — the role authorized to approve
- **What they check** — specific criteria
- **What happens on rejection** — escalation path
- **What happens on timeout** — if no review occurs
- **Whether evidence is required** — audit trail

## Example

```yaml
name: "High-Value Invoice Approval"
workflow: "invoice-classification"
step: "Classify invoice"
reviewer_role: "Finance Manager"
criteria:
  - "Classification matches invoice content"
  - "Amount matches extracted data"
  - "Vendor is known and approved"
escalation: "Escalate to CFO if invoice exceeds 50,000 EUR."
timeout: "4 business hours"
evidence_required: true
```

## Design principles

1. Gates should be explicit, not implicit. If a human reviews something, define the gate.
2. Every gate needs criteria. "Review the output" is not a gate definition.
3. Escalation paths must be specified. What happens when the reviewer says no?
4. Timeouts must be handled. What happens when nobody reviews?
5. Evidence should be created. If a human approved something, record that they did.
