const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://kellton-kratos.io" : `https://${stage}.kellton-kratos.io`,
  console: stage === "production" ? "https://kellton-kratos.io/auth" : `https://${stage}.kellton-kratos.io/auth`,
  email: "contact@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/kratos",
  discord: "https://kellton-kratos.io/discord",
  headerLinks: [
    { name: "Home", url: "/" },
    { name: "Docs", url: "/docs/" },
  ],
}
