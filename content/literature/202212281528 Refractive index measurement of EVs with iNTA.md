- Source: [@kashkanova2022a]
- Tags: #Extracellular-Vesicle #Refractive-Index #Lipoproteins

This paper piles on the developments of [[literature/202212281528 Refractive index measurement of EVs with iNTA]] applied to [[extracellular vesicle]]s instead of gold nanoparticles. 

> Due to their different biochemical composition, EVs and large LPs differ in refractive index (RI). The RI is typically below 1.4 31 for EVs and above 1.4 for LPs.7 This results in distinct light-scattering properties, which can be used to separately analyze the two 32 populations. However, until now this has only been successfully implemented for EVs larger than 200 nm, using a conventional flow 33 cytometry-based approach. 

!!! note
    The camera they use can acquire data at 5kHz

![[images/Pasted image 20221228153630.png]]

In the figure above it is clear that [[iNTA]] produces a narrower distribution for all the samples studied (EV's and lipoproteins), however the biggest doubt, as always, is what is the *ground truth*. Broadening for [[NTA]] makes sense ([[limitations of nanoparticle tracking analysis]]), but it is unclear how closer to the real data iNTA is. 

However, as in the case of polydisperse samples ([[literature/202212281435 Polydisperse samples with iNTA]]), using the method to study EV's can be particularly powerful, since it would allow to discriminate types of particles based on refractive index. 

![[images/Pasted image 20221228154539.png]]

The figure above shows mixtures of EV's and lipoproteins. They've built a classification algorithm using a [[random forest particle classifier]] to separate between populations: 

![[images/Pasted image 20221228155037.png]]


## Important Conclusion

[[Extracellular vesicle]]s have a median refractive index of 1.367 while large lipoproteins have a refractive index of 1.534 for ULDLs and 1.518 for VLDLs. 

It is important to point out that to calculate the refractive index of the particle, there is more than one variable at play: the method can acquire the scattered intensity, but to get the refractive index it is important to know the size (measured from the diffusion coefficient), as well as the thickness of the shell and the refractive index of the interior (assumed to be water in most cases). 

Interestingly, they don't mention the ability of iSCAT to measure mass, since it seems a more likely parameter to distinguish between hollow EV's and lipoproteins. 