// SPDX-License-Identifier: Apache-2.0

import { join } from 'node:path';
import { REQUIRED_FILES } from '../lib/schemas.js';
import { validateSystemYaml, validateDocFile } from '../lib/validate.js';
import { fileExists, listFiles } from '../lib/filesystem.js';

export async function check(_args: string[]): Promise<void> {
  const cwd = process.cwd();
  let hasErrors = false;
  let hasWarnings = false;

  console.log('Checking owned system documentation package...\n');

  // Check owned-system.yaml
  const yamlResult = validateSystemYaml(cwd);
  printResult(yamlResult.file, yamlResult.status, yamlResult.message);
  if (yamlResult.status === 'fail') hasErrors = true;
  if (yamlResult.status === 'warn') hasWarnings = true;

  // Check required doc files
  for (const file of REQUIRED_FILES) {
    if (file === 'owned-system.yaml') continue;

    if (!fileExists(join(cwd, file))) {
      printResult(file, 'fail', 'File not found');
      hasErrors = true;
    } else {
      const result = validateDocFile(cwd, file);
      printResult(result.file, result.status, result.message);
      if (result.status === 'fail') hasErrors = true;
      if (result.status === 'warn') hasWarnings = true;
    }
  }

  // Check evidence directory
  const evidenceDir = join(cwd, 'evidence');
  if (!fileExists(evidenceDir)) {
    printResult('evidence/', 'warn', 'Directory not found');
    hasWarnings = true;
  } else {
    const evidenceFiles = listFiles(evidenceDir).filter(f => f.endsWith('.md'));
    if (evidenceFiles.length === 0) {
      printResult('evidence/', 'warn', 'No evidence records found');
      hasWarnings = true;
    } else {
      printResult('evidence/', 'ok', `${evidenceFiles.length} record(s)`);
    }
  }

  // Summary
  console.log('');
  if (hasErrors) {
    console.log('FAIL: Required files are missing or invalid.');
    process.exit(1);
  } else if (hasWarnings) {
    console.log('WARN: Package has warnings. Review items above.');
  } else {
    console.log('OK: All checks passed.');
  }
}

function printResult(file: string, status: string, message: string): void {
  const label = status === 'ok' ? 'OK' : status === 'warn' ? 'WARN' : 'FAIL';
  const padded = file.padEnd(40);
  console.log(`  ${padded} ${label}  ${message}`);
}
