import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "ZeroX Gravity",
  description: "ZeroX VitePress Site",
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
  base: "/",
  cleanUrls: true,
  ignoreDeadLinks: true,
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
    ["meta", { name: "twitter:card", content: "summary_large_image " }],
    ["meta", { name: "twitter:site", content: "ZeroX Gravity" }],
    ["meta", { name: "twitter:title", content: "ZeroX Gravity" }],
    [
      "meta",
      { name: "twitter:description", content: "ZeroX Gravity and Aurora" },
    ],
    ["meta", { name: "twitter:image", content: "/favicon.ico" }],
    // Open Graph
    ["meta", { property: "og:title", content: "ZeroX Gravity" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://massroileon.github.io" }],
    ["meta", { property: "og:image", content: "/favicon.ico" }],
    [
      "meta",
      { property: "og:description", content: "ZeroX Gravity, Modern Site." },
    ],
    ["meta", { property: "og:site_name", content: "ZeroX Gravity" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    // author discription keywords
    ["meta", { name: "author", content: "Veha, Massroileon" }],
    [
      "meta",
      {
        name: "keywords",
        content: "ZeroX, Games, VitePress, Documentation",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "ZeroX Gravity, Place",
      },
    ],
  ],
  themeConfig: {
    logo: { src: "/favicon.ico", width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Teams", link: "/teams" },
      { text: "Support", link: "/support" },
    ],

    sidebar: [
      { text: "Project Aurora", link: "/downloads" },
      {
        text: "Games Overview",
        items: [
          { text: "Aurora", link: "/games/aurora" },
          { text: "Cytus", link: "/games/cytus" },
          { text: "CytusII", link: "/games/cytus2" },
        ],
      },
      { text: "Caution!", link: "caution" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MassroiLeon/massroileon.github.io",
      },
      {
        icon: "youtube",
        link: "https://youtube.com/@moddedarcaea?si=QZK3FP2JFSZOK8dz",
      },
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
