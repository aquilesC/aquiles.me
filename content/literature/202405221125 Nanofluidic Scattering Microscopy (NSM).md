# NSM

- Source: [[@spackova2022]]
- Tags: #nanoparticle-sizing #nanochannels #nanoparticle-tracking-analysis 

![[nsm_schematic.jpeg]]

This paper displays an approach very similar to the one implemented by [[Dispertech]], just that instead of using [[hollow optical fiber]], they use a nano-fluidic chip with a rectangular cross section. The other difference is that they use a dark-field illumination approach, and instead of detecting the direct [[scattering from the particle]], they measure in a mode similar to [[iSCAT]] (see also: [[literature/202212091127 iSCAT for refractive index of EVs|202212091127 iSCAT for refractive index of EVs]]). 

The principle of operation is that the nano-channel becomes a scatterer (sub-diffraction), and the particle inside creates an interference pattern that can be detected by a microscope. The signal is processed similarly to iSCAT, but in this case particles are moving in 1-D. 

Since the interference is happening at short scales (between the channel and the particle), I wonder if it is possible to use low-coherent sources, such as LED's instead of a laser (the paper uses a supercontinuum, delivering $\approx 200\,mW$ of power. )


![[NSM_setup.jpeg]]

The setup is a [[dark-field microscope]] (also see: [[literature/202310101212 Stereo Darkfield Interferometry|202310101212 Stereo Darkfield Interferometry]] ) built on a Madcity Labs modular microscope (the micro-mirrors can move). 

I wonder why the choice of going for the "TIR" ([[total internal reflection]]) type of approach and not a classical dark-field with a stop in the center. 

Also, is it possible to replace the lens for a cylindrical lens to increase the intensity at the channel? 