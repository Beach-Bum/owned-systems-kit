// SPDX-License-Identifier: Apache-2.0

/**
 * Required files for a complete owned system documentation package.
 */
export const REQUIRED_FILES = [
  'owned-system.yaml',
  'docs/00-overview.md',
  'docs/01-workflow-map.md',
  'docs/02-tools-and-dependencies.md',
  'docs/03-data-boundaries.md',
  'docs/04-prompts-and-templates.md',
  'docs/05-human-review-gates.md',
  'docs/06-evaluation-checklist.md',
  'docs/07-runbook.md',
  'docs/08-maintenance.md',
  'docs/09-exit-plan.md',
] as const;

/**
 * Ordered list of documentation files for the package.
 */
export const DOCS_ORDER = REQUIRED_FILES.filter(f => f.startsWith('docs/'));

/**
 * Required top-level fields in owned-system.yaml.
 */
export const SYSTEM_YAML_REQUIRED_FIELDS = [
  'name',
  'version',
  'description',
  'owner',
  'created',
  'last_reviewed',
] as const;

/**
 * Required fields for an evidence record.
 */
export const EVIDENCE_REQUIRED_FIELDS = [
  'id',
  'timestamp',
  'workflow',
  'step',
  'model',
  'provider',
  'human_review_status',
] as const;
