# Evaluation Checklist

## Correctness criteria

| Workflow step | Criterion | How to verify | Acceptable threshold |
|--------------|-----------|---------------|---------------------|
| Classify inquiry | Category matches actual topic | Compare AI category to human judgment on 20 sample inquiries | 90% agreement |
| Classify inquiry | Urgency level is appropriate | Review urgency ratings on 20 sample inquiries | No urgent items classified as standard |
| Summarize context | Summary captures the key request | Reviewer confirms summary matches inquiry | Summary is useful in 95% of cases |
| Draft reply | Reply addresses the question | Reviewer confirms reply is on-topic | On-topic in 90% of cases |
| Draft reply | No unauthorized commitments | Check for discount, refund, or timeline promises | Zero unauthorized commitments |

## Quality checks

- [ ] Classification is consistent (same inquiry type gets same category)
- [ ] Summaries are concise (two sentences, not five)
- [ ] Draft replies match the company's tone (professional, friendly, not corporate)
- [ ] No hallucinated information (made-up policies, wrong pricing, invented details)
- [ ] Sensitive inquiries are flagged for careful review
- [ ] Financial inquiries are flagged for manager approval

## Performance baseline

| Metric | Target | Current |
|--------|--------|---------|
| Classification accuracy | 90% | Measured monthly on 20-inquiry sample |
| Reply approval rate (sent without major edits) | 70% | Measured weekly |
| Time from inquiry to reply | Under 4 hours during business hours | Measured weekly |
| Financial flag accuracy | No missed financial items | Measured monthly |

## Regression testing

If the AI provider updates the model or the team changes a prompt:
1. Run the updated system against the last 20 classified inquiries
2. Compare classifications, summaries, and draft replies to the previous versions
3. If classification accuracy drops below 85% or financial flags are missed, revert the change

## Review schedule

Last evaluated: 2026-05-01

Next evaluation: 2026-06-01
