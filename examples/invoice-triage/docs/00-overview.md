# Invoice Triage — System Overview

## Name

Invoice Triage

## Purpose

Classify incoming invoices by type and urgency, then route them to the correct approver. AI handles extraction and classification; humans approve high-value items and new vendors.

## Owner

Finance Operations Team

## Providers

| Provider | Model | Purpose |
|----------|-------|---------|
| Anthropic | Claude 3.5 Sonnet | Invoice data extraction and classification |
| OpenAI | GPT-4o | Fallback model for classification |

## Status

- [x] System register complete
- [x] Workflows documented
- [x] Dependencies inventoried
- [x] Data boundaries mapped
- [x] Prompts registered
- [x] Human review gates defined
- [x] Evaluation checklist written
- [x] Runbook ready
- [ ] Maintenance plan in place
- [ ] Exit plan tested
