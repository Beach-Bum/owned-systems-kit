# Customer Inquiry Triage — System Overview

## Name

Customer Inquiry Triage

## Purpose

Triage incoming customer inquiries using AI to classify, summarize, and draft replies. A person reviews every reply before it is sent. Financial decisions (refunds, discounts) require manager approval.

## Company

Northstar Studio — a small service business with a five-person operations team handling 40-60 customer inquiries per week via email, contact form, and chat.

## Owner

Sarah Chen, Operations Manager

## Problem before this system

Inquiries sat in a shared inbox. Whoever checked the inbox next would read each message, decide what it was about, and write a reply. Busy days meant slow responses. There was no record of why one inquiry was prioritized over another. Tone and quality varied depending on who replied.

## What AI does

- Classifies inquiries by topic and urgency
- Summarizes the request for the person handling it
- Drafts a reply based on the inquiry type

## What AI does not do

- Send replies without human approval
- Make financial commitments (refunds, discounts, pricing changes)
- Access customer payment information
- Decide on escalations

## Provider

Anthropic Claude 3.5 Sonnet

## Status

- [x] System register complete
- [x] Workflow documented
- [x] Dependencies inventoried
- [x] Data boundaries mapped
- [x] Prompts registered
- [x] Human review gates defined
- [x] Evaluation checklist written
- [x] Runbook ready
- [x] Maintenance plan in place
- [x] Exit plan documented
