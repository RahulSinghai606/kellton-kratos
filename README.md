<p align="center">
  <h1 align="center">Kellton Kratos</h1>
</p>
<p align="center"><b>AI-Powered Coding Agent for the Terminal</b></p>
<p align="center">
  <a href="https://github.com/RahulSinghai606/kellton-kratos"><img alt="GitHub" src="https://img.shields.io/github/stars/RahulSinghai606/kellton-kratos?style=flat-square" /></a>
  <a href="https://github.com/RahulSinghai606/kellton-kratos/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" /></a>
</p>

<p align="center">
<pre align="center">
<code>
█ █ █▀▀ █   █   ▀█▀ █▀▀█ █▀▀▄  █ █ █▀▀█ █▀▀█ ▀█▀ █▀▀█ █▀▀
█▀▄ █▀▀ █   █    █  █  █ █  █  █▀▄ █▄▄▀ █▄▄█  █  █  █ ▀▀█
▀ ▀ ▀▀▀ ▀▀▀ ▀▀▀  ▀  ▀▀▀▀ ▀  ▀  ▀ ▀ ▀ ▀▀ ▀  ▀  ▀  ▀▀▀▀ ▀▀▀
</code>
</pre>
</p>

---

## What is Kellton Kratos?

Kellton Kratos is an AI-powered coding agent that runs in your terminal. It helps developers write, debug, and refactor code using natural language commands.

### Key Features

- **Multi-Provider Support** - Works with Claude, OpenAI, Google Gemini, and more
- **Terminal-First Design** - Beautiful TUI built for developers who love the command line
- **LSP Integration** - Out-of-the-box Language Server Protocol support
- **MCP Support** - Model Context Protocol for extended capabilities
- **Desktop App** - Also available as a native desktop application

---

## Installation

```bash
# Using npm
npm install -g kellton-kratos

# Using bun
bun install -g kellton-kratos

# Using yarn
yarn global add kellton-kratos
```

### Desktop App

Download the desktop application from the [releases page](https://github.com/RahulSinghai606/kellton-kratos/releases).

| Platform              | Download                              |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `kratos-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `kratos-desktop-darwin-x64.dmg`     |
| Windows               | `kratos-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, or AppImage           |

---

## Quick Start

```bash
# Navigate to your project
cd your-project

# Start Kellton Kratos
kratos
```

### Configuration

Create a config file at `~/.kratos/kratos.json`:

```json
{
  "provider": {
    "anthropic": {
      "apiKey": "your-api-key"
    }
  }
}
```

Or use environment variables:

```bash
export ANTHROPIC_API_KEY="your-api-key"
# or
export OPENAI_API_KEY="your-api-key"
```

---

## Agents

Kellton Kratos includes two built-in agents you can switch between with the `Tab` key:

- **build** - Default, full access agent for development work
- **plan** - Read-only agent for analysis and code exploration

---

## Development

```bash
# Clone the repository
git clone https://github.com/RahulSinghai606/kellton-kratos.git
cd kellton-kratos

# Install dependencies
bun install

# Run in development mode
bun run dev

# Run typecheck
bun run typecheck
```

---

## Project Structure

```
kellton-kratos/
├── packages/
│   ├── kratos/          # Core CLI application
│   ├── app/             # Desktop/Web UI
│   ├── desktop/         # Tauri desktop wrapper
│   ├── sdk/             # JavaScript SDK
│   ├── plugin/          # Plugin system
│   └── ui/              # Shared UI components
├── .kratos/             # Configuration directory
└── package.json         # Monorepo configuration
```

---

## Contributing

Contributions are welcome! Please read our [contributing guidelines](./CONTRIBUTING.md) before submitting a pull request.

---

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

<p align="center">Built with ❤️ by Kellton</p>
