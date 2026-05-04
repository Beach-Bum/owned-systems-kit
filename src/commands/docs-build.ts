// SPDX-License-Identifier: Apache-2.0

import { join } from 'node:path';
import { DOCS_ORDER } from '../lib/schemas.js';
import { fileExists, readFile } from '../lib/filesystem.js';

export async function docsBuild(args: string[]): Promise<void> {
  // Handle "docs build" subcommand
  if (args[0] !== 'build') {
    console.error('Usage: osk docs build');
    process.exit(1);
  }

  const cwd = process.cwd();

  console.log('Documentation package:\n');

  let allPresent = true;

  for (const file of DOCS_ORDER) {
    const filePath = join(cwd, file);
    const exists = fileExists(filePath);
    const status = exists ? 'OK' : 'MISSING';

    if (!exists) {
      allPresent = false;
      console.log(`  ${status.padEnd(8)} ${file}`);
      continue;
    }

    const content = readFile(filePath);
    const lines = content?.split('\n').filter(l => l.trim().length > 0) ?? [];
    const hasTodos = content?.includes('TODO:') || content?.includes('[ ]');
    const note = hasTodos ? '(has TODOs)' : `(${lines.length} lines)`;
    console.log(`  ${status.padEnd(8)} ${file}  ${note}`);
  }

  console.log('');

  if (!allPresent) {
    console.log('Some documentation files are missing. Run "osk init" to create them.');
  } else {
    console.log('All documentation files present.');
    console.log('Package is ready for review.');
  }
}
