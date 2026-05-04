# Skill: Proposal Drafting

## Purpose

Extract requirements from a qualified inquiry, match to service offers, and draft a proposal outline for partner review.

## Agent

Claude 3.5 Sonnet via Anthropic API

## When this runs

When an inquiry is classified as a qualified lead and a partner requests a proposal draft.

## What this skill reads

- `knowledge/company-profile.md` — for company context
- `knowledge/offers.md` — for service descriptions and pricing
- `knowledge/workflows.md` — for relevant process descriptions
- The qualified inquiry and any follow-up notes (provided as input)

## What this skill does not read

- Client-specific project data from other engagements
- Financial records
- Decision log

## What this skill writes

- A draft proposal outline (saved to a staging area for partner review)
- An evidence record in `evidence/`

## What this skill does not write

- It does not create final proposals
- It does not send proposals to clients
- It does not commit to pricing, timelines, or scope

## Human review required

Yes. Every proposal draft must be reviewed by a partner before being finalised. The partner may edit scope, pricing, and timeline. The AI draft is a starting point, not a commitment.

## Instructions

1. Read the inquiry and follow-up notes.
2. Extract what the client needs: problem, scope, timeline, constraints.
3. Match to relevant service offers from `knowledge/offers.md`.
4. Identify gaps: what the client needs that does not map to a standard offer.
5. Draft a proposal outline: context, proposed approach, deliverables, timeline, pricing.
6. Flag any gaps or uncertainties for the partner.
7. Save the draft for partner review.

## Failure mode

If the inquiry is too vague to match to a service offer, flag for partner review with a summary of what is known and what is missing. Do not draft a proposal from insufficient information.

## Owner

Pieter de Vries, Managing Partner

## Last reviewed

2026-05-01
