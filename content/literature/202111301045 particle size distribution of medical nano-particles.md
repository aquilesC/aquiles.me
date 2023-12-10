# Develop a combination of methods to measure particle size distribution of medical nanoparticles
- Source: [[@gioria2018]]
- Tags: #medical-nanoparticles #nanomedicine #method-development #size-distribution #mednp

[[Medical nanoparticles]] (MedNPs) need to undergo rigorous testing before they are approved by regulatory bodies. Some of the information required includes the particle size distribution, intended not only as measures of diameter, but also aggregation state or the identification of different shapes. 

As is known, DLS is not the proper tool to characterize size-distributions of non-monodispersed samples. However, DLS is still the most widely used technique and one of the few methods for which International Standards guidelines exist. 

NTA can be seen as the single-particle equivalent of DLS, overcoming some of its limitations. The data analysis is done with proprietary software that it included an update to increase the resolution of the distributions (probably implementing the [[Walker algorithm]] Walker algorithm) called *finite track adjustment algorithm*. The biggest limitation of NTA is the low dynamic range. 

Another approach would be to combine existing methods, specifically:

- Asymmetric Field Flow Fractionation (AF4)
- Dynamic Light Scattering (DLS)
- Multi-Angle Light Scattering (MALS)

## AF4
Is a method in which the liquid flows through a capillary, and the parabolic shape of the fluid speed separates particles’s sizes in time (not unlike [[size exclusion chromatography]]). The method is meant to be *gentle on the particles* meaning that they can preserve the biological conditions and should not induce severe biases downstream. 

## Coupling the methods
By coupling a fractionation step with dynamic light scattering, it is possible to enhance the resolution of the latter, since it won’t be biased towards larger particles or aggregates anymore. This means that the DLS average value for the hydrodynamic radius (\\(R_h\\)) does indeed yield important information even if samples are non monodispersed. Adding MALS allows to measure the radius of giration (\\(R_g\\)) of the sample, and since the size is known

$$\rho=\frac{\textrm{R}_g}{\textrm{R}_h}$$

In the paper this is called: **FFF-MALS-DLS**
