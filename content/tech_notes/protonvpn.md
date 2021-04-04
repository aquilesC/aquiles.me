---
title: ProtonVPN at startup on Linux
description: How to configure the ProtonVPN application to run automatically at startup, also no a Raspberry Pi
keywords: ProtonVPN, Service, Linux, Startup
---

# ProtonVPN at startup on Linux
ProtonVPN is a great service. In this article I will show you how to configure it to run at startup on Linux machines. This is ideal for [[Raspberry Pi]] which you want to keep secured.

[ProtonVPN](https://protonvpn.com/) is a great VPN solution which includes also a free tier. Some months ago they've released an updated version of their [command-line tool](https://protonvpn.com/support/linux-vpn-tool/) which allows you to connect to the ProtonVPN servers directly. However, this new version is not compatible out-of-the-box with the previous version. It gave me a lot of headaches to find a way to run it automatically at startup on my Raspberry Pi. 

If you want to run something at startup, the best idea is to run it as a service. This gives you a lot of control regarding when to run it, how to stop it, etc. After you followed the installation instructions on the website, you will need to define a new service, which starts after the network connection has been established. It will also need to run as ``sudo``, or it will fail to start (running as root user does not work on Ubuntu/Debian systems). The first step is to know where the protonvpn command was installed on your system:

```bash
sudo which protonvpn
```

The output should be something like: ``/usr/local/bin/protonvpn``, but if it is not, pay attention and change it in the code block below. 

Create a file **protonvpn.service** in the folder ``/etc/systemd/system/``, and add the following:

```bash
[Unit]
Description=ProtonVPN-CLI auto-connect
Wants=network-online.target
[Service]
Type=forking
ExecStart=/usr/local/bin/protonvpn connect -f
Environment=PVPN_WAIT=300
Environment=PVPN_DEBUG=1
Environment=SUDO_USER=user

[Install]
WantedBy=multi-user.target
```

Remember to change the line ``Environment=SUDO_USER=user`` with the appropriate user name, for example ``pi``, etc. Also, if you want to change the type of connection, you should edit the line starting with ``ExecStart`` with whatever command you would like to run. 

Once you have it, you just need to enable it and start it:

```bash
sudo systemctl daemon-reload
sudo systemctl enable protonvpn
sudo systemctl start protonvpn
```

You can check the status of proton vpn in two different ways, by monitoring the status of the service or by using the command line tool itself:

```bash
sudo systemctl status protonvpn
protonvpn status
```

If you ever want to stop or restart the service, you can do:

```bash
sudo systemctl restart protonvpn
sudo systemctl stop protonvpn
```

Note that solutions based on ``cron`` tend not to work properly, since they tend to run before the network becomes active, and thus the command will fail.