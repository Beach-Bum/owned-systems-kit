# Reference Architecture: Low-Dependency AI Stack

This document describes a reference architecture for AI systems that teams can understand, run, and own. It is not a required stack. It is a map of the layers involved in a typical AI workflow and how Owned Systems Kit documents each one.

The principle: choose the smallest stack that solves the workflow. Every dependency you add is a dependency you must document, monitor, and plan to replace.

## How to read this

Each layer describes a concern, not a product. Example tools are listed to make the layers concrete. None of them are required. Many have free tiers or open-source alternatives. The point is not which tools you pick. The point is that you document what you picked, why, and how to leave.

Owned Systems Kit is the documentation, evidence, review-gate, and exit-plan layer that runs across all of them.

## Warning: free tiers are not owned infrastructure

Free tiers are not the same as owned infrastructure. If a workflow matters, document limits, quotas, data retention, export paths, and replacement options in the Tool and Dependency Register (`02-tools-and-dependencies`). A free tier that disappears or changes terms on short notice is a vendor dependency, not a foundation.

---

## 1. Interface layer

**Purpose.** Where users or other systems interact with the AI workflow. This could be a chat interface, a form, a CLI, a Slack bot, an API endpoint, or a spreadsheet.

**Example tools.** Streamlit, Gradio, Next.js, a plain HTML form, a terminal script, a Slack or Teams integration.

**Ownership questions.**
- Who can access this interface?
- What data enters through it?
- Does the interface store anything, or is it stateless?
- Can it be replaced without changing the workflow behind it?

**What OSK documents.** The interface is described in `00-overview` and `01-workflow-map`. Data entering through the interface is mapped in `03-data-boundaries`.

**Exit-plan considerations.** Interfaces are usually the easiest layer to replace. Document the input format and expected behavior so a new interface can be wired to the same workflow.

---

## 2. Workflow / orchestration layer

**Purpose.** The logic that connects steps: receive input, call a model, check the output, route to a human reviewer, log the decision. This can be a Python script, a shell pipeline, a notebook, or a framework.

**Example tools.** Plain Python/TypeScript functions, LangChain, LangGraph, Haystack, custom pipelines, Make/Zapier for simple automation.

**Ownership questions.**
- Is the orchestration logic readable by someone who did not write it?
- Are steps explicit, or hidden inside a framework abstraction?
- Can you run the workflow locally without network access to the orchestrator?
- What happens when the orchestration tool has an outage?

**What OSK documents.** `01-workflow-map` defines the steps, decision points, and human review gates. `05-human-review-gates` specifies where a person approves before the system acts. `04-prompts-and-templates` records the prompts used at each step.

**Exit-plan considerations.** Framework lock-in is real. If your workflow depends on a specific orchestration framework, document what the framework does so you could rewrite the same logic in plain code. The manual fallback in `09-exit-plan` should describe how to run the workflow without the orchestrator.

---

## 3. Local / model layer

**Purpose.** The AI models that generate outputs: classifications, summaries, extractions, drafts, decisions. These can be hosted API models, local models, or both.

**Example tools.** OpenAI API, Anthropic API, Google Gemini, Ollama for local models, llama.cpp, vLLM, Hugging Face Inference API.

**Ownership questions.**
- Which model is used at each step?
- What happens when the model provider has an outage or deprecates the model?
- Is there a local fallback?
- What data is sent to the model provider?
- Does the provider retain inputs or outputs for training?

**What OSK documents.** `00-overview` lists the models and providers. `02-tools-and-dependencies` records the dependency details: provider, model version, pricing tier, data retention policy. `03-data-boundaries` maps what data leaves your infrastructure. `04-prompts-and-templates` records the exact prompts.

**Exit-plan considerations.** Model dependencies are the highest-risk layer. Document the alternative model for every provider. Test the alternative periodically. Record the results. The evidence chain (`07-evidence-chain-log` / `osk evidence add`) captures which model produced which output, so you can compare providers over time.

---

## 4. Knowledge / RAG layer

**Purpose.** Where the system retrieves context to ground model responses: documents, embeddings, search indexes, knowledge bases.

**Example tools.** A folder of text files, SQLite with FTS5, PostgreSQL with pgvector, Chroma, Qdrant, Pinecone, Elasticsearch, a simple grep over markdown files.

**Ownership questions.**
- Where is the knowledge stored?
- Can you export the full index?
- What happens if the vector database provider disappears?
- Is the source data stored separately from the index, so you can rebuild?
- Who updates the knowledge base, and how?

**What OSK documents.** `02-tools-and-dependencies` records the storage and retrieval tools. `03-data-boundaries` maps where knowledge data lives and who can access it. `08-maintenance` describes how the knowledge base is updated.

**Exit-plan considerations.** Always keep the source documents separate from the index. An embedding index is derived data. If you can re-embed from source, you can switch vector stores. Document the embedding model and chunk strategy so the index is reproducible.

---

## 5. Tool-use layer

**Purpose.** External tools and APIs the AI workflow calls: web search, code execution, file operations, database queries, third-party APIs.

**Example tools.** Browser automation, code interpreters, database connectors, REST APIs, MCP servers, custom function calls.

