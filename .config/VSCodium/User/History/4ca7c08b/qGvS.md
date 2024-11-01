# 🔧 Setup.

Firstly, change the outputs defined in this file:

```bash
~/.config/hypr/configs/monitors.conf
```

They are the ones defined for Hyprland to use, so is very important that you change them. If you wanna know what ID does your monitor has, execute:

```bash
$ hyprctl monitors
```

---

### 🪟 Workspaces.

You also need to change the workspaces associated with that monitor. For that, check this file:

```bash
~/.config/hypr/configs/workspaces.conf
```

For more information about Hyprland monitors and workspaces, [check the docs](https://wiki.hyprland.org/).

Now, for the Waybar to appear you also need to change the output definition on:

```bash
~/.config/waybar/config.jsonc
```
