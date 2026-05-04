# Data Boundaries

## Data flows

| Data type | Source | Destination | Storage | Access | Retention |
|-----------|--------|-------------|---------|--------|-----------|
| Customer inquiry text | Email/form/chat | AI provider (Anthropic API) | Not stored by provider | API key holder | Per-request only |
| Customer name and email | Email/form | CRM, evidence log | Google Workspace, local repo | Operations team | Duration of customer relationship |
| AI classification | Anthropic API | Internal review queue | Local repo (evidence/) | Operations team | Indefinite |
| Draft reply | Anthropic API | Internal review queue | Local repo (evidence/) | Operations team | Indefinite |
| Final approved reply | Internal review | Customer (via email/chat) | Google Workspace, local repo | Operations team | Indefinite |

## Sensitive data

- **Customer names and email addresses:** Personal data. Handle per GDPR if EU customers.
- **Inquiry content:** May contain sensitive information (billing issues, complaints, personal circumstances). Do not include in logs beyond what is needed for the evidence record.
- **No payment data:** Payment information is never sent to the AI provider. Billing inquiries reference invoice numbers, not card details.

## External data transfers

| Destination | Data sent | Purpose | Terms |
|-------------|-----------|---------|-------|
| Anthropic API | Inquiry text, customer first name | Classification, summarization, reply drafting | Anthropic API terms, data not used for training |

## Access controls

| Role | Access level | Data types |
|------|-------------|------------|
| Operations Manager | Full access | All inquiry data, evidence records, prompts |
| Team Member | Read and review | Inquiry data, draft replies, own evidence records |
| Owner | Full access | All data, financial approval authority |

## Compliance notes

- GDPR applies to inquiries from EU customers. Customer data is processed for legitimate business interest (responding to their inquiry). Data minimization: only the inquiry text and first name are sent to the AI provider.
- No health, legal, or financial account data is processed by this workflow.