**Ownership questions.**
- What external systems does the workflow call?
- What permissions does it have?
- What happens when an external tool is unavailable?
- Are tool calls logged?

**What OSK documents.** `02-tools-and-dependencies` inventories every external tool. `03-data-boundaries` maps what data flows to each tool. `05-human-review-gates` defines whether a human approves before the system calls an external tool with side effects.

**Exit-plan considerations.** Document the API contract (input/output format) for each tool. If you depend on a third-party API, document what you would use instead. For tools with side effects (sending emails, writing to databases, making purchases), the manual fallback should describe how a human performs the same action.

---

## 6. Data layer

**Purpose.** Where the system stores inputs, outputs, state, and operational data. This is distinct from the knowledge layer: the data layer is about the system's own records.

**Example tools.** SQLite, PostgreSQL, a folder of JSON files, S3-compatible storage, a Git repository.

**Ownership questions.**
- Where is the data stored?
- Can you export everything?
- Who has access?
- What is the retention policy?
- Is the data encrypted at rest?

**What OSK documents.** `03-data-boundaries` maps data storage locations, access controls, and retention. `02-tools-and-dependencies` records the storage tools and their limits.

**Exit-plan considerations.** Document the export format and procedure. If you use a managed database, document how to export to a portable format (SQL dump, CSV, JSON). Test the export periodically.

---

## 7. Evidence / observability layer

**Purpose.** The record of what happened: which model was called, what it produced, who reviewed it, what was approved or rejected. This is the audit trail.

**Example tools.** Owned Systems Kit evidence chain (`osk evidence add`), application logs, OpenTelemetry, Langfuse, Phoenix, custom logging.

**Ownership questions.**
- Is every AI decision recorded?
- Can you reconstruct what happened on a specific date?
- Is the evidence tamper-resistant?
- Can you export the full evidence chain?

**What OSK documents.** This is the layer OSK was built for. The evidence chain format captures structured records of every AI decision. `osk evidence add` creates timestamped records. `osk audit export` produces portable audit packages. The evidence records live in your Git repository as plain-text files.

**Exit-plan considerations.** Because OSK evidence records are plain Markdown files in Git, there is no vendor to exit. The format is human-readable and portable. If you use additional observability tools, document their export capabilities in `02-tools-and-dependencies`.

---

## 8. Deployment layer

**Purpose.** Where the system runs: local machine, a server, a container, a cloud function, an edge runtime.

**Example tools.** A laptop, a VPS, Docker, Fly.io, Railway, Vercel, AWS Lambda, Cloudflare Workers, a Raspberry Pi.

**Ownership questions.**
- Where does the system run?
- Can you move it to a different host?
- What are the resource requirements?
- What happens during a deployment failure?
- Who has access to the production environment?

**What OSK documents.** `07-runbook` describes how to deploy, operate, and troubleshoot. `02-tools-and-dependencies` records the hosting provider and its limits. `08-maintenance` describes the update and deployment process.

**Exit-plan considerations.** Document the deployment process well enough that someone could deploy to a different provider. If you use a platform-specific feature (edge functions, managed queues), document what it does so you could replace it with a generic alternative.

---

## 9. Documentation / ownership layer

**Purpose.** The documentation that makes the system legible: what it does, how it works, who is responsible, what to do when things go wrong. This is where Owned Systems Kit lives.

**What OSK provides.**
- `owned-system.yaml` — the system record
- `00-overview` through `09-exit-plan` — the complete documentation package
- `osk init` — scaffold the documentation structure
- `osk check` — validate completeness
- `osk evidence add` — append to the evidence chain
- `osk docs build` — list and verify documentation
- `osk audit export` — export a portable audit package

**Ownership questions.**
- Is the documentation in the same repository as the code?
- Is it version-controlled?
- Can someone who did not build the system operate it from the documentation alone?
- When was it last reviewed?

**Exit-plan considerations.** OSK itself is open source under Apache-2.0. The documentation files are plain YAML and Markdown in your Git repository. There is no vendor dependency on OSK. If you stop using the CLI, the files remain readable and useful.

---

## Putting it together

A mostly local, low-dependency AI stack might look like:

| Layer | Choice | Cost |
|-------|--------|------|
| Interface | Terminal script or Streamlit | Free |
| Orchestration | Plain Python functions | Free |
| Model | Anthropic API (primary), Ollama local (fallback) | Mostly free-tier / local |
| Knowledge | Folder of markdown files + SQLite FTS5 | Free |
| Tool-use | None, or a single API call | Depends on the API |
| Data | SQLite + Git | Free |
| Evidence | OSK evidence chain | Free |
| Deployment | Local machine or a single VPS | Free to low-cost |
| Documentation | OSK documentation package | Free |

This is an example, not a prescription. The right stack depends on the workflow.

The expensive part is not the tools. The expensive part is making the system legible, auditable, and transferable. That is what OSK handles.

## Open-source core, paid implementation

Owned Systems Kit is open source. The CLI, schemas, templates, and documentation formats are free to use, audit, and build on.

If you want help mapping your architecture, documenting your workflows, setting up evidence chains, training your team, or transferring ownership, that is what [10x Associates](https://10x.associates) does. The method is inspectable. The implementation help is paid.
