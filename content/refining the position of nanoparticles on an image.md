After [[locating particles for nanoparticle tracking]] using gray dilation, we will end up with a lot of false positives (for example, single-pixel noise). In @crocker1996 they propose calculating the centroid around one of those pixels by performing the following computation:

$$\begin{pmatrix}\epsilon_x \\ \epsilon_t \end{pmatrix}=\frac{1}{m_0}\sum_{i^2+j^2\le w^2}\begin{pmatrix}i\\ j\end{pmatrix}A(x+i, y+j)$$

