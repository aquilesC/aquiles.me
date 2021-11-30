To extract the diffusion coefficient from a [[nanoparticle tracking analysis]] experiment, especially when looking at diffusive [[brownian motion]], we can calculate $\left<\Delta x^2\right>$ from the tracks themselves as:[@catipovic2013]

$$\left<\Delta x^2(\tau)\right> = \frac{\sum_{i=1}^{N_i}(x(\tau_i + \tau)-x(\tau_i)^2)}{N_i}$$

In this case, instead of looking at the distribution (see: [[calculating diffusion coefficient from jump statistics]]), we can directly fit the temporal correlation, assuming the following relation:

$$\left<\Delta x^2\right>(\tau) = 2D\tau$$