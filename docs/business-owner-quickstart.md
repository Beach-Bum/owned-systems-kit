# Business Owner Quickstart

You do not need to be a developer to start. Owned Systems Kit helps you describe one workflow clearly: what happens today, where AI may help, what a person must approve, what evidence should be kept, and how the business can fall back to the manual process.

This guide walks you through the thinking. No code required.

## Start with one painful workflow

Pick a workflow that causes delays, rework, risk, or repeated admin. Good candidates:

- Responding to customer inquiries
- Drafting quotes or proposals
- Reviewing documents, contracts, or invoices
- Answering internal questions across a scattered knowledge base
- Writing shift handover notes

Do not try to document every workflow at once. Start with one.

## Write down who owns it

Every workflow needs one person responsible for it. This is the person who:

- Knows how it works today
- Can explain when it goes wrong
- Will review AI-assisted changes before they go live
- Keeps the documentation current

Write their name and role. If nobody owns it, that is the first problem to solve.

## Decide what AI is allowed to do

AI is good at drafting, classifying, summarizing, routing, and flagging. It is not good at making judgment calls about money, risk, relationships, or exceptions.

For your workflow, write down what AI is allowed to do. Be specific:

- "Classify incoming emails by topic and urgency"
- "Draft a first reply based on the request type"
- "Summarize a long document into key points"
- "Flag missing information in a form submission"

If you cannot describe what the AI does in one sentence, the scope is too broad.

## Decide what a human must approve

Write down every point where a person must review and approve before the workflow continues. Common approval points:

- Replies to customers involving money, commitments, or sensitive information
- Pricing, discounts, refunds, or contract terms
- Decisions that affect other teams or external partners
- Anything the business would need to explain or defend later

These are called human review gates. They are not bureaucracy. They are the points where a person takes responsibility.

## List the data the workflow touches

Write down:

- What information enters the workflow (emails, forms, documents, messages)
- Where the information goes (inbox, shared drive, CRM, spreadsheet)
- What sensitive data is involved (names, financials, health, legal)
- Who has access to each piece of data
- Whether any data leaves your systems (sent to an AI provider, for example)

This becomes your data boundary map. It does not need to be perfect on day one. It needs to exist.

## Keep evidence when the system acts

When AI assists a decision, keep a record:

- What was the request?
- What did the AI produce?
- Who reviewed it?
- Was it approved, edited, or rejected?
- When did this happen?

This is the evidence chain. It protects the business, helps with training, and makes the workflow auditable. A simple timestamped log is enough to start.

## Write the fallback process

If the AI tool is unavailable tomorrow, how does the team complete this work? Write down the manual process. This is the vendor-exit plan for this workflow.

If the team cannot complete the work without the AI tool, that is a dependency risk worth knowing about now, not during an outage.

## Review the workflow monthly

Set a monthly reminder to review:

- Is the workflow still accurate?
- Has the AI quality changed?
- Are the human review gates working?
- Has the data boundary changed?
- Is the fallback process still viable?

Documentation that is never reviewed becomes fiction.

---

## 30-minute exercise: Map one workflow on paper

Set a timer for 30 minutes. Pick one workflow and answer these questions on paper, a whiteboard, or a shared document.

### 1. What starts the workflow?

What event triggers this work? An email arrives, a form is submitted, a document is uploaded, a shift ends, a customer calls.

### 2. Who handles it today?

Name the person or role. If multiple people are involved, list them in order.

### 3. What information is needed?

What does the person need to see before they can act? Where does that information come from?

### 4. Where does work get stuck?

What causes delays? Waiting for information, unclear ownership, manual copying between systems, repeated questions with known answers.

### 5. What could AI draft, summarize, classify, or check?

Be specific. "AI drafts a reply" is better than "AI handles communication." Name the exact task, not the category.

### 6. What must a human approve?

List every decision where a person should review before the workflow continues. When in doubt, add the approval point. You can remove it later if it turns out to be unnecessary.

### 7. What proof should be kept?

If someone asked "why did you send that reply?" or "who approved that refund?" six months from now, what records would you need?

### 8. What happens if the AI tool is unavailable?

Describe the manual process. If there is no manual process, write "No fallback exists" and flag it as a risk.

---

## What you produce

After this exercise, you have the raw material for a complete documentation package:

| Document | What it captures |
|----------|-----------------|
| System overview | What the workflow does and who owns it |
| Workflow map | Steps, triggers, inputs, outputs |
| Data boundary map | What data flows where |
| Prompt register | What AI is asked to do |
| Human review gates | Where a person must approve |
| Evidence chain | What records are kept |
| Operator runbook | How to run the workflow day-to-day |
| Vendor-exit plan | How to keep working without the AI tool |

You do not need software to start. A shared document or folder with these sections is a working system. The Owned Systems Kit CLI helps you generate and validate these documents, but the thinking comes first.

## Next steps

- Read the [workflow packs](workflow-packs.md) for five common starting points
- Look at the [first workflow example](../examples/first-workflow/) for a filled-in package
- If you have a developer on the team, try `npx owned-systems-kit init` to generate the template structure
