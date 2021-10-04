After [[locating particles for nanoparticle tracking]] using gray dilation, we will end up with a lot of false positives (for example, single-pixel noise). In @crocker1996 they propose calculating the centroid around one of those pixels by performing the following computation:

$$\begin{pmatrix}\epsilon_x \\ \\ \epsilon_y \end{pmatrix}=\frac{1}{m_0}\sum_{i^2+j^2\le w^2}\begin{pmatrix}i\\ j\end{pmatrix}A(x+i, y+j)$$

Where

$$m_0 = \sum_{i^2+j^2\le w^2} A(x+i, y+j)$$

The equations above are the common centroid calculation in a region. That is why it is important to subtract the background appropriately as done in [[image restoration for nanoparticle tracking]] or there would be a bias towards the brighter regions of the image. 

Bear in mind that $$\epsilon$$ represents the variation from the previously identified pixel as the likely center of the particle. In principle, if $$|\epsilon|>0.5$$ then we should move the likely candidate to a new region and recalculate the position. 

It is important to note that @crocker1996 was written before the onset of single-molecule localization microscopy, and therefore the approach may be slightly extemporaneous to today’s approach, but nonetheless valid. 