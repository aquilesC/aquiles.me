After [[locating particles for nanoparticle tracking]] and [[refining the position of nanoparticles on an image]], one must be able to discriminate between particles and noise. Up to this point, we have not rejected any maximum found by the gray dilation method on the images. @crocker1996 propose to use a method based on calculating other moments of the intensity distribution:

$$m_0 = \sum_{i^2+j^2\le w^2} A(x+i, y + j)$$
 
 and the second order:

$$m_2 = \frac{1}{m_0}\sum_{i^2+j^2\le w^2} (i^2+j^2)A(x+i, y+j)$$

In the paper, Crocker and Grier observe that most particles fall into a well defined cluster if one looks at the plot $$m_2\textrm{vs}m_0$$ although they also mention that it is hard to anticipate what distribution is expected. In the Fig2, it is clear what they refer to, and [[trackpy]] actually builds a feature like this in order to drop some tracks that may be spurious. I wonder what effect may have if one is tracking particles with different anisotropies. 

The paper also uses the standard deviation of both moments to estimate the accuracy of the location in the z-plane. I do believe that these efforts are because of the technical limitation at the time the paper was written (1996) and nowadays there are other approaches to yield more accurate results. 