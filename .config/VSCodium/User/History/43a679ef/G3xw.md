## 🔧 Setup.

Lets start by installing [Bluez](https://github.com/bluez) (Bluetooth support) and [Overskride](https://github.com/kaii-lb/overskride) (GUI):

```bash
yay -Sy bluez overskride
```

After installing the required packages, we have to start the Bluetooth service:

```bash
systemctl --user enable --now bluetooth.service
```

Now launch [Overskride](https://github.com/kaii-lb/overskride) and there you have it.
