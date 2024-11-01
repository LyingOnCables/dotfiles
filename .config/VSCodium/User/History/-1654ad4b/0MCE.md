## 🔧 Setup.

This one is a must have for all laptops users, even for desktop pc users as well. Firstly, [install auto-cpufreq](https://github.com/AdnanHodzic/auto-cpufreq).

```bash
yay -Sy auto-cpufreq
```

After that, install the daemon by using this command:

```bash
sudo auto-cpufreq --install
```

If that didn't work, enable the systemd unit:

```bash
sudo systemctl enable --now auto-cpufreq.service
```

Now your good to go, check their [documentation](https://github.com/AdnanHodzic/auto-cpufreq?tab=readme-ov-file#post-installation) for more details on how to configure it. I personally use the default profile it comes with and I didn't had any issues.