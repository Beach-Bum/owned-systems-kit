#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0

import { init } from './commands/init.js';
import { check } from './commands/check.js';
import { docsBuild } from './commands/docs-build.js';
import { evidenceAdd } from './commands/evidence-add.js';
import { auditExport } from './commands/audit-export.js';

const [command, ...args] = process.argv.slice(2);

const commands: Record<string, (args: string[]) => Promise<void>> = {
  init,
  check,
  'docs': docsBuild,
  'evidence': evidenceAdd,
  'audit': auditExport,
};

function printHelp(): void {
  console.log(`
osk — Owned Systems Kit

Usage:
  osk init                     Create a new owned system documentation package
  osk check                    Validate required files and schemas
  osk evidence add [options]   Add a timestamped evidence record
  osk docs build               Verify and list the documentation package
  osk audit export             Export a portable audit package

Options:
  --help, -h                   Show this help message
  --version, -v                Show version

https://github.com/Beach-Bum/owned-systems-kit
`);
}

async function main(): Promise<void> {
  if (!command || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  if (command === '--version' || command === '-v') {
    console.log('osk 0.1.0');
    return;
  }

  // Handle subcommands: "osk evidence add" → command="evidence", args=["add", ...]
  const handler = commands[command];
  if (!handler) {
    console.error(`Unknown command: ${command}`);
    console.error('Run "osk --help" for usage.');
    process.exit(1);
  }

  await handler(args);
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
