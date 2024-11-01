## 🗃️ About

[Neovim](https://neovim.io/) is my main editor of choice. Not only is faster than its competitors, but it's also super customizable, obviously uses the vim bindings (which are the best thing when it comes to manipulating text) and has a great and big community.

Extras are basically a bunch of plugin specs, which you can divide in different files. You can import each other as well, and they serve as plugins that you can enable and disable easily through a menu by typing the `:LazyExtras` command. This is so good when you are trying to built a configuration that depending on the project or the tastes of the person, can select different plugin selections.

There are a lot of languages supported (zig, rust, svelte, typescript, java, go, etc), as well as a bunch of formatters (biome, prettier, ruff, stylua, shfmt, rustywind, etc) and linters (biome, eslint, pylint, selene, markdownlint, stylelint, etc).

Check the [LazyVim docs](https://www.lazyvim.org/) to know more about it.

## :wrench: Setup

### :package: Extras Installation

To install an extra is just as easy as opening neovim, typing `:LazyExtras`, and selecting any row from the menu that appears. To select one, hit the `x` key. And your done, be sure to close and open again neovim to see the changes.

> [!NOTE]
> There are some extras that have extended in the name. Those are based on the native [LazyVim extras](https://github.com/LazyVim/LazyVim/tree/main/lua/lazyvim/plugins/extras).

### :package: Neovim Version Manager

If you wanna use multiple instances of neovim and switch between them, check out [bob](https://github.com/MordechaiHadad/bob).

Here is a quick start using the latest version as an example:

```bash
# Install the latest version
bob install latest

# Switch to the latest version
bob use latest

# Check installed versions
bob ls

# Uninstall the latest version
bob uninstall latest
```

Check the [bob usage section](https://github.com/MordechaiHadad/bob?tab=readme-ov-file#-usage) for more information.
