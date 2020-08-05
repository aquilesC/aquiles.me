---
title: Limitations of Nanoparticle Tracking Analysis (NTA)
description: Discussion of the limitations of current tracking technology, including analysis software and hardware
---

# Limitations of Nanoparticle Tracking Analysis
[[Nanoparticle tracking analysis]] relies on following a particle over time and determining its size from its motion. Therefore the obvious limit to the method is that it can only work with particle that are visible. Even though it seems trivial, it is not. The fact that a particle is visible or not depends on multiple factors. For instance, a particle surrounded by a medium of the same refractive index will be invisible. However, with [[fluorescent labeling]] of particles even in the case just described, we would be able to see the particles. 

Nanoparticle Tracking Analysis devices work on two different methods: **Scattering mode** and **Fluorescent mode**. 

## Limitations of Working in Scattering
Scattering mode requires a minimal sample preparation. Optically speaking is also the easiest to construct, since there are no filters involved and almost any light source would work fine. The only requirement is that particles scatter enough light and that the background is sufficiently low. 

The limits of [[NTA]] in scattering mode are related therefore to the missmatch between the [[refractive index]] of the particle and the medium, the [[size of nanoparticles]], and the background level. Dim particles (i.e. small particles or those with a refractive index similar to the medium) can still be detected by improving on the camera specifications or the illumination strategy. This is the approach of [[Dispertech]] and the [[hollow optical fiber]]. 

If, however, there is a high background signal given by, for example, rests of proteins or anything else that is not a particle of interest, little can be done from an optical perspective. In this case, proper sample preparation is of utmost importance. [[Size exclusion chromatography]], or [[High Performance Liquid Chromatography]] are two common techniques to purify samples. 

## Limitations of Working in Fluorescence
One of the biggest technical limitations of [[NTA]] is that it needs to acquire enough data points per particle in order to calculate its size. If particles go too fast out of the field of view or if the dye used photobleaches too quickly, then the number of detected locations will be too small to calculate the [[diffusion coefficient]]. The trivial way of overcoming bleaching is by using [[quantum dots]][^1]. 

The biggest disadvantage is that QDs are relatively big (20nm) and thus alter the size of the particles under study. The way most NTA software works is by assuming spherical particles and therefore the result would be an effective hydrodynamic radius, which will differ from the sample's radius by a non-trivial amount. 

Another problem is related to the [[fluorescent labeling]] mechanism itself, but is not exclusive to the NTA method. If labeling is not specific or it generates by products such as dye molecules not bound to any target, it will increase the background signal, or it won't help distinguishing the object of study from random elements in the medium. 

This is one of the strengths of [[flow cytometer]] that do not need to overcome [[photobleaching]] since they look at just one point and for a short period of time. The non-specificity is, however, a challenge, that can be seen as the [[Effects of swarm of particles in flow cytometers]]. Again, the [[hollow optical fiber]] approach of [[Dispertech]] may be a good solution to overcome both limitations. 

## Software Limitations
I am not sure about what [[Particle Metrix]] software looks like, but the software provided by [[NanoSight]] is extremely limiting. Papers relate to *thresholds* and *camera setpoints* which are irreproducible outside of the devices themselves. The papers I've seen don't report exposure times, nor specify which cameras they are using (this last point may be understandable). Then, the step to actually analyze the data adds another layer of custom defined parameters that make it virtually impossible to translate to other software. 

I understand that many researchers don't want to deal with specific values, and they just want to click a button saying "high sensitivity" or "low sensitivity", but it really looks like they are doing a disservice to science by hiding away the true values. Without even counting the [[nanosight proprietary software update]] that included the [[Walker algorithm]] and some "calibration". 


[^1] Thane, K.E., Davis, A.M. & Hoffman, A.M. Improved methods for fluorescent labeling and detection of single extracellular vesicles using nanoparticle tracking analysis. Sci Rep 9, 12295 (2019). https://doi.org/10.1038/s41598-019-48181-6