// SPDX-License-Identifier: Apache-2.0

import { existsSync, mkdirSync, writeFileSync, readFileSync, cpSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

/**
 * Ensure a directory exists, creating it recursively if needed.
 */
export function ensureDir(dir: string): void {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

/**
 * Write a file, creating parent directories as needed.
 */
export function writeFile(filePath: string, content: string): void {
  ensureDir(dirname(filePath));
  writeFileSync(filePath, content, 'utf-8');
}

/**
 * Read a file as UTF-8 text. Returns null if the file does not exist.
 */
export function readFile(filePath: string): string | null {
  if (!existsSync(filePath)) return null;
  return readFileSync(filePath, 'utf-8');
}

/**
 * Check if a file exists.
 */
export function fileExists(filePath: string): boolean {
  return existsSync(filePath);
}

/**
 * Copy a directory recursively.
 */
export function copyDir(src: string, dest: string): void {
  ensureDir(dest);
  cpSync(src, dest, { recursive: true });
}

/**
 * List files in a directory. Returns empty array if directory does not exist.
 */
export function listFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { recursive: true })
    .map(f => String(f))
    .sort();
}
