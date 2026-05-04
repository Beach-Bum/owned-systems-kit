# Skill: Customer Inquiry Triage

## Purpose

Classify incoming customer inquiries, summarize context, and draft a reply for human review.

## Agent

Claude 3.5 Sonnet via Anthropic API

## When this runs

When a new inquiry arrives in the shared inbox and is forwarded to the triage queue.

## What this skill reads

- `knowledge/company-profile.md` — to reference company information in replies
- `knowledge/offers.md` — to match inquiries to relevant services
- The incoming inquiry text (provided as input, not stored in the knowledge base)

## What this skill does not read

- Client-specific project data
- Financial records
- HR or personnel files
- Decision log (not needed for triage)

## What this skill writes

- A draft reply (saved to a staging area for review, not sent directly)
- An evidence record in `evidence/` (classification, summary, draft, reviewer decision)

## What this skill does not write

- It does not update knowledge sources
- It does not send replies directly
- It does not modify the company profile or offers

## Human review required

Yes. Every draft reply must be reviewed by a team member before sending. Replies involving refunds, discounts, or commitments require manager approval.

## Instructions

1. Read the incoming inquiry.
2. Classify: new lead, existing client, support request, partnership inquiry, spam.
3. Summarize the key details in 2-3 sentences.
4. Draft a reply using company voice (professional, helpful, specific).
5. If the inquiry mentions pricing, reference `knowledge/offers.md` and quote "from" amounts.
6. If the inquiry involves a refund or discount, flag for manager review.
7. Save the draft for human review.

## Failure mode

If classification is uncertain, default to "needs human review" and do not draft a reply. A person triages manually.

## Owner

Sarah Chen, Operations Manager

## Last reviewed

2026-05-01
