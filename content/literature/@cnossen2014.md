---
aliases:
  - J. P. Cnossen. Review of Scientific Instruments. 2014
  - An optimized software framework for real-time, high-throughput tracking of spherical beads
tags: []
title: An optimized software framework for real-time, high-throughput tracking of spherical beads
authors:
  - J. P. Cnossen
  - D. Dulin
  - N. H. Dekker
year: 2014
journal: Review of Scientific Instruments
doi: https://doi.org/10.1063/1.4898178
zotero: zotero://select/items/@cnossen2014
---
<!-- START_ABSTRACT -->
Numerous biophysical techniques such as magnetic tweezers, flow stretching assays, or tethered particle motion assays rely on the tracking of spherical beads to obtain quantitative information about the individual biomolecules to which these beads are bound. The determination of these beads’ coordinates from video-based images typically forms an essential component of these techniques. Recent advances in camera technology permit the simultaneous imaging of many beads, greatly increasing the information that can be captured in a single experiment. However, computational aspects such as frame capture rates or tracking algorithms often limit the rapid determination of such beads’ coordinates. Here, we present a scalable and open source software framework to accelerate bead localization calculations based on the CUDA parallel computing framework. Within this framework, we implement the Quadrant Interpolation algorithm in order to accurately and simultaneously track hundreds of beads in real time using consumer hardware. In doing so, we show that the scatter derived from the bead tracking algorithms remains close to the theoretical optimum defined by the Cramer-Rao Lower Bound. We also explore the trade-offs between processing speed, size of the region-of-interests utilized, and tracking bias, highlighting in passing a bias in tracking along the optical axis that has previously gone unreported. To demonstrate the practical application of this software, we demonstrate how its implementation on magnetic tweezers can accurately track (with ∼1 nm standard deviation) 228 DNA-tethered beads at 58 Hz. These advances will facilitate the development and use of high-throughput single-molecule approaches.
<!-- END_ABSTRACT -->

<!-- START_TEMPLATE -->
# {{title}}

- Source:
- Tags: 
<!-- END_TEMPLATE -->