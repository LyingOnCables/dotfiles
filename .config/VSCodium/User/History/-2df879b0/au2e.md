# Dotfiles.

<div align = "center"> <h1><a href="[[Hyprland Setup.]]"><i>Hyprland.<i></a></h1>

---

<p align="center">
  <strong>Dotfiles.</strong>

<p align = "center">My daily driver setup for <i>Hyprland</i>. </p>

<a href="https://wiredlain.vercel.app/projects/hyprland/notes/hyprland-setup/">[Setup _Hyprland_]</a>

<br>

<table align="center">
   <tr>
      <th align="center">
         <sup><sub>⚠ Attention. ⚠</sub></sup>
      </th>
   </tr>
   <tr>
      <td align="center">

    Designed for Arch Linux. Compatibility with other systems is not guaranteed.
    VMs are not supported.
    NVIDIA GPU not supported

   </tr>
   </table>

### 🎛️ Overview.

---

This repository includes my .configs, used in my daily routine. It features personalized settings, and configurations for tools such as Neovim and Kitty, making it easy to establish my preferred work environment on any machine.

### ⚙️ System Info.

---

- **OS**: [Arch Linux](https://archlinux.org/).
- **WM**: [Hyprland](https://hyprland.org/).
- **Shell**: [Fish](https://fishshell.com/).
- **Terminal Emulator**: [Kitty](https://sw.kovidgoyal.net/kitty/).
- **Panel**: [Waybar](https://github.com/Alexays/Waybar).
- **Text Editor**: [Neovim](https://neovim.io/).
- **App Launcher**: [Rofi](https://davatorium.github.io/rofi/).
- **File Manager**: [Yazi](https://yazi-rs.github.io/), / [Nemo](https://community.linuxmint.com/software/view/nemo).
- **Browser**: [Zen-Browser](https://zen-browser.app).
- **Notification Manager**: [Swaync](https://github.com/ErikReider/SwayNotificationCenter).
- **Colorscheme**: [Catppuccin](https://github.com/catppuccin/catppuccin).

### 🔧 Setup.

---

> [!Warning]
>
> The installation guide is under construction, try it at your own risk.
> It is also ment only for Arch based systems.
> All other distros are not supported and I will not be helping with issues related to them.

### 📦 Dependence Installation.

> [!NOTE]
> In the guide, I will be using [Yay](https://github.com/Jguer/yay) as the AUR helper. Or change the commands to your preferred one.

###### Yay Installation.

```
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

```shell
yay -Sy hyprland hyprlock hypridle xdg-desktop-portal-hyprland hyprpicker \
	swww waybar waybar-updates rofi-wayland swaync wl-clipboard cliphist \
	swayosd-git brightnessctl udiskie devify polkit-gnome playerctl \
	pyprland grim slurp \
```

- **CLI/TUI related packages.**

```shell
yay -Sy fastfetch fzf jq eza fd vivid fish starship ripgrep bat yazi
```

- **GUI Apps.**

```shell
	yay -Sy pavucontrol satty nemo zathura zathura-pdf-mupdf qimgv-light mpv
```

- **Color Theme.**

I like the [Catppuccin](https://github.com/catppuccin/catppuccin) theme, so, for GTK and QT apps use:

```shell
yay -Sy catppuccin-gtk-theme-macchiato catppuccin-cursors-macchiato \
		qt5ct qt5-wayland qt6-wayland kvantum kvantum-qt5 nwg-look
```

- **Icon Theme.**

First off, we have to download the icon package from the releases page of their repo. You can do it very easily by using curl.

```shell
curl -LJO https://github.com/ljmill/catppuccin-icons/releases/download/v0.2.0/Catppuccin-SE.tar.bz2
```

Once you have that, its time to extract the compressed package.

```shell
tar -xf Catppuccin-SE.tar.bz2
```

And finally, move them to the ~/.local/share/icons directory.

```shell
mv Catppuccin-SE ~/.local/share/icons/
```

- **Fonts.**

Install the following fonts:

```shell
yay -Sy ttf-jetbrains-mono-nerd ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-mono \
		ttf-nerd-fonts-symbols-common ttf-font-awesome noto-fonts-cjk ttf-ms-win11-auto
```

After that, refresh the font cache:

```shell
fc-cache -fv
```

### 🗂️ Dotfiles Installation.

---

[Yadm](https://yadm.io/), It lets you manage your dotfiles with git without the hassle of creating a git repo on your home directory as well as gitignoring a lot of files.

It also lets you pull from the repos that you set up on remote to your local repo and then push to your personal remote.

We are going to install yadm. You can do it using pacman with the following command:

```shell
yay -Sy yadm
```

After that, its time to clone the dotfiles repo into your system using yadm.

> [!IMPORTANT]
>
> If any file in your local machine differs from the one in the remote repository, your local file will remain unmodified. You'll need to manually review and resolve any differences.

```shell
yadm clone https://github.com/LyingOnCables/dotfiles.git
```

Now, logout from your current desktop session and log back into the Hyprland session.

At this point your done installing the configuration!

### Currently in progress... 🚧
