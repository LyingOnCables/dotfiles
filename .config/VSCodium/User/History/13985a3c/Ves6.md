## 🔧 Setup.

Brightness control is integrated with [SwayOSD](https://github.com/ErikReider/SwayOSD) and [brightnessctl](https://github.com/Hummer12007/brightnessctl).
Be sure to follow [this steps](https://github.com/ErikReider/%3ESwayOSD#brightness-control) on the SwayOSD documentation to be able to change the brightness.

If you wanna have automatic screen brightness, install [wluma](https://github.com/maximbaz/wluma).

```bash
yay -Sy wluma
```

Then, enable the systemd unit.

```bash
systemctl --user enable --now wluma.service
```