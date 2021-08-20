Sometimes Kciad complains about pins not being driven while during the electrical rules check, like in the example below:

![Kicad complaining about not driven pins](/images/Screenshot 2021-08-20 at 15.46.47.png)

This happens when pins are connected to a power network that has no explicit power pin. For example, I use screw terminals to connect a 12V supply to a PCB, therefore I have to add an extra label to the screw terminal so KiCad understands where the power is coming from:

![Adding the PWR_Flag to the schematic](/images/Screenshot 2021-08-20 at 17.31.59.png)

Tags: #Kicad #electronics #design #troubleshooting #PCB