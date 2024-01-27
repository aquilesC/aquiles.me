
- Source: [[@merryweather2021]]
- Tags: #iSCAT #electronics #batteries #charge-photometry

Currently, the only tools available to the study of electrodes are too convoluted and expensive: X-Ray microscopy, Electron Microscopy, or Synchrotron-based. Moreover, the beams themselves can degrade the sample. 

Optical methods can overcome the challenges and limitations (far field, lower power, etc.) but up to now, they were lacking the approach to visualizing minute changes in the sample surface. 

The paper introduces the use of [[iSCAT]] to study the surface of lithium electrodes, specifically: $\textrm{Li}_x\textrm{Co}\textrm{O}_2$ ($0<x<1$). 

The biggest concern is the study of **lithium transport** in the material. In the literature, **ion diffusion coefficients vary by 6 orders of magnitude.**

## The setup
![[Pasted image 20231128085707.png]]
It is a traditional iScat (with the PBS). The $780\,\textrm{nm}$ laser is pulsed, but they don't discuss why (PicoQuant, $60\,\textrm{ps}$ pulses, repetition rate $80\,\textrm{MHz}$). They achieve real-time $5\,\textrm{nm}$ resolution with this setup. 

Moreover, they can apply an electric field and study the changes in the particles during different cycles. 

## Optical response of lithium particles
![[Pasted image 20231128090842.png]]
There is a correlation between time and potential applied. It is clear that the particle undergoes changes that correspond to different states of diffusion of the Lithium ion in between the matrix. This are crystalline particles, and the diffusion is related to the periodic structure. 

**I wonder if the surface is representative of what happens in the materials in real life**. 

![[Pasted image 20231128091118.png]]

For example, the image above shows another particle undergoing lithation and delithation. It is possible to see a wave-like pattern on the surface and a clear nucleation point. I like the figure below, where the crystalline structure becomes very evident:

![[Pasted image 20231128091324.png]]

The **biggest caveat** I see in this paper is the data analysis. iScat measurements were not enough to see the electronic displacement, they enhanced the contrast with something they've called "**differential image analysis**". 

It essentially means that they calculate the rate of change for every pixel in every frame. I find this extremely error prone, since it can easily give raise to artifacts. Moreover, the rate of change compounds, easily hiding exponential effects. A small displacement in the sample will appear as a wave propagating. 

Even if iScat is a method highly sensitive to small refractive index changes, it was not enough to directly detect changes on the surface of these particles. 

Or, iScat was not enough to make nice pictures for a Nature paper. That is a bit unclear to me at this point. 

Note: [[Illumion]] is a company that is trying to commercialize these results. 