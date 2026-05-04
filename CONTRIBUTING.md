# Contributing

Thank you for your interest in contributing to Owned Systems Kit.

## How to contribute

1. Fork the repository.
2. Create a branch for your change.
3. Make your changes.
4. Run `npm run build` and `npm run typecheck` to verify.
5. Submit a pull request with a clear description of what changed and why.

## Development setup

```bash
git clone https://github.com/Beach-Bum/owned-systems-kit.git
cd owned-systems-kit
npm install
npm run build
```

Test locally:

```bash
node dist/cli.js --help
```

## What we accept

- Bug fixes
- Documentation improvements
- New templates or template improvements
- Schema improvements
- CLI improvements that maintain the local-first, plain-text philosophy

## What we do not accept

- Dependencies on external services or databases
- Features that require a network connection for core functionality
- SaaS-oriented features
- Changes that break the plain-text, Git-backed approach

## Code style

- TypeScript, strict mode
- SPDX license headers on source files: `// SPDX-License-Identifier: Apache-2.0`
- Keep dependencies minimal

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 license.

```
SPDX-License-Identifier: Apache-2.0
```
