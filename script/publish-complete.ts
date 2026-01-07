#!/usr/bin/env bun

import { Script } from "@kellton-kratos/script"
import { $ } from "bun"

if (!Script.preview) {
  await $`gh release edit v${Script.version} --draft=false`
}

await $`bun install`

await $`gh release download --pattern "kratos-linux-*64.tar.gz" --pattern "kratos-darwin-*64.zip" -D dist`

await import(`../packages/kratos/script/publish-registries.ts`)
