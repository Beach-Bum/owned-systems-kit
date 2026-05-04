# Decision Log

This is an append-only record of decisions that affect how the company brain operates. New entries go at the top. Do not edit past entries.

---

## 2026-05-01 — Adopted Owned Systems Kit for knowledge documentation

**Decision:** Use Owned Systems Kit to document our company knowledge sources, memory boundaries, and agent skills.

**Why:** We were using Obsidian and Google Drive without a clear map of what AI tools could access. Two incidents in April where an AI draft referenced stale pricing information. We needed a way to document boundaries.

**Who decided:** Sarah Chen (Operations Manager), confirmed by Pieter de Vries (Managing Partner)

**What changes:** All knowledge sources now have an entry in the Company Knowledge Register. Agent skills have defined boundaries. Changes to knowledge sources are logged.

---

## 2026-04-15 — AI tools restricted from client data

**Decision:** AI tools may not access client-specific project data unless a project lead grants temporary, scoped access for a specific task.

**Why:** A draft proposal accidentally referenced details from another client's project. The information was not sensitive, but it revealed that agent access was too broad.

**Who decided:** Pieter de Vries (Managing Partner)

**What changes:** Default agent access is limited to company-level knowledge (profile, offers, workflows, templates). Client data requires explicit project-level approval.

---

## 2026-03-01 — Moved company knowledge to Obsidian vault

**Decision:** Consolidate scattered company documents into a single Obsidian vault stored in a Git repository.

**Why:** Information was spread across Google Drive, Notion, and individual laptops. No single source of truth for company procedures.

**Who decided:** Sarah Chen (Operations Manager)

**What changes:** All company procedures, policies, and templates now live in the Obsidian vault at `company-brain/`. Google Drive is archived but not deleted.
