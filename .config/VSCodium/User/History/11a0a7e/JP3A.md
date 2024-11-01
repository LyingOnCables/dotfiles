# 🔧 Setup.

> [!Warning]
> The installation guide is under construction, try it at your own risk.
> It is also ment only for Arch based systems.
> All other distros are not supported and I will not be helping with issues related to them.

## 📦 Dependence Installation.

> [!NOTE]
> In the guide, I will be using [Yay](https://github.com/Jguer/yay) as the AUR helper. Or change the commands to your preferred one.

- **Yay Installation.**

```bash
#!/bin/bash

sudo pacman -Syu
mkdir /tmp/yay
cd /tmp/yay

curl -OJ 'https://aur.archlinux.org/cgit/aur.git/plain/PKGBUILD?h=yay'
makepkg -si

cd
rm -rf /tmp/yay
yay --version
```

- **System packages.**

```bash
yay -Sy hyprland hyprlock hypridle xdg-desktop-portal-hyprland hyprpicker \
	swww waybar waybar-updates rofi-wayland swaync wl-clipboard cliphist \
	swayosd-git brightnessctl udiskie devify polkit-gnome playerctl \
	pyprland grim slurp \
```

- **CLI/TUI related packages.**

```bash
yay -Sy fastfetch fzf jq eza fd vivid fish starship ripgrep bat yazi
```

- **GUI Apps.**

```bash
	yay -Sy pavucontrol satty nemo zathura zathura-pdf-mupdf qimgv-light mpv
```

- **Color Theme.**

I like the [Catppuccin](https://github.com/catppuccin/catppuccin) theme, so, for GTK and QT apps use:

```bash
yay -Sy catppuccin-gtk-theme-macchiato catppuccin-cursors-macchiato \
		qt5ct qt5-wayland qt6-wayland kvantum kvantum-qt5 nwg-look
```

- **Icon Theme.**

First off, we have to download the icon package from the releases page of their repo. You can do it very easily by using curl.

```bash
curl -LJO https://github.com/ljmill/catppuccin-icons/releases/download/v0.2.0/Catppuccin-SE.tar.bz2
```

Once you have that, its time to extract the compressed package.

```bash
tar -xf Catppuccin-SE.tar.bz2
```

And finally, move them to the ~/.local/share/icons directory.

```bash
mv Catppuccin-SE ~/.local/share/icons/
```

- **Fonts.**

Install the following fonts:

```bash
yay -Sy ttf-jetbrains-mono-nerd ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-mono \
		ttf-nerd-fonts-symbols-common ttf-font-awesome noto-fonts-cjk ttf-ms-win11-auto
```

After that, refresh the font cache:

```bash
fc-cache -fv
```

## 🗂️ Dotfiles Installation.

[Yadm](https://yadm.io/), It lets you manage your dotfiles with git without the hassle of creating a git repo on your home directory as well as gitignoring a lot of files.

It also lets you pull from the repos that you set up on remote to your local repo and then push to your personal remote.

We are going to install yadm. You can do it using pacman with the following command:

```bash
yay -Sy yadm
```

After that, its time to clone the dotfiles repo into your system using yadm.

> [!IMPORTANT]
> If any file in your local machine differs from the one in the remote repository, your local file will remain unmodified. You'll need to manually review and resolve any differences.

```bash
yadm clone https://github.com/LyingOnCables/dotfiles.git
```

Now, logout from your current desktop session and log back into the _Hyprland_ session.

At this point your done installing the configuration!

## 📄 Post Installation.

Here are some things you might consider changing or adding:

- [Outputs.](/installations/outputs)
- [Default Applications.](/installations/default-app)
- [Default Editor.](/installations/default-editor)
- [Git.](/installations/git)
  #### 💻 Laptop Focused.
  - [Automatic CPU Frequency.](/installations/cpu) (Recommend)
  - [Bluetooth.](/installations/bluetooth)
  - [Brightness.](/installations/brightness)
  - [Wi-fi](/installations/wifi).
- Keyring Support.
- Update Everything.

## 🚧 Current in progress... 🚧
