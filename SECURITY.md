# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability in Owned Systems Kit, please report it responsibly.

**Do not open a public issue.**

Email: hello@10x.associates

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix if you have one

We will acknowledge receipt within 48 hours and aim to provide a fix or mitigation within 7 days for confirmed vulnerabilities.

## Scope

Owned Systems Kit is a local-first CLI tool. It does not run a server, connect to external services, or process untrusted network input in normal operation.

Security concerns most likely relate to:

- Path traversal in file operations
- Template injection in generated files
- Dependency vulnerabilities in the npm supply chain

## Supported versions

| Version | Supported |
|---------|-----------|
| 0.x     | Yes       |
