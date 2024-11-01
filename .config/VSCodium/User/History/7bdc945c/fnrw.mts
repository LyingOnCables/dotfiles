import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ".Dotfiles",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/getting-started/about" },
      { text: "Credits", link: "/outro/credits" },
    ],

    sidebar: [
      {
        text: " 🏡 Getting Started.",
        items: [
          {
            text: "Start",
            link: "/getting-started/about",
          },

          {
            text: "Installation",
            link: "/getting-started/setup",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/LyingOnCables" }],
  },
});
