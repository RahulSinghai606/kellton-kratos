interface ImportMetaEnv {
  readonly VITE_KRATOS_SERVER_HOST: string
  readonly VITE_KRATOS_SERVER_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
