Sampling errors is: 

> the error created when only a subset of a population is sampled
> - [@catipovic2013]

If we want to know the accuracy when determining the average diffusion coefficient, the error will be dominated by the standard deviation of the measured variances (see: [[calculating diffusion coefficient from jump statistics]]):

$$\sigma_\textrm{sampling} = \sqrt{\frac{2}{\textrm{N} -1}}$$

And, as expected, the more particles we measure the better sampling accuracy we'll get (although see: [[Sources of error in measuring diffusion coefficient through nanoparticle tracking analysis]])

There's a caveat here, though. N is the number of measurements, so for 15 particles acquired along 100 frames these are 1500 data points. It is like building a distribution of *all* the jumps. 

However, if we use the mean squared displacement (see: [[Calculating diffusion coefficient from mean squared displacement data]]) we have:

$$\sigma_\textrm{sampling}=\frac{1}{\sqrt{\textrm{N}}}$$

But in this case $N$ is the number of particles. 