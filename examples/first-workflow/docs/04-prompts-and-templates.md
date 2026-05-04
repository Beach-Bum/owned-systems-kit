# Prompts and Templates

## Prompt register

| ID | Name | Purpose | Model | Version | Last updated |
|----|------|---------|-------|---------|-------------|
| inquiry-classify-v1 | Classify Inquiry | Assign category and urgency to a customer inquiry | Claude 3.5 Sonnet | v1 | 2026-05-01 |
| inquiry-summarize-v1 | Summarize Inquiry | Write a two-sentence summary for the reviewer | Claude 3.5 Sonnet | v1 | 2026-05-01 |
| inquiry-reply-v1 | Draft Reply | Draft a reply based on category and inquiry content | Claude 3.5 Sonnet | v1 | 2026-05-01 |

## Prompt versioning

Prompts are stored as text files in the team's documentation repository. Each change creates a new version number. The evidence chain records which prompt version was used for each inquiry.

## Template variables

| Variable | Source | Example |
|----------|--------|---------|
| {inquiry_text} | Customer email/form/chat | "Hi, I wanted to check when my next invoice is due..." |
| {customer_name} | Email sender or form field | "Alex" |
| {category} | Output of classify prompt | "billing" |
| {urgency} | Output of classify prompt | "standard" |

## Testing

Before changing a prompt:
1. Run the new version against 10 recent inquiries
2. Compare classifications and draft replies to the previous version
3. Have a team member review the outputs for quality
4. Update the version number and evidence chain reference

## Notes

- The reply prompt explicitly instructs the model not to make financial commitments, offer discounts, or promise specific timelines. This is a safety boundary, not a suggestion.
- If the model's behavior changes after a provider update, re-run the 10-inquiry test before continuing.
