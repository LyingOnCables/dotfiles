## 🗃️ About

The browser I'm using right now is [Zen](https://zen-browser.app/). It is a fork of Firefox, which adds some functionality I really like such as:

- 🚦 Vertical Tabs
- 👉 Split Views
- 🔒 Strong Privacy Options and Defaults (Using [BetterFox](https://github.com/yokoffing/Betterfox))
- 👀 And much more...

The extensions I'm using are:

- [Catppuccin Github Icons](https://github.com/catppuccin/github-file-explorer-icons)
- [Dark Reader](https://github.com/darkreader/darkreader)
- [LibRedirect](https://github.com/libredirect/browser_extension)
- [Sidebery](https://github.com/mbnuqw/sidebery)
- [Sponsorblock](https://github.com/ajayyy/SponsorBlock)
- [Stylus](https://github.com/openst)
- [Tab Session Manager](https://github.com/sienori/Tab-Session-Manager)
- [uBlock Origin](https://github.com/gorhill/uBlock#ublock-origin)

I'm also using a custom Startpage based on the [Catppuccin project](https://github.com/pivoshenko/catppuccin-startpage).

## :wrench: Setup

> [!WARNING]
> Guide is created only for Firefox based browsers.

### :package: Theme Installation

First of all, check your active profile. To do so, type `about:profiles` in your browser toolbar. Open the folder where that profile is located (~/.{browser}/{profileid}/). Now symlink or copy the chrome folder from the configuration to the active profile folder.

**Be sure to change the path to your profile**.

```bash
# Symlink the folder (Recommended, this way changing values on the original path alters the destination)
ln -sf ~/.config/browser/chrome/ ~/.{browser}/{profileid}/chrome

# Copy the folder
cp -r ~/.config/browser/chrome/ ~/.{browser}/{profileid}/chrome
```

Now, to install the colorscheme for your browser make sure to follow [this guide](https://github.com/catppuccin/firefox) and select the **Macchiato** variant and the **Lavender** accent color.

Close all instances of your browser and open it again.

Tada! 🎉 You should now see your theme correctly installed.

### :package: user.js Installation

Just like before, check your active profile. Now symlink or copy the user.js file from the configuration to the active profile folder.

```bash
# Symlink the folder (Recommended, this way changing values on the original path alters the destination)
ln -sf ~/.config/browser/userjs/{browser}-user.js ~/.{browser}/{profileid}/user.js

# Copy the file
cp ~/.config/browser/userjs/{browser}-user.js ~/.{browser}/{profileid}/user.js
```

As before, close all instances of your browser and you should be able to test your new user.js.

### :package: Extensions Installation

To import the configurations, check each extensions docs to see how.
