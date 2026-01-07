export namespace Flag {
  export const KRATOS_AUTO_SHARE = truthy("KRATOS_AUTO_SHARE")
  export const KRATOS_GIT_BASH_PATH = process.env["KRATOS_GIT_BASH_PATH"]
  export const KRATOS_CONFIG = process.env["KRATOS_CONFIG"]
  export const KRATOS_CONFIG_DIR = process.env["KRATOS_CONFIG_DIR"]
  export const KRATOS_CONFIG_CONTENT = process.env["KRATOS_CONFIG_CONTENT"]
  export const KRATOS_DISABLE_AUTOUPDATE = truthy("KRATOS_DISABLE_AUTOUPDATE")
  export const KRATOS_DISABLE_PRUNE = truthy("KRATOS_DISABLE_PRUNE")
  export const KRATOS_DISABLE_TERMINAL_TITLE = truthy("KRATOS_DISABLE_TERMINAL_TITLE")
  export const KRATOS_PERMISSION = process.env["KRATOS_PERMISSION"]
  export const KRATOS_DISABLE_DEFAULT_PLUGINS = truthy("KRATOS_DISABLE_DEFAULT_PLUGINS")
  export const KRATOS_DISABLE_LSP_DOWNLOAD = truthy("KRATOS_DISABLE_LSP_DOWNLOAD")
  export const KRATOS_ENABLE_EXPERIMENTAL_MODELS = truthy("KRATOS_ENABLE_EXPERIMENTAL_MODELS")
  export const KRATOS_DISABLE_AUTOCOMPACT = truthy("KRATOS_DISABLE_AUTOCOMPACT")
  export const KRATOS_DISABLE_MODELS_FETCH = truthy("KRATOS_DISABLE_MODELS_FETCH")
  export const KRATOS_FAKE_VCS = process.env["KRATOS_FAKE_VCS"]
  export const KRATOS_CLIENT = process.env["KRATOS_CLIENT"] ?? "cli"

  // Experimental
  export const KRATOS_EXPERIMENTAL = truthy("KRATOS_EXPERIMENTAL")
  export const KRATOS_EXPERIMENTAL_FILEWATCHER = truthy("KRATOS_EXPERIMENTAL_FILEWATCHER")
  export const KRATOS_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("KRATOS_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const KRATOS_EXPERIMENTAL_ICON_DISCOVERY =
    KRATOS_EXPERIMENTAL || truthy("KRATOS_EXPERIMENTAL_ICON_DISCOVERY")
  export const KRATOS_EXPERIMENTAL_DISABLE_COPY_ON_SELECT = truthy("KRATOS_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const KRATOS_ENABLE_EXA =
    truthy("KRATOS_ENABLE_EXA") || KRATOS_EXPERIMENTAL || truthy("KRATOS_EXPERIMENTAL_EXA")
  export const KRATOS_EXPERIMENTAL_BASH_MAX_OUTPUT_LENGTH = number("KRATOS_EXPERIMENTAL_BASH_MAX_OUTPUT_LENGTH")
  export const KRATOS_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("KRATOS_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const KRATOS_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("KRATOS_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const KRATOS_EXPERIMENTAL_OXFMT = KRATOS_EXPERIMENTAL || truthy("KRATOS_EXPERIMENTAL_OXFMT")
  export const KRATOS_EXPERIMENTAL_LSP_TY = truthy("KRATOS_EXPERIMENTAL_LSP_TY")
  export const KRATOS_EXPERIMENTAL_LSP_TOOL = KRATOS_EXPERIMENTAL || truthy("KRATOS_EXPERIMENTAL_LSP_TOOL")

  function truthy(key: string) {
    const value = process.env[key]?.toLowerCase()
    return value === "true" || value === "1"
  }

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}
