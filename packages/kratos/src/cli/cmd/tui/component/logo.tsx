import { TextAttributes } from "@opentui/core"
import { For } from "solid-js"

const LOGO_LEFT = [`                              `, `█ █ █▀▀ █   █   ▀█▀ █▀▀█ █▀▀▄ `, `█▀▄ █▀▀ █   █    █  █  █ █  █ `, `▀ ▀ ▀▀▀ ▀▀▀ ▀▀▀  ▀  ▀▀▀▀ ▀  ▀ `]

const LOGO_RIGHT = [`                      `, `█ █ █▀▀█ █▀▀█ ▀█▀ █▀▀█ █▀▀`, `█▀▄ █▄▄▀ █▄▄█  █  █  █ ▀▀█`, `▀ ▀ ▀ ▀▀ ▀  ▀  ▀  ▀▀▀▀ ▀▀▀`]

// Kellton blue colors
const BLUE_DARK = "#1e3a5f"
const BLUE_LIGHT = "#4a90d9"

export function Logo() {
  return (
    <box>
      <For each={LOGO_LEFT}>
        {(line, index) => (
          <box flexDirection="row" gap={1}>
            <text fg={BLUE_DARK} selectable={false}>
              {line}
            </text>
            <text fg={BLUE_LIGHT} attributes={TextAttributes.BOLD} selectable={false}>
              {LOGO_RIGHT[index()]}
            </text>
          </box>
        )}
      </For>
    </box>
  )
}
