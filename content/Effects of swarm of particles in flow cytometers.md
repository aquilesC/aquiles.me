![[Pasted image 20240529151047.png]]

In a [[flow cytometer]], the secret is that [[hydrodynamic focusing]] creates a narrow flow (green above) that guarantees only one cell is at the focus of the readout laser. 

However, smaller particles are more challenging, because several can be present at the same time in the focal spot. This problem became apparent when studying [[extracellular vesicles]]. 

They are much smaller than a cell ($\frac{100\textrm{nm}^3}{10\mu\textrm{m}^3}\approx 10^{-8}$), which means the hydrodynamic focusing will not ensure a single particle in the focal spot at a time. The only way to ensure it is by diluting the sample so that statistically it is unlikely that two particles will be at the same time in the focus. 

Specifically for [[extracellular vesicles]], the challenge is that most samples are mixed with other particles of similar sizes and scattering properties, and those particles are in a much larger proportion compared to EV's. 

A common way to overcome the problem is to fluorescently label the particles of interest and use [[fluorescence triggering]]. It is possible to see that while diluting the samples, there's a linear correlation with the number of particles observed (per unit of time) [[literature/@libregts2018|@libregts2018]]:

![[Pasted image 20240529152910.png]]

This means that the measurement is triggered by the particles of interest, but if there's [[swarming]], the particles of non-interest will contribute to the measured intensity (they'll be part of the background) and therefore there'll be a change in measured scattering intensity as the sample is diluted, while it should not be the case. 

![[Pasted image 20240529153715.png]]
As the concentration increases (upwards) the **rw-FSC** (restricted wide-angle forward scattering) also increases, while the values for fluorescence remain the same (it's a pity they didn't include histograms on the axes). 

[[Nano Flow Cytometry]] was designed to avoid swarming and other problems that arise when dealing with small particles. 