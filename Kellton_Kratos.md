# Kellton Kratos - Complete Architecture & Handbook

<div align="center">

```
█ █ █▀▀ █   █   ▀█▀ █▀▀█ █▀▀▄  █ █ █▀▀█ █▀▀█ ▀█▀ █▀▀█ █▀▀
█▀▄ █▀▀ █   █    █  █  █ █  █  █▀▄ █▄▄▀ █▄▄█  █  █  █ ▀▀█
▀ ▀ ▀▀▀ ▀▀▀ ▀▀▀  ▀  ▀▀▀▀ ▀  ▀  ▀ ▀ ▀ ▀▀ ▀  ▀  ▀  ▀▀▀▀ ▀▀▀
```

**Enterprise-Grade Multi-Agent AI Framework for Software Development**

*Version 0.0.0-main | Built with Bun 1.3.5*

</div>

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Architecture](#system-architecture)
3. [Core Components](#core-components)
4. [Multi-Agent Framework](#multi-agent-framework)
5. [MCP (Model Context Protocol) Integration](#mcp-integration)
6. [KO: Slash Commands](#ko-slash-commands)
7. [SDK & APIs](#sdk--apis)
8. [Session Management](#session-management)
9. [Provider System](#provider-system)
10. [Built-in Tools](#built-in-tools)
11. [Configuration](#configuration)
12. [Package Structure](#package-structure)
13. [Security & Permissions](#security--permissions)
14. [Deployment](#deployment)

---

## Executive Summary

**Kellton Kratos** is an enterprise-grade, multi-agent AI coding assistant framework built on top of OpenCode. It provides:

- 🤖 **22 Specialized AI Agents** organized by SDLC phases
- 🔌 **9 MCP Server Integrations** for extended capabilities
- ⚡ **12 KO: Slash Commands** for rapid workflows
- 🔄 **Session Management** with forking, persistence, and history
- 🛠️ **37+ Built-in Tools** for file operations, code editing, web search, and more
- 🌐 **Multi-Provider Support** (Azure, OpenAI, Anthropic, Google, DeepSeek, etc.)

### Key Differentiators

| Feature | Description |
|---------|-------------|
| **Agent Control Protocol (ACP)** | Standardized agent communication layer |
| **Parallel Session Execution** | Run multiple agents simultaneously |
| **MCP Gateway** | Unified interface for external tool integrations |
| **Enterprise SDKs** | TypeScript/JavaScript SDKs for integration |
| **Customizable Workflows** | Extensible via custom agents, commands, and tools |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              KELLTON KRATOS                                      │
│                        Enterprise AI Coding Framework                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                           CLI / TUI Layer                                │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │    │
│  │  │  Chat   │  │ Agents  │  │ Models  │  │  MCPs   │  │Commands │       │    │
│  │  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘       │    │
│  └───────┼───────────┼───────────┼───────────┼───────────┼────────────────┘    │
│          │           │           │           │           │                      │
│  ┌───────▼───────────▼───────────▼───────────▼───────────▼────────────────┐    │
│  │                       Session Management Layer                          │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │    │
│  │  │   Create    │  │    Fork     │  │   Update    │  │   History   │   │    │
│  │  │  Sessions   │  │  Sessions   │  │   State     │  │  Messages   │   │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    Agent Control Protocol (ACP)                          │    │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │    │
│  │  │ ACPSession     │  │ ACPAgent       │  │ ACPTypes       │             │    │
│  │  │ Manager        │  │ Orchestrator   │  │ & Contracts    │             │    │
│  │  └────────────────┘  └────────────────┘  └────────────────┘             │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                         Provider Layer                                   │    │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │    │
│  │  │ Azure  │ │OpenAI  │ │Anthropic│ │Google │ │DeepSeek│ │ Custom │     │    │
│  │  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                          MCP Gateway                                     │    │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │    │
│  │  │Context7│ │  Rube  │ │Playwright│ │ Magic │ │ Morph  │ │Graphiti│     │    │
│  │  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                         Tool Registry                                    │    │
│  │  bash │ edit │ read │ write │ grep │ glob │ task │ webfetch │ +30 more │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                          Storage Layer                                   │    │
│  │  Sessions │ Messages │ Snapshots │ Configurations │ Credentials        │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. CLI/TUI Interface (`packages/kratos/src/cli`)

The command-line interface provides an interactive terminal UI for:
- Real-time chat with AI models
- Agent selection and switching
- Model configuration
- MCP server management
- Command execution

### 2. Session Manager (`packages/kratos/src/session`)

Handles conversation state, persistence, and history:

```typescript
namespace Session {
  // Create a new session
  export const create = fn(options, async (input) => {
    return createNext({
      parentID: input?.parentID,
      directory: Instance.directory,
      title: input?.title,
      permission: input?.permission,
    })
  })

  // Fork an existing session
  export const fork = fn(input, async (input) => {
    const session = await createNext({
      directory: Instance.directory,
      parentID: input.sessionID,
    })
    return session
  })

  // List all sessions
  export const list = fn(...)
  
  // Get session messages
  export const messages = fn(...)
}
```

### 3. Agent Control Protocol (ACP) (`packages/kratos/src/acp`)

The ACP layer provides standardized agent communication:

```typescript
class ACPSessionManager {
  private sessions = new Map<string, ACPSessionState>()
  private sdk: KratosClient

  // Create new ACP session with MCP servers
  async create(cwd: string, mcpServers: McpServer[], model?: ACPSessionState["model"]): Promise<ACPSessionState>

  // Load existing session
  async load(sessionId: string, cwd: string, mcpServers: McpServer[], model?: ACPSessionState["model"]): Promise<ACPSessionState>

  // Get/Set session state
  get(sessionId: string): ACPSessionState
  getModel(sessionId: string)
  setModel(sessionId: string, model: ACPSessionState["model"])
  setMode(sessionId: string, modeId: string)
}
```

### 4. Provider System (`packages/kratos/src/provider`)

Multi-provider support with automatic model detection:

| Provider | Models | Features |
|----------|--------|----------|
| **Azure OpenAI** | GPT-4o, GPT-4o-mini, Kimi-K2 | Enterprise, Rate Limiting |
| **OpenAI** | GPT-4o, o1, o3 | Responses API |
| **Anthropic** | Claude 4, Claude 4.5 | Extended Thinking |
| **Google** | Gemini Pro, Gemini Flash | Multimodal |
| **DeepSeek** | DeepSeek Reasoner | Cost-effective |
| **Kratos** | Public cloud models | Free tier available |

---

## Multi-Agent Framework

### Agent Organization by SDLC Phase

Kellton Kratos organizes 22 specialized agents across 7 SDLC phases:

```
agents/
├── 01-planning/           # Requirements & Research
│   ├── requirements-analyst.md      # Transform ideas → specs
│   ├── business-panel-experts.md    # 9-expert strategy panel
│   └── deep-research-agent.md       # Adaptive research
│
├── 02-design/             # Architecture & Design
│   ├── system-architect.md          # Scalable architecture
│   ├── backend-architect.md         # Data integrity focus
│   └── frontend-architect.md        # Accessible UI design
│
├── 03-development/        # Implementation
│   ├── python-expert.md             # Production Python
│   └── refactoring-expert.md        # Code quality
│
├── 04-testing/            # Quality Assurance
│   ├── quality-engineer.md          # Test strategies
│   ├── security-engineer.md         # Vulnerability assessment
│   └── performance-engineer.md      # Optimization
│
├── 05-deployment/         # DevOps & Infrastructure
│   └── devops-architect.md          # CI/CD automation
│
├── 06-maintenance/        # Debugging & Support
│   └── root-cause-analyst.md        # Problem investigation
│
└── 07-documentation/      # Documentation & Training
    ├── technical-writer.md          # Clear documentation
    ├── learning-guide.md            # Progressive learning
    └── socratic-mentor.md           # Discovery learning
```

### Additional Specialized Agents

| Agent | Purpose |
|-------|---------|
| **@audit** | TheAuditor integration for security/quality analysis |
| **@sonarqube** | SonarQube quality gate reporting |
| **@master** | Multi-agent coordination and supervision |
| **@docs** | Documentation generation |
| **@triage** | GitHub issue triage |
| **@duplicate-pr** | PR duplication handling |

### Agent Activation

```bash
# Switch to an agent using Tab
Tab → Select agent from list

# Or mention in chat
@system-architect design a microservices architecture for...
@security-engineer review this code for vulnerabilities...
@master coordinate analysis with security and performance agents
```

### Agent Structure

Each agent markdown file contains:

```markdown
---
name: Agent Name
description: What this agent does
category: Domain category
sdlc_phase: planning | design | development | testing | deployment | maintenance | documentation
---

## Triggers
When to activate this agent

## Behavioral Mindset
Core approach and philosophy

## Focus Areas
Key competencies

## Key Actions
Step-by-step workflow

## Outputs
Expected deliverables

## Boundaries
What the agent will/won't do
```

---

## MCP Integration

### Model Context Protocol (MCP) Servers

Kellton Kratos integrates 9 MCP servers for extended capabilities:

| MCP Server | Type | Status | Purpose |
|------------|------|--------|---------|
| **Context7** | Remote | ✅ Active | Official library documentation |
| **Rube** | Remote | ✅ Active | 387+ API integrations |
| **Sequential** | Local | ✅ Active | Multi-step reasoning |
| **Playwright** | Local | ✅ Active | Browser automation |
| **Magic** | Local | ✅ Active | UI component generation |
| **Morph** | Local | ✅ Active | Pattern-based code editing |
| **Docker** | Local | ⚠️ Slow startup | Docker Desktop integration |
| **Figma** | Remote | 🔧 OAuth required | Design-to-code |
| **Graphiti** | Local | 🔧 Requires Neo4j | Knowledge graph |

### MCP Configuration

```jsonc
// .kratos/kratos.jsonc
{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    },
    "rube": {
      "type": "remote",
      "url": "https://rube.app/mcp",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    },
    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp@latest"]
    },
    "graphiti": {
      "type": "local",
      "command": ["docker", "compose", "-f", "graphiti-docker-compose.yml", "up"],
      "environment": {
        "NEO4J_URI": "bolt://localhost:7687",
        "AZURE_OPENAI_ENDPOINT": "https://...",
        "AZURE_OPENAI_DEPLOYMENT_NAME": "gpt-4o",
        "AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME": "text-embedding-3-small"
      }
    }
  }
}
```

### Graphiti Knowledge Graph Integration

Graphiti provides persistent knowledge graph capabilities:

**Features:**
- Episode management (add, retrieve, delete)
- Entity and relationship handling
- Semantic and hybrid search
- Group management
- Azure OpenAI compatible

**Setup:**
```bash
# Clone Graphiti
git clone https://github.com/getzep/graphiti.git graphiti-mcp

# Configure .env
cd graphiti-mcp/mcp_server
cat > .env << EOF
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=password
AZURE_OPENAI_ENDPOINT=https://your-azure.cognitiveservices.azure.com
AZURE_OPENAI_API_VERSION=2024-05-01-preview
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4o
AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME=text-embedding-3-small
EOF

# Start with Docker
docker compose -f docker/docker-compose-neo4j.yml up -d
```

---

## KO: Slash Commands

Kellton Kratos includes 12 "Kratos Overpowered" (ko:) slash commands for rapid workflows:

### Command Reference

| Command | Purpose | Use Case |
|---------|---------|----------|
| `/ko:requirements` | Requirements analysis | Transform ideas into specs |
| `/ko:business-panel` | Multi-expert strategy panel | Business decision analysis |
| `/ko:design` | System architecture design | Technical design docs |
| `/ko:implement` | Feature implementation | Code development |
| `/ko:analyze` | Code analysis | Quality, security, performance |
| `/ko:test` | Test execution | Coverage analysis & reporting |
| `/ko:improve` | Code improvement | Refactoring & optimization |
| `/ko:troubleshoot` | Issue diagnosis | Debug & fix problems |
| `/ko:document` | Documentation generation | API docs, guides |
| `/ko:workflow` | Workflow generation | Implementation plans |
| `/ko:git` | Git operations | Commits, branches, PRs |
| `/ko:build` | Build & package | Compilation & bundling |

### Command Structure

```markdown
---
name: ko:analyze
description: Execute comprehensive code analysis
---

Run comprehensive code analysis on the specified project or files.

## Steps
1. Scan codebase structure
2. Run static analysis
3. Check security vulnerabilities
4. Evaluate performance patterns
5. Generate detailed report

## Output
- Code quality metrics
- Security findings
- Performance recommendations
- Actionable improvements
```

### Usage Examples

```bash
# Analyze entire project
/ko:analyze

# Implement a feature
/ko:implement Add user authentication with OAuth2

# Generate documentation
/ko:document ./src/api

# Troubleshoot build error
/ko:troubleshoot TypeScript compilation failing
```

---

## SDK & APIs

### Kratos SDK (`packages/sdk`)

The SDK provides programmatic access to Kellton Kratos:

```typescript
import { KratosClient } from "@kellton-kratos/sdk/v2"

const client = new KratosClient({
  baseURL: "http://localhost:1927",
  apiKey: "your-api-key"
})

// Create a session
const session = await client.session.create({
  title: "Development Session",
  directory: "/path/to/project"
})

// Send a message
const response = await client.message.send({
  sessionID: session.id,
  content: "Analyze this codebase for security issues"
})

// List available agents
const agents = await client.agent.list()
```

### OpenAPI Specification

Full REST API defined in `packages/sdk/openapi.json` (288KB):

**Key Endpoints:**
- `POST /session/create` - Create new session
- `GET /session/{id}` - Get session details
- `POST /message/send` - Send message
- `GET /agent/list` - List agents
- `GET /model/list` - List available models
- `POST /tool/execute` - Execute a tool

### Agent Client Protocol SDK

```typescript
import { RequestError, type McpServer } from "@agentclientprotocol/sdk"

// Used internally for MCP communication
const acpSession = new ACPSessionManager(kratosClient)
await acpSession.create(cwd, mcpServers, model)
```

---

## Session Management

### Session Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Create    │────▶│   Active    │────▶│  Archived   │
│   Session   │     │   Session   │     │   Session   │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    Fork     │
                    │   Session   │
                    └─────────────┘
```

### Session Features

| Feature | Description |
|---------|-------------|
| **Persistence** | Sessions survive restart |
| **Forking** | Create child sessions from any point |
| **History** | Full message history with parts |
| **Snapshots** | File diff tracking |
| **Sharing** | Generate shareable session links |
| **Cost Tracking** | Token usage per session |

### Session Data Model

```typescript
interface SessionInfo {
  id: string
  projectID: string
  directory: string
  parentID?: string
  summary: {
    topic?: string
    description?: string
    icon?: string
  }
  share?: {
    secret: string
    url: string
  }
  title: string
  time: {
    created: number
    updated: number
  }
  cost?: {
    input: number
    output: number
    inputCachedTokens?: number
  }
  permission?: PermissionRuleset
  checkpoint?: {
    messageID: string
    partID?: string
    snapshot?: string
    diff?: string
  }
}
```

### Parallel Session Execution

The Master Agent can coordinate multiple parallel sessions:

```typescript
// Master agent coordinates
@master "Run security, performance, and code quality analysis in parallel"

// Spawns child sessions
├── Child Session 1: @security-engineer analyzing...
├── Child Session 2: @performance-engineer analyzing...
└── Child Session 3: @quality-engineer analyzing...

// Aggregates results
Master: "Combined findings from all agents..."
```

---

## Provider System

### Provider Architecture

```typescript
// packages/kratos/src/provider/provider.ts

export const ProviderLoaders = {
  async kratos(input) {
    const hasKey = await (async () => {
      const env = Env.all()
      if (input?.env?.some((item) => env[item])) return true
      if (input?.id && await Auth.get(input.id)) return true
      const config = await Config.get()
      if (config.provider?.["kratos"]?.options?.apiKey) return true
      return false
    })()
    
    return {
      autoload: input?.models ? Object.keys(input.models).length > 0 : false,
      options: hasKey ? {} : { apiKey: "public" },
    }
  },

  async azure() {
    return {
      autoload: false,
      async getModel(sdk, modelID, options) {
        if (options?.["useCompletionUrls"]) {
          return sdk.chat(modelID)
        }
        return sdk.responses(modelID)
      },
      options: {},
    }
  },

  // ... additional providers
}
```

### Azure Configuration

```jsonc
{
  "provider": {
    "azure": {
      "options": {
        "baseURL": "https://your-resource.cognitiveservices.azure.com/openai",
        "apiKey": "your-api-key",
        "useCompletionUrls": true
      },
      "models": {
        "gpt-4o": {
          "id": "gpt-4o",
          "name": "GPT-4o"
        },
        "text-embedding-3-small": {
          "id": "text-embedding-3-small",
          "name": "Text Embedding"
        }
      }
    }
  }
}
```

### Token Rate Limits

> **Important:** Azure OpenAI has tool limits and token rate limits.

| Limit | Value | Impact |
|-------|-------|--------|
| Max Tools per Request | 128 | Rube MCP exceeds this (168 tools) |
| Recommended TPM | 150,000+ | For MCP-heavy workflows |

---

## Built-in Tools

Kellton Kratos includes 37+ built-in tools:

### File Operations

| Tool | Description |
|------|-------------|
| `read` | Read file contents |
| `write` | Write file contents |
| `edit` | Edit file with diff |
| `multiedit` | Multiple file edits |
| `glob` | File pattern matching |
| `ls` | List directory contents |

### Search & Analysis

| Tool | Description |
|------|-------------|
| `grep` | Search file contents |
| `codesearch` | Semantic code search |
| `webfetch` | Fetch web content |
| `websearch` | Web search |

### Task Management

| Tool | Description |
|------|-------------|
| `task` | Task execution |
| `todo` | TODO management |
| `todoread` | Read TODOs |
| `todowrite` | Write TODOs |

### System Operations

| Tool | Description |
|------|-------------|
| `bash` | Execute shell commands |
| `batch` | Batch operations |
| `lsp` | Language server protocol |

---

## Configuration

### Configuration Files

```
.kratos/
├── kratos.jsonc          # Main configuration (gitignored)
├── agent/                # Custom agents
│   └── *.md
├── command/              # Custom commands
│   └── *.md
├── skill/                # Custom skills
├── tool/                 # Custom tools
└── themes/               # UI themes
```

### Full Configuration Example

```jsonc
{
  "$schema": "https://kellton-kratos.io/config.json",
  
  // Instruction files to include
  "instructions": [
    "STYLE_GUIDE.md",
    "CONTRIBUTING.md"
  ],

  // Provider configurations
  "provider": {
    "kratos": {
      "options": {}
    },
    "azure": {
      "options": {
        "baseURL": "https://your-resource.cognitiveservices.azure.com/openai",
        "apiKey": "your-key",
        "useCompletionUrls": true
      },
      "models": {
        "gpt-4o": {
          "id": "gpt-4o",
          "name": "GPT-4o"
        }
      }
    }
  },

  // MCP server configurations
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    },
    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp@latest"]
    }
  },

  // Tool configurations
  "tools": {
    "github-triage": false,
    "github-pr-search": false
  }
}
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `AZURE_OPENAI_API_KEY` | Azure API key |
| `AZURE_OPENAI_ENDPOINT` | Azure endpoint URL |
| `OPENAI_API_KEY` | OpenAI API key |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `GOOGLE_AI_KEY` | Google AI key |

---

## Package Structure

### Monorepo Layout

```
kellton-kratos/
├── packages/
│   ├── kratos/              # Core CLI and runtime
│   │   └── src/
│   │       ├── acp/         # Agent Control Protocol
│   │       ├── agent/       # Agent loading
│   │       ├── cli/         # CLI commands
│   │       ├── mcp/         # MCP integration
│   │       ├── provider/    # AI providers
│   │       ├── session/     # Session management
│   │       └── tool/        # Built-in tools
│   │
│   ├── sdk/                 # JavaScript/TypeScript SDK
│   │   └── js/
│   │       └── src/
│   │           ├── client.ts
│   │           └── v2/
│   │
│   ├── app/                 # Web application
│   ├── console/             # Admin console
│   ├── desktop/             # Desktop application
│   ├── enterprise/          # Enterprise features
│   ├── plugin/              # Plugin system
│   ├── ui/                  # Shared UI components
│   ├── web/                 # Marketing website
│   └── docs/                # Documentation
│
├── agents/                  # SDLC Agent definitions
│   ├── 01-planning/
│   ├── 02-design/
│   ├── 03-development/
│   ├── 04-testing/
│   ├── 05-deployment/
│   ├── 06-maintenance/
│   └── 07-documentation/
│
├── .kratos/                 # Local configuration
│   ├── agent/
│   ├── command/
│   └── kratos.jsonc
│
└── graphiti-mcp/            # Knowledge graph (cloned)
```

### Build & Development

```bash
# Install dependencies
bun install

# Run in development mode
bun run dev

# Build all packages
cd packages/kratos && bun run build

# Build produces binaries for:
# - kellton-kratos-darwin-arm64
# - kellton-kratos-darwin-x64
# - kellton-kratos-linux-arm64
# - kellton-kratos-linux-x64
# - kellton-kratos-windows-x64
```

---

## Security & Permissions

### Permission System

```typescript
interface PermissionRuleset {
  read: boolean
  write: boolean
  execute: boolean
  network: boolean
  sensitive_paths: string[]
}
```

### Security Best Practices

1. **Configuration Protection**
   - `.kratos/kratos.jsonc` is gitignored
   - API keys never committed to repo

2. **MCP Security**
   - Tool execution sandboxing
   - Network access controls
   - Secret blocking (optional)

3. **Session Isolation**
   - Sessions scoped to project directories
   - Permission inheritance control

---

## Deployment

### Global Installation

```bash
# Build the project
cd packages/kratos && bun run build

# Install globally
cp dist/kellton-kratos-darwin-arm64/bin/kratos ~/.kratos/bin/kratos

# Verify installation
kratos --version
```

### Docker Deployment

```dockerfile
FROM oven/bun:1.3.5

WORKDIR /app
COPY . .

RUN bun install
RUN cd packages/kratos && bun run build

ENTRYPOINT ["./packages/kratos/dist/kellton-kratos-linux-x64/bin/kratos"]
```

### Enterprise Deployment

Contact Kellton for enterprise deployment options including:
- On-premise installation
- SSO integration
- Custom model endpoints
- Priority support

---

## Agentic Framework Deep Dive

### Underlying Technology Stack

Kellton Kratos is built on a sophisticated agentic AI framework:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        AGENTIC FRAMEWORK STACK                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │                    Vercel AI SDK (@ai-sdk/*)                           │ │
│  │  • Unified API for all LLM providers                                   │ │
│  │  • Streaming responses, tool calling, structured outputs               │ │
│  │  • Provider abstraction (OpenAI, Anthropic, Azure, Google)             │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                    │                                         │
│  ┌────────────────────────────────▼───────────────────────────────────────┐ │
│  │              Agent Client Protocol (@agentclientprotocol/sdk)          │ │
│  │  • Standardized agent-to-agent communication                           │ │
│  │  • Session state management across agents                              │ │
│  │  • MCP server orchestration                                            │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                    │                                         │
│  ┌────────────────────────────────▼───────────────────────────────────────┐ │
│  │                Model Context Protocol (MCP)                            │ │
│  │  • Tool discovery and execution                                        │ │
│  │  • External service integration                                        │ │
│  │  • Secure credential handling                                          │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@ai-sdk/provider` | Latest | Provider abstraction layer |
| `@ai-sdk/openai` | Latest | OpenAI/Azure integration |
| `@ai-sdk/anthropic` | Latest | Claude models support |
| `@ai-sdk/google` | Latest | Gemini models support |
| `@agentclientprotocol/sdk` | Latest | Agent communication protocol |
| `@modelcontextprotocol/*` | Latest | MCP tool integration |
| `zod` | Latest | Schema validation |
| `solid-js` | Latest | Reactive UI framework |

### How the Agentic Loop Works

```typescript
// Simplified agentic execution loop

async function executeAgentLoop(session: Session, message: string) {
  // 1. Load agent persona and context
  const agent = await loadAgent(session.agentId)
  const context = await buildContext(session, agent)
  
  // 2. Prepare system prompt with tools
  const systemPrompt = [
    agent.persona,
    context.projectInfo,
    context.relevantFiles,
    context.mcpTools,
  ].join('\n')
  
  // 3. Execute LLM call with tool availability
  const response = await generateText({
    model: getProvider(session.modelId),
    system: systemPrompt,
    messages: session.messages,
    tools: [...builtInTools, ...mcpTools],
    maxSteps: 50, // Multi-step reasoning limit
  })
  
  // 4. Process tool calls if any
  for (const toolCall of response.toolCalls) {
    const result = await executeTool(toolCall)
    session.messages.push({ role: 'tool', content: result })
  }
  
  // 5. Continue loop until complete
  if (!response.finishReason === 'stop') {
    return executeAgentLoop(session, response.text)
  }
  
  return response.text
}
```

---

## Multi-Step Agent Reasoning

### How Multi-Step Execution Works

Kellton Kratos agents can perform complex, multi-step tasks autonomously:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     MULTI-STEP AGENT EXECUTION FLOW                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   User Request: "Add OAuth authentication to the user module"                │
│                                    │                                         │
│                                    ▼                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  STEP 1: Analyze Requirements                                        │   │
│   │  • Read existing user module code                                    │   │
│   │  • Identify authentication patterns                                  │   │
│   │  • Check for existing OAuth libraries                                │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                    │                                         │
│                                    ▼                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  STEP 2: Research & Planning                                         │   │
│   │  • Query Context7 for OAuth best practices                           │   │
│   │  • Use Sequential Thinking for architecture planning                 │   │
│   │  • Create implementation plan                                        │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                    │                                         │
│                                    ▼                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  STEP 3: Implementation                                              │   │
│   │  • Write OAuth configuration                                         │   │
│   │  • Create authentication middleware                                  │   │
│   │  • Update user routes                                                │   │
│   │  • Add callback handlers                                             │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                    │                                         │
│                                    ▼                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  STEP 4: Verification                                                │   │
│   │  • Run tests                                                         │   │
│   │  • Check for security issues                                         │   │
│   │  • Validate OAuth flow                                               │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                    │                                         │
│                                    ▼                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  STEP 5: Documentation                                               │   │
│   │  • Update API documentation                                          │   │
│   │  • Add configuration instructions                                    │   │
│   │  • Generate changelog entry                                          │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Sequential Thinking MCP

The Sequential Thinking MCP enables structured reasoning:

```typescript
// Sequential Thinking provides step-by-step problem solving
const thinkingSteps = await sequentialThinking.execute({
  problem: "Design authentication system",
  constraints: ["Must support SSO", "OAuth 2.0 required", "Rate limiting needed"],
  maxSteps: 10
})

// Returns structured thought process:
// Step 1: Identify authentication requirements...
// Step 2: Evaluate OAuth providers...
// Step 3: Design token management...
// Step 4: Plan rate limiting strategy...
```

### Agent Memory & Context

Agents maintain context across steps:

| Context Type | Scope | Purpose |
|--------------|-------|---------|
| **Session Context** | Single conversation | Current task, files edited, decisions made |
| **Project Context** | Entire project | Codebase structure, dependencies, patterns |
| **Agent Persona** | Agent-specific | Specialized knowledge, behavioral rules |
| **Tool Results** | Per-step | Output from executed tools |
| **Graphiti Memory** | Persistent | Long-term knowledge graph (optional) |

---

## Parallel Session Architecture

### How Parallel Execution Works

The `@master` agent coordinates multiple specialized agents:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PARALLEL SESSION ORCHESTRATION                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  User: "@master Perform comprehensive code review of src/"                   │
│                                    │                                         │
│                                    ▼                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                        MASTER AGENT                                  │   │
│   │  • Analyzes request scope                                            │   │
│   │  • Determines required specialist agents                             │   │
│   │  • Creates parallel child sessions                                   │   │
│   │  • Aggregates and synthesizes results                                │   │
│   └───────────────────────────┬─────────────────────────────────────────┘   │
│                               │                                              │
│           ┌───────────────────┼───────────────────┐                         │
│           │                   │                   │                         │
│           ▼                   ▼                   ▼                         │
│   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐                │
│   │ CHILD SESSION │   │ CHILD SESSION │   │ CHILD SESSION │                │
│   │  @security    │   │ @performance  │   │  @quality     │                │
│   │   engineer    │   │   engineer    │   │   engineer    │                │
│   ├───────────────┤   ├───────────────┤   ├───────────────┤                │
│   │ • SQL inject. │   │ • N+1 queries │   │ • Code smells │                │
│   │ • XSS vulns   │   │ • Memory leaks│   │ • Test cover. │                │
│   │ • Auth issues │   │ • Slow paths  │   │ • Slow paths  │                │
│   └───────┬───────┘   └───────┬───────┘   └───────┬───────┘                │
│           │                   │                   │                         │
│           └───────────────────┼───────────────────┘                         │
│                               │                                              │
│                               ▼                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    AGGREGATED REPORT                                 │   │
│   │  Security: 3 critical, 5 warnings                                    │   │
│   │  Performance: 2 hotspots identified                                  │   │
│   │  Quality: 85% coverage, 12 code smells                               │   │
│   │  Priority Actions: [1] Fix SQL injection [2] Add rate limiting...   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Session Forking Implementation

```typescript
// Master agent creates parallel child sessions
async function parallelAnalysis(parentSession: Session, scope: string) {
  // Define specialist agents for this task
  const specialists = [
    { agent: 'security-engineer', focus: 'vulnerabilities' },
    { agent: 'performance-engineer', focus: 'optimization' },
    { agent: 'quality-engineer', focus: 'maintainability' },
  ]
  
  // Fork parent session for each specialist
  const childSessions = await Promise.all(
    specialists.map(async (spec) => {
      const child = await Session.fork({
        sessionID: parentSession.id,
        agentId: spec.agent,
      })
      
      // Each child runs independently
      return executeAgentLoop(child, `Analyze ${scope} for ${spec.focus}`)
    })
  )
  
  // Aggregate results in parent session
  return synthesizeResults(childSessions)
}
```

### Benefits of Parallel Execution

| Benefit | Description |
|---------|-------------|
| **Speed** | 3x faster than sequential execution |
| **Specialization** | Each agent focuses on their domain expertise |
| **Completeness** | No aspect is overlooked |
| **Isolation** | Failures in one session don't affect others |
| **Traceability** | Full audit trail for each analysis path |

---

## Competitive Comparison

### Kellton Kratos vs. Industry Tools

| Feature | Kellton Kratos | Claude Code | GitHub Copilot | Cursor | Aider |
|---------|----------------|-------------|----------------|--------|-------|
| **Multi-Agent** | ✅ 22 SDLC agents | ❌ Single agent | ❌ Single agent | ❌ Single agent | ❌ Single agent |
| **Parallel Sessions** | ✅ Native support | ❌ | ❌ | ❌ | ❌ |
| **MCP Integration** | ✅ 9+ servers | ✅ Limited | ❌ | ✅ Via extension | ❌ |
| **Custom Agents** | ✅ Markdown-based | ❌ | ❌ | ⚠️ System prompts | ❌ |
| **Enterprise Azure** | ✅ Native | ❌ | ⚠️ Copilot only | ✅ | ⚠️ |
| **Self-Hosted** | ✅ Full control | ❌ Cloud only | ❌ Cloud only | ❌ Cloud only | ✅ |
| **Offline Mode** | ✅ Local models | ❌ | ❌ | ❌ | ✅ |
| **IDE Agnostic** | ✅ CLI/Web/Desktop | ❌ Claude only | ❌ IDE only | ❌ Cursor only | ✅ CLI |
| **Session History** | ✅ Fork & branch | ✅ | ❌ | ⚠️ Limited | ✅ |
| **Tool Ecosystem** | ✅ 37+ built-in | ⚠️ 20+ | ❌ None | ⚠️ Limited | ⚠️ Limited |
| **Knowledge Graph** | ✅ Graphiti | ❌ | ❌ | ❌ | ❌ |
| **387+ API Integrations** | ✅ Via Rube | ❌ | ❌ | ❌ | ❌ |

### Key Differentiators

#### 1. **Multi-Agent Orchestration**
Unlike single-agent tools, Kratos can coordinate multiple specialized agents working in parallel. A @master agent can spawn @security, @performance, and @quality agents simultaneously, aggregating their expertise into comprehensive analysis.

#### 2. **Enterprise-First Design**
- Azure OpenAI native support
- Self-hosted deployment options
- SSO integration ready
- Audit logging and compliance

#### 3. **SDLC Coverage**
22 agents covering the entire software development lifecycle:
- Planning → Design → Development → Testing → Deployment → Maintenance → Documentation

#### 4. **Extensibility**
- Add custom agents via Markdown files
- Create custom slash commands
- Integrate any MCP server
- Build custom tools

#### 5. **Knowledge Persistence**
Graphiti integration enables long-term memory across sessions, building organizational knowledge over time.

### When to Choose Kellton Kratos

| Use Case | Why Kratos |
|----------|------------|
| **Enterprise Development** | Azure integration, self-hosting, compliance |
| **Team Collaboration** | Shared agents, session forking, knowledge graph |
| **Complex Projects** | Multi-agent analysis, parallel execution |
| **Custom Workflows** | Extensible agents, commands, and tools |
| **Full SDLC Support** | Coverage from requirements to deployment |

---

## Quick Reference

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Tab` | Switch agent |
| `Ctrl+P` | Open commands |
| `Ctrl+M` | Toggle MCPs |
| `Ctrl+/` | Toggle models |
| `Esc` | Cancel |
| `Ctrl+C` | Exit |

### Common Workflows

```bash
# Start a new project analysis
kratos
/ko:requirements Analyze requirements for e-commerce platform

# Design system architecture
@system-architect Design microservices architecture

# Parallel code review (uses Master agent)
@master Run comprehensive security, performance, and quality review

# Implement and test
/ko:implement User authentication module
/ko:test Run comprehensive test suite

# Security audit
@security-engineer Full security assessment
@audit Run TheAuditor analysis

# Documentation
/ko:document Generate API documentation
```

---

<div align="center">

**Built by Kellton Tech**

*Empowering developers with AI-powered software development*


</div>
