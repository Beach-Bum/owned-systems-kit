# Vendor Exit

If you cannot leave a provider, you do not own the system. Vendor exit planning is architecture, not an afterthought.

## What an exit plan covers

For each external dependency:

- **Alternative** — what you would switch to
- **Migration steps** — how to switch
- **Estimated effort** — how hard the switch is
- **Data portability** — can you export your data?
- **Manual fallback** — how to do the work without any AI provider
- **Last tested** — when you last verified the exit works

## Why manual fallbacks matter

AI providers have outages. APIs get deprecated. Terms change. The question is not whether you will need a fallback, but when. Every workflow should have a documented manual fallback that the team knows how to execute.

## Testing exit plans

An untested exit plan is not an exit plan. Schedule regular tests:

1. Switch to the alternative provider for a real workflow
2. Verify the outputs are acceptable
3. Measure the effort required
4. Run the manual fallback for one cycle
5. Update the exit plan based on findings

## Provider abstraction

Design systems so the AI provider is a configuration choice, not a structural dependency. Use abstraction layers that let you swap models without changing application logic.
