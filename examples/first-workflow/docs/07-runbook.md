# Operator Runbook

## Daily operations

1. Check the inquiry queue at the start of each work day
2. Review AI classifications and summaries for new inquiries
3. Approve or edit draft replies
4. Send approved replies
5. Flag any inquiries the AI misclassified or missed
6. Log financial approvals through the manager review gate

## Common tasks

| Task | Frequency | Steps | Who |
|------|-----------|-------|-----|
| Review and approve draft replies | Daily | Check queue, review drafts, approve or edit, send | Any team member |
| Approve financial commitments | As needed | Review flagged inquiries, approve or modify amount | Operations Manager |
| Check for stuck inquiries | Daily | Look for inquiries with no review after 2 hours | Operations Manager |
| Spot-check AI classifications | Weekly | Review 5 random classifications for accuracy | Operations Manager |
| Update prompt templates | As needed | Edit prompt, test on 10 samples, update version | Operations Manager |

## Troubleshooting

### Problem: AI classifies everything as "general question"

**Symptoms:** Most inquiries get the same category regardless of content.
**Likely cause:** Prompt wording is too vague, or the model version changed.
**Fix:** Review the classification prompt. Test against 10 known inquiries. If the prompt is correct, check if the AI provider updated the model and re-test.

### Problem: Draft replies are too formal or too casual

**Symptoms:** Team members consistently edit the tone of draft replies.
**Likely cause:** The reply prompt's tone instructions do not match the company's voice.
**Fix:** Update the tone section of the reply prompt. Include two example replies showing the desired tone.

### Problem: Financial inquiries are not being flagged

**Symptoms:** A reply containing a refund or discount was sent without manager approval.
**Likely cause:** The draft prompt's financial flag logic missed the pattern.
**Fix:** Add the missed pattern to the prompt. Test against 10 financial inquiries. Create an evidence record for the missed flag.

## Monitoring

- Check the inquiry queue at least twice per business day
- Review the weekly spot-check results
- Watch for patterns in rejected or heavily edited drafts (indicates prompt needs updating)

## Contacts

| Role | Person | Contact |
|------|--------|---------|
| System owner | Sarah Chen | sarah@northstarstudio.example |
| Financial approver | Sarah Chen / Owner | sarah@northstarstudio.example |
| AI provider support | Anthropic | support via anthropic.com |

## Emergency procedures

If the AI system is unavailable:

1. Switch to manual triage immediately (see exit plan)
2. Read each inquiry directly
3. Write replies without AI assistance
4. Log the outage start time
5. When the system is restored, process any backlog through the normal workflow
6. Note the outage in the next monthly review
