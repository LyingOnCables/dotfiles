## 🔧 Setup.

Lets start by installing bluez (Bluetooth support) and overskride (GUI):

```bash
yay -Sy bluez overskride
```

After installing the required packages, we have to start the Bluetooth service:

```bash
systemctl --user enable --now bluetooth.service
```

Now launch overskride and there you have it.
