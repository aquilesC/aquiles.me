
# Setup Wacom Tablet in Ubuntu

According to the [official documentation](https://github.com/linuxwacom/libwacom/wiki/Troubleshooting#special-cases), some Wacom tablets may change their behavior because they misidentify the Linux computer as an Android device, and therefore they won't be picked up by Ubuntu as a Wacom tablet. This is the list of tablets that show the issue:

- Wacom Intuos M: CTL-6100
- Wacom Intuos BT M: CTL-6100WL
- Wacom Intuos S: CTL-4100
- Wacom Intuos BT S: CTL-4100WL

 You can test this by running on a terminal:

```bash
$ libwacom-list-local-devices 
# Device node: /dev/input/event8
[Device]
Name=Wacom Intuos S (Android Mode)
...
```

Where you clearly see the tablet is in Android Mode. To change it back, you must press the buttons 1 and 4 (i.e. the rightmost and leftmost) simultaneously for a number of seconds (around 5). You can run the command again and see the output:

```bash
$ libwacom-list-local-devices 
# Device node: /dev/input/event8
[Device]
Name=Wacom Intuos S
ModelName=CTL-4100
```
Note that now it is properly identified as a Wacom Tablet. After this, Ubuntu should automatically pick it up for configuring.
