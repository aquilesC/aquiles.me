# Extending USB cable with Amphenol connector

I need to connect a USB hub (see: [[connecting basler cameras to usb hub]]) to a computer through a nice-looking interface that can be mounted on a panel. The first choice I found was an Amphenol connector, like [this](https://nl.farnell.com/amphenol/ac-usb3-aa/usb-adapter-3-0-type-a-rcpt-rcpt/dp/2951359?st=usb3%20amphenol). 

- First thing to take into account: It is a female/female connector, which means that the cable that goes from the computer to the connector must be a cable without twisting pairs. It took me a while to realize why the computer was failing to connect to a [[Basler]] ACE camera, thinking it was a USB2 instead of 3 connection. 
- Second, even if using the proper cables, there is a significant data loss. With cables of 3m, the data loss can be up to 70~80%, with cables of 1m, it can be of up to 10~20%.

The first issue is easy to solve, the second, however is hard to understand. If I extend the cable with a male/female extension cable, I have 0% data loss, meaning that the length of the cable is not the problem, but the connector itself is. 

I am testing something called a redriver (like [this](https://www.ti.com/tool/USB-REDRIVER-EVM?keyMatch=USB%20REDRIVER&tisearch=Search-EN-everything#descriptionArea)), which seems to have solved the problems: I connect the redriver to the Amphenol and the hub to the redriver. 

Even though the solution works, spending 100€ just to solve this non-crucial problem seems a bit too much. 

Filed under: [[Dispertech]]