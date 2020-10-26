---
title: Nanoparticle Tracking in Hollow Optical Fibers
description: Combining the advantages of NTA and flow-cytometry in well-defined geometries have multiple advantages, including increased size resolution.
epistemic: This is the core technology at Dispertech. I consider myself an expert in the area.
topics: dispertech, nta, optical fibers
---
# Nanoparticle Tracking in Hollow Optical Fibers
![Schematic of the technology of Dispertech](/nanoCET.png)

At [[Dispertech]], we are building on the ideas of the image in order to go beyond the [[limitations of nanoparticle tracking analysis]] by increasing the time particles can be tracked, at the same time than we lower the background signal. This has a twofold benefit. First, it increases the accuracy when calculating the size by studying the [[brownian diffusion]] of the particles. The longer the traces, the best fit to the data. This is also the argument behind the [[Walker algorithm]] for calculating size-distributions giving different weights to the results. 

The other benefit is that by having a lower background signal, we can observe smaller particles. We have a low background because light is guided through the fiber and, in principle, the only light that is able to escape is the signal scattered out by the particles. This is not completely accurate, since there is always some light being transmitted through the [[cladding mode]] of the fiber and there are some defect on the channel walls that can also scatter light. 

The background is static, and therefore it can be easily subtracted ipso-facto. 

In @faez2015, three experiments were done: [[tracking polystyrene particles]] down to 19nm at 3.5kHz, tracking [[CCMV virions]], and measuring particle-particle interactions. In @fo2020 , they use hollow core fibers (not optical fibers) that are able to guide light in the channel and not just the evanescent field.  

