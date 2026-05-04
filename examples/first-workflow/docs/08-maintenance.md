# Maintenance Plan

## Review schedule

| Document | Frequency | Owner | Last reviewed |
|----------|-----------|-------|-------------|
| System register | Quarterly | Sarah Chen | 2026-05-01 |
| Workflow map | Quarterly | Sarah Chen | 2026-05-01 |
| Dependencies | Monthly | Sarah Chen | 2026-05-01 |
| Data boundaries | Quarterly | Sarah Chen | 2026-05-01 |
| Prompts | Monthly | Sarah Chen | 2026-05-01 |
| Review gates | Quarterly | Sarah Chen | 2026-05-01 |
| Evaluation checklist | Quarterly | Sarah Chen | 2026-05-01 |
| Runbook | Quarterly | Sarah Chen | 2026-05-01 |
| Exit plan | Every six months | Sarah Chen | 2026-05-01 |

## Model updates

When Anthropic releases a new model version:
1. Do not switch immediately
2. Test the new version against 20 recent inquiries
3. Compare classification accuracy, summary quality, and reply quality
4. If quality is equal or better, update the prompt register and switch
5. If quality drops, stay on the current version and note it in the review log

## Prompt drift

Signs that prompts need updating:
- Team members are editing most draft replies before sending (approval rate drops below 60%)
- Classification accuracy drops on the monthly spot-check
- New inquiry types appear that the current categories do not cover
- The company's services, pricing, or policies change

When any of these happen, update the affected prompt, test it, and increment the version number.

## Dependency health

- Check Anthropic API status and terms quarterly
- Check Google Workspace terms when notified of changes
- Check HubSpot free tier limits if inquiry volume increases

## Documentation freshness

Every quarter, Sarah Chen reviews each document in this package and updates anything that has changed. If a document has not changed, note "Reviewed, no changes" with the date.

Documentation that is never reviewed becomes fiction. Schedule the review and do it.
