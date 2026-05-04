// SPDX-License-Identifier: Apache-2.0

import { join } from 'node:path';
import { ensureDir, copyDir, fileExists, writeFile, readFile, listFiles } from '../lib/filesystem.js';

export async function auditExport(args: string[]): Promise<void> {
  // Handle "audit export" subcommand
  if (args[0] !== 'export') {
    console.error('Usage: osk audit export');
    process.exit(1);
  }

  const cwd = process.cwd();
  const now = new Date();
  const dateStamp = now.toISOString().split('T')[0];
  const exportDir = join(cwd, 'audit-export', dateStamp);

  if (!fileExists(join(cwd, 'owned-system.yaml'))) {
    console.error('No owned-system.yaml found. Run "osk init" first.');
    process.exit(1);
  }

  console.log(`Exporting audit package to audit-export/${dateStamp}/\n`);

  ensureDir(exportDir);

  // Copy owned-system.yaml
  const systemYaml = readFile(join(cwd, 'owned-system.yaml'));
  if (systemYaml) {
    writeFile(join(exportDir, 'owned-system.yaml'), systemYaml);
    console.log('  owned-system.yaml');
  }

  // Copy docs/
  if (fileExists(join(cwd, 'docs'))) {
    copyDir(join(cwd, 'docs'), join(exportDir, 'docs'));
    console.log('  docs/');
  }

  // Copy evidence/
  if (fileExists(join(cwd, 'evidence'))) {
    const evidenceFiles = listFiles(join(cwd, 'evidence')).filter(f => f.endsWith('.md'));
    if (evidenceFiles.length > 0) {
      copyDir(join(cwd, 'evidence'), join(exportDir, 'evidence'));
      console.log(`  evidence/ (${evidenceFiles.length} records)`);
    }
  }

  // Copy gates/
  if (fileExists(join(cwd, 'gates'))) {
    const gateFiles = listFiles(join(cwd, 'gates'));
    if (gateFiles.length > 0) {
      copyDir(join(cwd, 'gates'), join(exportDir, 'gates'));
      console.log('  gates/');
    }
  }

  // Copy workflows/
  if (fileExists(join(cwd, 'workflows'))) {
    const workflowFiles = listFiles(join(cwd, 'workflows'));
    if (workflowFiles.length > 0) {
      copyDir(join(cwd, 'workflows'), join(exportDir, 'workflows'));
      console.log('  workflows/');
    }
  }

  // Copy schemas/ (from package installation or local repo)
  const schemasDir = join(cwd, 'schemas');
  if (fileExists(schemasDir)) {
    copyDir(schemasDir, join(exportDir, 'schemas'));
    console.log('  schemas/');
  }

  // Write export manifest
  const manifest = `# Audit Export
# Generated: ${now.toISOString()}
# System: ${cwd}

export_date: "${now.toISOString()}"
exported_by: "osk audit export"
contents:
  - owned-system.yaml
  - docs/
  - evidence/
  - gates/
  - workflows/
  - schemas/
`;
  writeFile(join(exportDir, 'MANIFEST.yaml'), manifest);
  console.log('  MANIFEST.yaml');

  console.log(`\nExport complete: audit-export/${dateStamp}/`);
}
