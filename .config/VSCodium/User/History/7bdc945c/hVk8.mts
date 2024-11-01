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
        text: "🏡 Getting Started.",
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
      {
        text: "🛠️ Configs.",
        items: [
          {
            text: "Browser.",
            link: "/configs/browser",
          },
          {
            text: "Fish.",
            link: "/configs/fish",
          },
          {
            text: "Hyprland.",
            link: "/configs/hyprland",
          },
          {
            text: "Neovim.",
            link: "/configs/neovim",
          },
          {
            text: "Vscodium.",
            link: "/configs/vscodium",
          },
          {
            text: "Yazi.",
            link: "/configs/yazi",
          },
        ],
      },
      {
        text: "📝 Outro.",
        items: [
          {
            text: "Credits",
            link: "/outro/credits",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/LyingOnCables" }],
  },
});
