/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://kellton-kratos.io",

  // GitHub
  github: {
    repoUrl: "https://github.com/RahulSinghai606/kellton-kratos",
    starsFormatted: {
      compact: "50K",
      full: "50,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/kratos",
    discord: "https://discord.gg/kratos",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "500",
    commits: "6,500",
    monthlyUsers: "650,000",
  },
} as const
