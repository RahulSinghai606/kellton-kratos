import { $ } from "bun"

import { copyBinaryToSidecarFolder, getCurrentSidecar } from "./utils"

const RUST_TARGET = Bun.env.TAURI_ENV_TARGET_TRIPLE

const sidecarConfig = getCurrentSidecar(RUST_TARGET)

const binaryPath = `../kratos/dist/${sidecarConfig.ocBinary}/bin/kratos${process.platform === "win32" ? ".exe" : ""}`

await $`cd ../kratos && bun run build --single`

await copyBinaryToSidecarFolder(binaryPath, RUST_TARGET)
