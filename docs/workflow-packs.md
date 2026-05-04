# First Workflow Packs

Five horizontal workflow packs for teams getting started with AI-assisted operations. Each pack applies across industries. Pick the one closest to your pain, then adapt it.

---

## A. Customer Inquiry Triage

For businesses receiving emails, forms, chats, or support requests.

### What hurts today

Inquiries sit in a shared inbox. Someone reads each one, decides what it is, figures out who should handle it, and writes a reply. Busy days mean slow responses, inconsistent answers, and no record of why one request was prioritized over another.

### How AI helps

- Classify the request by topic, urgency, and type
- Summarize the context for whoever handles it
- Suggest a priority level
- Draft a first reply based on the request type

### What a human approves

- Replies to important or high-value customers
- Refunds, discounts, or financial commitments
- Escalations to management or external partners
- Anything involving sensitive data or money

### Data touched

- Customer name and contact information
- Request content (email, form, chat message)
- Internal customer history (if available)
- Draft and final replies

### Evidence to log

| Field | Example |
|-------|---------|
| Request ID | INQ-2026-0142 |
| Category | Billing / refund request |
| AI summary | Customer requesting refund for duplicate charge on May invoice |
| Suggested response | Draft refund acknowledgment with 5-7 day processing note |
| Final response | Approved refund, sent confirmation email |
| Reviewer | Sarah Chen |
| Timestamp | 2026-05-04T09:15:00Z |

### Common failure modes

- AI misclassifies urgency and a time-sensitive request sits unread
- Draft reply contains incorrect information from a similar but different customer
- AI suggests a refund amount that does not match company policy
- Classification model changes behavior after a provider update

### Fallback process

Manual inbox triage. One person reads each message, categorizes it in a spreadsheet or label system, and writes replies without AI assistance. Slower, but the business continues.

### OSK documents produced

- Workflow map (classify, summarize, draft, review, send)
- Data boundary map (inbox, CRM, AI provider)
- Prompt register (classification prompt, reply drafting prompt)
- Human review gates (reply approval, refund approval)
- Evidence chain log (per-inquiry records)
- Operator runbook (daily triage routine)
- Vendor-exit plan (manual triage fallback)

---

## B. Quote and Proposal Drafting

For agencies, consultants, trades, logistics firms, service providers, and B2B teams.

### What hurts today

A potential client sends a request. Someone reads it, asks clarifying questions, looks up past similar work, assembles pricing, writes the proposal, and sends it for internal review. This takes hours or days, and the quality varies depending on who writes it.

### How AI helps

- Extract requirements from the inquiry
- Identify missing information that needs clarification
- Draft a quote or proposal outline based on similar past work
- Prepare a review checklist for the approver

### What a human approves

- Pricing and discount decisions
- Scope definition and boundaries
- Contract terms and conditions
- Final proposal before it goes to the client

### Data touched

- Client inquiry (email, brief, RFP)
- Internal pricing data and rate cards
- Past proposals and case studies
- Client contact information

### Evidence to log

| Field | Example |
|-------|---------|
| Original request | RFP from Meridian Corp, received 2026-05-01 |
| Extracted requirements | Website redesign, 12 pages, CMS integration, 8-week timeline |
| Assumptions | Hosting not included, content provided by client |
| Quote version | v2, revised after scope clarification call |
| Approver | James Ortega, Partner |
| Timestamp | 2026-05-03T14:30:00Z |

### Common failure modes

- AI drafts a scope that does not match internal capacity
- Pricing pulled from outdated rate card
- Proposal includes services the team does not offer
- Missing exclusions lead to scope disputes later

### Fallback process

Manual quote template. The team fills in a standard proposal document by hand using past examples as reference. Takes longer, but pricing and scope decisions were always human anyway.

### OSK documents produced

- Workflow map (receive, extract, draft, review, send)
- Data boundary map (inbox, pricing data, AI provider)
- Prompt register (requirements extraction prompt, proposal outline prompt)
- Human review gates (pricing approval, final proposal approval)
- Evidence chain log (per-proposal records)
- Operator runbook (proposal workflow routine)
- Vendor-exit plan (manual template fallback)

---

## C. Document Review and Summarization

For contracts, invoices, reports, onboarding forms, claims, PDFs, or long email threads.

### What hurts today

Documents arrive and someone reads the entire thing to find the relevant information. Key details are buried in dense text. Important items get missed. Different people extract different information from the same document. There is no consistent record of what was reviewed.

### How AI helps

- Summarize documents to key points
- Extract specific fields (dates, amounts, names, terms)
- Flag missing or inconsistent information
- Compare document versions and highlight changes

### What a human approves

- Interpretation of ambiguous language
- Decisions based on extracted information
- Filing status and routing decisions
- External responses based on document content

### Data touched

- Source documents (PDFs, contracts, invoices, forms)
- Extracted data fields
- Summary outputs
- Filing and routing decisions

### Evidence to log

| Field | Example |
|-------|---------|
| Document ID | CONTRACT-2026-0089 |
| Source file | meridian-services-agreement-v3.pdf |
| Extracted fields | Term: 24 months, Value: 48,000 EUR, Auto-renew: yes |
| Summary | Services agreement with 24-month term, quarterly billing, 90-day notice for cancellation |
| Flagged issues | Non-standard liability clause in section 8.2 |
| Reviewer | Maria Santos |
| Timestamp | 2026-05-02T11:00:00Z |

