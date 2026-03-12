import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "ZeroX Gravity",
  description: "MassroiLeon - ZeroX Gravity",
  rewrites: {
    "en/:rest*": ":rest*",
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  sitemap: {
    hostname: "https://massroileon.github.io",
  },
  base: repo ? (repo.endsWith('.github.io') ? '/' : `/${repo}/`) : '/',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  appearance: "dark",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ["meta", { name: "theme-color", content: "#1e1e2e" }],
    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "ZeroX Gravity" }],
    ["meta", { name: "twitter:title", content: "ZeroX Gravity" }],
    [
      "meta",
      { name: "twitter:description", content: "ZeroX Gravity Home Page." },
    ],
    ["meta", { name: "twitter:image", content: "/hero-og.png" }],
    // Open Graph
    ["meta", { property: "og:title", content: "ZeroX Gravity" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://massroileon.github.io" }],
    ["meta", { property: "og:image", content: "/hero-og.png" }],
    [
      "meta",
      { property: "og:description", content: "ZeroX Gravity Home Page." },
    ],
    ["meta", { property: "og:site_name", content: "ZeroX Gravity" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    // author discription keywords
    ["meta", { name: "author", content: "Massroileon" }],
    [
      "meta",
      {
        name: "keywords",
        content: "ZeroX Gravity, Games, VitePress, Documentation",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "ZeroX Gravity Home Page.",
      },
    ],
  ],
  themeConfig: {
    //logo: { src: "/favicon.ico", width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Teams", link: "/teams" },
      { text: "Support", link: "/support" },
    ],

    sidebar: [
      { text: "Zero Coin", link: "/zerocoin" },
      { text: "Project ZP.Aurora+", link: "/projectaurora" },
      { text: "PRAurora: Reboot+", link: "/praurora" },
      { text: "Sub Pass", link: "/subpass" },
      /*
      {
        text: "Games Overview",
        items: [
          { text: "Aurora", link: "/games/aurora" },
          { text: "Cytus", link: "/games/cytus" },
          { text: "CytusII", link: "/games/cytus2" },
        ],
      },
      */
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MassroiLeon/massroileon.github.io",
      },
      {
        icon: "youtube",
        link: "https://youtube.com/@zeroxaurora?si=63Rnv40vTjud_ruI",
      },
      {
        icon: "telegram",
        link: "https://t.me/Mikuchan_none"
      }
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/MassroiLeon/massroileon.github.io/blob/main/LICENSE">Apache License 2.0</a>',
      copyright: "Copyright © 2025-present</a>",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi",
      link: "/vi",
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
