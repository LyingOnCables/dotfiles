## 🔧 Setup.

To manage your Wi-Fi connections, I'd recommend you to install [iwgtk](https://github.com/J-Lentz/iwgtk):

```bash
yay -Sy iwgtk
```

Also, you have to enable the iwd service:

```bash
sudo systemctl enable --now iwd.service
```

To manage all the other network configurations, use something like [nm-connection-editor](https://gitlab.gnome.org/GNOME/network-manager-applet)