### Common failure modes

- AI misreads a scanned document and extracts wrong amounts
- Summary omits a critical clause buried in fine print
- Version comparison misses a subtle but important change
- AI hallucinates a field that does not exist in the document

### Fallback process

Manual document checklist. A person reads the document with a printed checklist of fields to find, notes them in a spreadsheet, and flags anything unusual. The process the team used before AI.

### OSK documents produced

- Workflow map (receive, extract, summarize, flag, review, file)
- Data boundary map (document storage, extraction outputs, AI provider)
- Prompt register (summarization prompt, extraction prompt, comparison prompt)
- Human review gates (interpretation approval, filing approval)
- Evidence chain log (per-document records)
- Operator runbook (document review routine)
- Vendor-exit plan (manual checklist fallback)

---

## D. Internal Knowledge Base

For teams with scattered SOPs, policies, notes, Slack threads, Notion pages, Google Docs, PDFs, and tribal knowledge.

### What hurts today

Someone has a question. They search Slack, check the wiki, ask a colleague, dig through Google Drive, and maybe find an answer that may or may not be current. Knowledge lives in people's heads, scattered documents, and old chat threads. When someone leaves, their knowledge leaves with them.

### How AI helps

- Answer internal questions by pointing to source documents
- Draft updates to standard operating procedures
- Identify stale or contradictory information across sources
- Surface relevant documents when a topic comes up

### What a human approves

- New or changed standard operating procedures
- Policy language and official guidance
- Changes to source-of-truth documents
- Answers that will be shared outside the team

### Data touched

- Internal documents (SOPs, policies, guides, notes)
- Chat and message history (if included)
- Employee questions and answers
- Source document references

### Evidence to log

| Field | Example |
|-------|---------|
| Question | What is our return policy for custom orders? |
| Answer generated | Custom orders are non-refundable per SOP-2024-017, section 3.2 |
| Documents cited | SOP-2024-017-returns.pdf, policy-update-2025-11.md |
| Update request | None |
| Approver | N/A (informational, no policy change) |
| Timestamp | 2026-05-04T15:20:00Z |

### Common failure modes

- AI answers based on an outdated document
- Source document was moved or deleted and the link is broken
- AI confidently answers a question with information from the wrong policy
- Team relies on AI answers without checking the cited source

### Fallback process

Manual knowledge index. A shared document or spreadsheet listing common questions, the answer, and where to find the source. Updated manually. Slower, but the team can still find answers.

### OSK documents produced

- Workflow map (question, search, answer, cite, review)
- Data boundary map (document sources, AI provider, question logs)
- Prompt register (question-answering prompt, SOP drafting prompt)
- Human review gates (SOP approval, policy change approval)
- Evidence chain log (per-question records for policy-relevant queries)
- Operator runbook (knowledge base maintenance routine)
- Vendor-exit plan (manual index fallback)

---

## E. Operations Handover Notes

For teams with shifts, jobs, projects, dispatch, field work, client delivery, production, or support queues.

### What hurts today

One shift ends and another begins. The outgoing team writes a quick note (or forgets to). The incoming team pieces together what happened from scattered messages, incomplete notes, and ticket queues. Important context is lost. Issues get re-investigated. Blockers surprise the next team.

### How AI helps

- Summarize what happened during the shift or period
- List open issues with current status
- Identify blockers and items needing attention
- Draft a structured handover note for review

### What a human approves

- Final handover note before it is shared with the next team
- Operational decisions recorded in the handover
- Escalation items flagged for management

### Data touched

- Activity logs, ticket updates, messages from the shift
- Open issue and blocker lists
- Handover notes (draft and final)
- Escalation records

### Evidence to log

| Field | Example |
|-------|---------|
| Handover period | 2026-05-04 06:00 to 14:00 |
| Source notes | 12 ticket updates, 3 Slack threads, 1 incident report |
| Summary | Resolved 9 tickets. Server migration 80% complete. Client callback pending for Meridian account. |
| Open issues | Meridian callback (due by 16:00), staging deploy blocked on QA |
| Approved handover | Yes |
| Reviewer | Tom Alvarez, Shift Lead |
| Timestamp | 2026-05-04T14:15:00Z |

### Common failure modes

- AI summary misses a critical open item
- Handover note includes resolved issues as still open
- Sensitive client information included in a handover shared too broadly
- Summary generated from incomplete source data (messages sent after cutoff)

### Fallback process

Manual shift note. The outgoing team writes a structured note using a standard template: what happened, what is open, what needs attention, who to contact. The template the team used before AI.

### OSK documents produced

- Workflow map (collect, summarize, review, approve, handover)
- Data boundary map (activity sources, handover storage, AI provider)
- Prompt register (summarization prompt, issue extraction prompt)
- Human review gates (handover approval)
- Evidence chain log (per-handover records)
- Operator runbook (shift handover routine)
- Vendor-exit plan (manual template fallback)

---

## Choosing your first workflow

Pick the workflow where:

1. The pain is felt daily or weekly (not quarterly)
2. The process already exists, even if informal
3. One person can own the documentation
4. The AI assist is narrow and specific (not "automate everything")
5. The fallback process is clear

Start small. Document one workflow completely. Then apply the same pattern to the next one.

## Next steps

- Read the [business owner quickstart](business-owner-quickstart.md) for a 30-minute mapping exercise
- Look at the [first workflow example](../examples/first-workflow/) for a filled-in Customer Inquiry Triage package
