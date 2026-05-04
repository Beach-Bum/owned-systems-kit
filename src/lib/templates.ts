// SPDX-License-Identifier: Apache-2.0

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Resolve the path to the bundled templates directory.
 */
function templatesDir(): string {
  // In dist: dist/lib/ → ../../templates
  const candidates = [
    join(__dirname, '..', '..', 'templates'),
    join(__dirname, '..', 'templates'),
  ];
  for (const dir of candidates) {
    if (existsSync(dir)) return dir;
  }
  throw new Error('Could not find templates directory.');
}

/**
 * Load a template file by name (e.g. "00-overview.md").
 */
export function loadTemplate(name: string): string {
  const filePath = join(templatesDir(), name);
  if (!existsSync(filePath)) {
    throw new Error(`Template not found: ${name}`);
  }
  return readFileSync(filePath, 'utf-8');
}

/**
 * Load all template files as a map of filename -> content.
 */
export function loadTemplates(): Map<string, string> {
  const dir = templatesDir();
  const files = readdirSync(dir).filter(f => f.endsWith('.md')).sort();
  const templates = new Map<string, string>();
  for (const file of files) {
    templates.set(file, readFileSync(join(dir, file), 'utf-8'));
  }
  return templates;
}
