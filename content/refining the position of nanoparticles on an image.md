After [[locating particles for nanoparticle tracking]] using gray dilation, we will end up with a lot of false positives (for example, single-pixel noise). In @crocker1996 they propose calculating the centroid around one of those pixels by performing the following computation:

$$\left(
\begin{bmatrix}\epsilon_x \\ epsilon_t \end{bmatrix}\frac{\epsilon_x}{\epsilon_y}\right)=\frac{1}{m_0}\sum_{i^2+j^2\le w^2}\left(\right)$$

