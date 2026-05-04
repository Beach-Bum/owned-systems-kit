// SPDX-License-Identifier: Apache-2.0

import { parse as parseYaml } from 'yaml';
import { readFile } from './filesystem.js';
import { SYSTEM_YAML_REQUIRED_FIELDS } from './schemas.js';

export interface ValidationResult {
  file: string;
  status: 'ok' | 'warn' | 'fail';
  message: string;
}

/**
 * Validate that owned-system.yaml has all required fields.
 */
export function validateSystemYaml(cwd: string): ValidationResult {
  const content = readFile(`${cwd}/owned-system.yaml`);
  if (!content) {
    return { file: 'owned-system.yaml', status: 'fail', message: 'File not found' };
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = parseYaml(content) as Record<string, unknown>;
  } catch {
    return { file: 'owned-system.yaml', status: 'fail', message: 'Invalid YAML' };
  }

  if (!parsed || typeof parsed !== 'object') {
    return { file: 'owned-system.yaml', status: 'fail', message: 'Empty or invalid YAML' };
  }

  const missing = SYSTEM_YAML_REQUIRED_FIELDS.filter(f => !(f in parsed));
  if (missing.length > 0) {
    return {
      file: 'owned-system.yaml',
      status: 'warn',
      message: `Missing fields: ${missing.join(', ')}`,
    };
  }

  return { file: 'owned-system.yaml', status: 'ok', message: 'Valid' };
}

/**
 * Check if a documentation file has content beyond the template header.
 */
export function validateDocFile(cwd: string, relativePath: string): ValidationResult {
  const content = readFile(`${cwd}/${relativePath}`);
  if (!content) {
    return { file: relativePath, status: 'fail', message: 'File not found' };
  }

  const trimmed = content.trim();
  if (trimmed.length === 0) {
    return { file: relativePath, status: 'fail', message: 'Empty file' };
  }

  // Check if the file still has TODO markers
  if (trimmed.includes('TODO:') || trimmed.includes('[ ]')) {
    return { file: relativePath, status: 'warn', message: 'Contains TODO items' };
  }

  return { file: relativePath, status: 'ok', message: 'OK' };
}
