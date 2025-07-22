// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./aurora.css";
import "./style.css";
import "virtual:group-icons.css";
import "@catppuccin/vitepress/theme/macchiato/sky.css";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme;
