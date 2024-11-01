## 🗒 Introduction.

Here I Will write a step-to-step of how setup _Hyprland_.
Why? because I hate to watch video about how to do something.
I just like to read with my own thoughts.
So, this will be my written guide in case I need.

### 📖 Guide:

#### Setting Up _Arch_.

After booting in the pen-drive with the _Arch_ ISO, y'all be in this screen.

IMAGE

> [!note]
> If you are using a Ethernet cable, you don't need to do this.

##### Arch network.

If you are using a laptop you need to connect to a Wi-fi using the **iwctl** command.
Type this command and hit enter:

```bash
root@archiso# iwctl
```

And now we are in the iwctl interface.

IMAGE

First we need to scan the networks nearby:

```bash
[iwd]# station wlan0 scan
```

> [!warning]
> If you are dumb and don't know the SSID of your network:
>
> ```bash
> [iwd]# station wlan0 get-networks
> ```
>
> Here you get a list of networks around.

Now connect to your Wi-fi using:

```bash
[iwd]# station wlan0 connect SSID
```

After hit enter you need to type the **passphrase**, be careful because you can't see the digits.

To see if you are connected:

```bash
[iwd]# station wlan0 show
```

If worked you will see all the information about the network.

##### Installing The _Arch_ Linux

After hit the:

```
root@archiso# archinstall
```

IMAGE

You get the installer script.
Here, choose whatever you prefer.

> [!NOTE]
> In the "**Profile**" section of the installer, I always choose desktop, never minimal, because my _Dell_ potato don't boot for some reason when I choose that.

To proceed with the guide, in the "**Profile**" section select "_Hyprland_".

#### First Boot.

Now that the install is over and you rebooted.
You probably will get something like this:

IMAGE

##### Hyprland network.

You can use the command:

```bash
$ nmtui
```

Which is beautiful and intuitive.

But here if you want something more direct:

```bash
$ nmcli device wifi connect SSID password PASSPHRASE
```

If worked you get a message saying that is connected.

##### Installing package manager.

The package manager that I use is _yay_, which I think is the best.
Choose one of your preference.
In non-Arch based, I suggest _Homebrew_.

First change the directory and clone _yay_:

```bash
$ cd /opt/

$ sudo git clone https://aur.archlinux.org/yay-git.git
```

The packages is owned by root, so:

```bash
$ sudo chown -R USER:USER yay-git/

$ cd yay-git/

$ makepkg -si
```

Now, yay is installed.

##### Setup script.

After the _yay_ install, go back to the opt:

```bash
$ cd /opt/
```

Now, if you don't have a _Hyprland_ config (Probably) to start using and learn you can use the _Sol Does Tech_ one, which I think is great for beginners.

First clone his repository:

```bash
$ sudo git clone https://github.com/soldoestech/hyprland.git

$ sudo chown -R USER:USER hyprland/

$ cd hyprland/

$ chmod +x set-hypr

$ ./set-hypr
```

Now the script will start.

> [!attention]
>
> 1. Disable Wi-fi powersave?: Yes.
> 2. Install the packages?: Yes.
> 3. Copy the config files?: Yes.
> 4. Install _Starship_ shell?: Personal (Yes.)
> 5. Install _Asus_ ROG software support?: In my case (No.)

##### At this point your done installing the _Hyprland_!

> [!NOTE]
>
> If you are interest in some configs, check my [Dotfiles](/getting-started/dotfiles) file.

---
