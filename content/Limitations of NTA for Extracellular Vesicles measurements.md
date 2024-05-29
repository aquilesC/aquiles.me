[[Nanoparticle tracking analysis]] relies on measuring the position of a particle over time and using [[brownian motion]] theory to derive the [[diffusion coefficient]] of individual particles. 

The [[limitations of nanoparticle tracking analysis]] are well known but purely discussed, especially when it comes to studying [[extracellular vesicles]]. The challenges can be summarized as follows:

- EV's are dim because their [[refractive index]] is similar to that of the medium in which they are suspended. Since they are dim, the signal-to-noise is limited, which leads to [[Localization uncertainty in NTA measurements]]. 
- Most EV's are not just dim because of their optical properties, they are also relatively small (below $100\textrm{nm}$). Since they are small, their [[diffusion coefficient]] is large, which leads to even poorer localization accuracy. 
- Dim particles that move fast lead to limited number of collected frames (see: [[Optimal track length for MSD measurements]]). I have seen papers using just 10 frames to characterize the size, which is very far from giving a reliable estimate. 
- Since the scattering cross section scales as $d^6$ (or perhaps as $d^3$ if one considers that they are hollow), smaller particles are too dim for standard methods, which trims the detection at around $100\textrm{nm}$ diameter (even if [[Particle Metrix]] and [[NanoSight]] claim a lower limit of detection, they are normally misleading the reader.)

One of the biggest challenges is that NTA was built as a method to measure size, and when it comes to vesicles, the result is not reliable. 

That's why people started using NTA to quantify the number of particles in a volume. [[NanoSight]] has an obscure algorithm to transform detections into concentration (as far as I know it's based on number of detections in a given frame). [[Particle Metrix]] does the same, but it's unclear if the algorithm is the same. 

Since the performance of both instruments is so poor, most people started coupling [[size exclusion chromatography]] with NTA. In that way, each fraction is quantified and the size-profile is reconstructed from there. 

Even if NTA is not the best method to measure concentration, it's a cheap one and it has the added benefit of working with fluorescence. 

[[Myriade]] has released a product based on a different implementation of NTA, but with exactly the same limitations. 