# Workflow Map

## Workflow name

Customer Inquiry Triage

## Description

When a customer inquiry arrives (email, form, or chat), AI classifies it, summarizes the context, and drafts a reply. A team member reviews and approves the reply before it is sent. Inquiries involving money require a second approval from a manager.

## Steps

| # | Step | Type | Model/Tool | Review gate? |
|---|------|------|------------|-------------|
| 1 | Classify inquiry | ai | Claude 3.5 Sonnet | no |
| 2 | Summarize context | ai | Claude 3.5 Sonnet | no |
| 3 | Draft reply | ai | Claude 3.5 Sonnet | no |
| 4 | Human review | human | — | yes: reply-approval |
| 5 | Financial review (if flagged) | human | — | yes: refund-or-discount-approval |
| 6 | Send reply | automated | Email/chat system | no |

## Inputs

- Customer inquiry text (email body, form submission, or chat message)
- Customer name and contact method
- Customer history (if available in CRM)

## Outputs

- Approved reply sent to the customer
- Evidence record of the classification, draft, review, and final reply

## Failure modes

| Failure | Impact | Mitigation |
|---------|--------|------------|
| AI misclassifies urgency | Urgent request handled as standard, causing delay | Human reviewer checks urgency before sending |
| Draft reply contains incorrect information | Customer receives wrong answer | Human reviewer verifies facts before approving |
| AI suggests unauthorized discount | Financial commitment without approval | Financial flag routes to manager review gate |
| AI provider is unavailable | No classification or draft generated | Fall back to manual triage (see exit plan) |

## Diagram

```
Inquiry arrives
    |
    v
[AI] Classify → category + urgency
    |
    v
[AI] Summarize → two-sentence context
    |
    v
[AI] Draft reply
    |
    v
[Human] Review draft ──── reject → edit and re-review
    |
    approved
    |
    v
Financial? ── yes → [Manager] Approve financial commitment
    |                    |
    no                   approved
    |                    |
    v                    v
Send reply ←─────────────┘
    |
    v
Log evidence record
```
