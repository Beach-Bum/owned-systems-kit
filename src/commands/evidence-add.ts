// SPDX-License-Identifier: Apache-2.0

import { join } from 'node:path';
import { randomBytes } from 'node:crypto';
import { writeFile, ensureDir } from '../lib/filesystem.js';

interface EvidenceOptions {
  workflow: string;
  step: string;
  model: string;
  provider: string;
  prompt: string;
  inputHash: string;
  output: string;
  reviewer: string;
  reviewStatus: string;
  notes: string;
}

function parseArgs(args: string[]): EvidenceOptions {
  const opts: EvidenceOptions = {
    workflow: '',
    step: '',
    model: '',
    provider: '',
    prompt: '',
    inputHash: '',
    output: '',
    reviewer: '',
    reviewStatus: 'pending',
    notes: '',
  };

  // Skip "add" subcommand if present
  const startIdx = args[0] === 'add' ? 1 : 0;

  for (let i = startIdx; i < args.length; i++) {
    const arg = args[i];
    const next = args[i + 1] ?? '';
    switch (arg) {
      case '--workflow': opts.workflow = next; i++; break;
      case '--step': opts.step = next; i++; break;
      case '--model': opts.model = next; i++; break;
      case '--provider': opts.provider = next; i++; break;
      case '--prompt': opts.prompt = next; i++; break;
      case '--input-hash': opts.inputHash = next; i++; break;
      case '--output': opts.output = next; i++; break;
      case '--reviewer': opts.reviewer = next; i++; break;
      case '--review-status': opts.reviewStatus = next; i++; break;
      case '--notes': opts.notes = next; i++; break;
      default:
        if (arg === '--help' || arg === '-h') {
          printHelp();
          process.exit(0);
        }
    }
  }

  return opts;
}

function printHelp(): void {
  console.log(`
osk evidence add — Create a timestamped evidence record

Options:
  --workflow        Workflow name
  --step            Workflow step
  --model           Model name (e.g. claude-3.5-sonnet)
  --provider        Provider name (e.g. Anthropic)
  --prompt          Prompt reference or identifier
  --input-hash      Hash of input data
  --output          Output summary
  --reviewer        Reviewer name
  --review-status   Review status (pending, approved, rejected)
  --notes           Additional notes
`);
}

export async function evidenceAdd(args: string[]): Promise<void> {
  const opts = parseArgs(args);
  const cwd = process.cwd();
  const evidenceDir = join(cwd, 'evidence');

  ensureDir(evidenceDir);

  const now = new Date();
  const id = randomBytes(4).toString('hex');
  const timestamp = now.toISOString().replace(/[:.]/g, '').replace('Z', 'Z');
  const safeTimestamp = now.toISOString().replace(/:/g, '').split('.')[0] + 'Z';
  const filename = `${safeTimestamp}-${id}.md`;

  const content = `---
id: ${id}
timestamp: ${now.toISOString()}
workflow: ${opts.workflow || '""'}
step: ${opts.step || '""'}
prompt_reference: ${opts.prompt || '""'}
model: ${opts.model || '""'}
provider: ${opts.provider || '""'}
input_hash: ${opts.inputHash || '""'}
output_summary: ${opts.output || '""'}
human_review_status: ${opts.reviewStatus}
reviewer: ${opts.reviewer || '""'}
notes: ${opts.notes || '""'}
---

# Evidence Record ${id}

**Timestamp:** ${now.toISOString()}
**Workflow:** ${opts.workflow || 'Not specified'}
**Step:** ${opts.step || 'Not specified'}

## Decision

**Model:** ${opts.model || 'Not specified'}
**Provider:** ${opts.provider || 'Not specified'}
**Prompt reference:** ${opts.prompt || 'Not specified'}

## Input

**Hash:** ${opts.inputHash || 'Not specified'}

## Output

${opts.output || 'Not specified'}

## Human Review

**Status:** ${opts.reviewStatus}
**Reviewer:** ${opts.reviewer || 'Not specified'}

## Notes

${opts.notes || 'None'}
`;

  writeFile(join(evidenceDir, filename), content);
  console.log(`Evidence record created: evidence/${filename}`);
}
