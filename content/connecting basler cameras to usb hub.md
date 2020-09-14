# Connecting Basler cameras to usb hub
[[Basler]] cameras, especially the ACE series consume more current that what the [[USB3]] can provide and therefore require a powered HUB. However, not all hubs are the same and not all will work in the same way. 

- Logilink USB hub has a small footprint, and is powered at 5V ([example here](https://www.reichelt.nl/usb-3-0-hub-4-port-mit-netzteil-metall-logilink-ua0149-p127833.html?PROVID=2788&gclid=Cj0KCQjwqfz6BRD8ARIsAIXQCf2ZSwqr6h9tyOpS72tNfXesuUgkAR_W0rBP2diU8Q0s_hr_z5YSZqMaAqz4EALw_wcB&&r=1)). However, if both an ACE and a Dart are connected, the ACE fails to initialize. My presumption is that the Logilink is not managing the power correctly. For example, if the hub is not connected to the external power, it is still on, and the Dart camera is able to switch on without problems. 
- Orico has some nice hubs, but they are bulkier (like [this](https://www.orico.shop/en/orico-4-port-usb30-hub-black.html)), or they have a switch that must be pressed after every power cycle (like [this](https://www.orico.shop/en/orico-4-port-usb-30-hub-with-12v-power-adapter.html)). They are also bulkier and harder to integrate.
- I have ordered a Renkforce ([this](https://www.conrad.com/p/renkforce-4-ports-usb-30-hub-steel-casing-individually-connectable-wall-mount-option-black-1318454)) to test. I am still waiting for it to arrive.

See also: [[extending usb cable with amphenol connector]]

Filed under: [[Dispertech]]