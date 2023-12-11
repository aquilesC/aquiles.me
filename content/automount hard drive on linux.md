First, let's find out the available disks:

```bash
sudo fdisk -l
```

Then we can find the UUID of each disk:

```bash
sudo blkid
```

And we finally edit fstab to automount based on UUID:

```
UUID=14D82C19D82BF81E /data    auto nosuid,nodev,nofail,x-gvfs-show 0 0
```

See also: [[encrypt and automount hard drives on linux]]