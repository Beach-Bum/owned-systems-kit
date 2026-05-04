# Vendor Exit Plan

## Dependencies and alternatives

| Dependency | Alternative | Tested? | Migration effort | Data portable? |
|-----------|-------------|---------|-----------------|---------------|
| Anthropic Claude 3.5 Sonnet | OpenAI GPT-4o | no | Low — change API key and endpoint | full (no stored data) |
| Anthropic Claude 3.5 Sonnet | Manual triage (no AI) | yes | None — revert to previous process | n/a |
| Google Workspace | Microsoft 365, Fastmail | no | Medium — email migration | full (standard email export) |
| HubSpot Free | Spreadsheet, Notion | no | Low — CSV export | full |

## Exit procedures

### Dependency: Anthropic Claude 3.5 Sonnet

**Alternative 1:** OpenAI GPT-4o
**Migration steps:**
1. Sign up for OpenAI API access
2. Update API key and endpoint in the workflow configuration
3. Test classification, summarization, and reply drafting against 20 recent inquiries
4. Adjust prompts if output quality differs
5. Update the prompt register with new model reference

**Estimated effort:** 2-4 hours
**Data portability:** Full. No data is stored with Anthropic beyond the API request.

**Alternative 2:** Manual triage (no AI)
**Migration steps:**
1. Team members read each inquiry directly
2. Classify manually using the category list from the workflow map
3. Write replies without AI drafts
4. Continue using the same review gates and evidence logging

**Estimated effort:** None (revert to previous process)
**Impact:** Slower response times. Estimate 2-3x longer per inquiry.

## Manual fallback

If all AI providers are unavailable:

1. Open the shared inbox
2. Read each inquiry
3. Classify it using the category list: billing, scheduling, general question, complaint, partnership
4. Assign urgency: standard, priority, urgent
5. Write a reply using past replies as templates
6. Have another team member review before sending (same review gate, no AI draft)
7. Log the evidence record manually

This is the process the team used before AI assistance. It works. It is slower.

## Data export

| Provider | Export method | Format | What is lost |
|----------|-------------|--------|-------------|
| Anthropic | No stored data to export | n/a | Nothing — data is not retained |
| Google Workspace | Google Takeout | MBOX, CSV | Some formatting |
| HubSpot | Settings > Export | CSV | Workflow automations |

## Testing schedule

Test the manual fallback process once every six months. Run one day of inquiry triage without AI to confirm the team can operate independently.

Last tested: 2026-05-01 (during initial setup, before AI was enabled)

Next test: 2026-11-01
