export const Mark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-mark"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* K letter mark - bright blue */}
      <path d="M4 4H8V10L14 4H20L12 12L20 20H14L8 14V20H4V4Z" fill="#60A5FA" />
    </svg>
  )
}

export const Logo = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 42"
      fill="none"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {/* KELLTON KRATOS - Pixelated style matching TUI */}
      <g>
        {/* KELLTON - Light gray (#9CA3AF) */}
        {/* K */}
        <path d="M0 6H6V18L18 6H24L12 18L24 36H18L6 24V36H0V6Z" fill="#9CA3AF" />
        {/* E */}
        <path d="M30 6H54V12H36V18H48V24H36V30H54V36H30V6Z" fill="#9CA3AF" />
        {/* L */}
        <path d="M60 6H66V30H84V36H60V6Z" fill="#9CA3AF" />
        {/* L */}
        <path d="M90 6H96V30H114V36H90V6Z" fill="#9CA3AF" />
        {/* T */}
        <path d="M120 6H150V12H138V36H132V12H120V6Z" fill="#9CA3AF" />
        {/* O */}
        <path d="M156 6H180V36H156V6ZM162 12V30H174V12H162Z" fill="#9CA3AF" />
        {/* N */}
        <path d="M186 6H192V24L210 6H216V36H210V18L192 36H186V6Z" fill="#9CA3AF" />

        {/* Space */}

        {/* KRATOS - Bright blue (#60A5FA) */}
        {/* K */}
        <path d="M234 6H240V18L252 6H258L246 18L258 36H252L240 24V36H234V6Z" fill="#60A5FA" />
        {/* R */}
        <path d="M264 6H288V18H282V12H270V18H282V24L294 36H288L276 24V36H264V6ZM270 18H276V18Z" fill="#60A5FA" />
        {/* A */}
        <path d="M300 6H324V36H318V24H306V36H300V6ZM306 12V18H318V12H306Z" fill="#60A5FA" />
        {/* T */}
        <path d="M330 6H360V12H348V36H342V12H330V6Z" fill="#60A5FA" />
        {/* O */}
        <path d="M366 6H390V36H366V6ZM372 12V30H384V12H372Z" fill="#60A5FA" />
        {/* S */}
        <path d="M396 6H426V12H402V18H420V24H426V36H396V30H420V24H402V18H396V6Z" fill="#60A5FA" />
      </g>
    </svg>
  )
}

