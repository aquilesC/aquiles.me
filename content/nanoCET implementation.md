# NanoCET Implementation
In [@faez2016] there is a follow up to [@faez2015] on how to use [[hollow optical fibers]] to measure the [[electrophoretic mobility]] of single gold nanospheres. The idea of the setup is the same used by [[Dispertech]], but with two additional electrodes next to the fiber and perpendicular to it. 

The **challenges** of the implementation are (see also [[challenges of electrophoretic mobility measurements]]):

- Electrodes can’t be perpendicular to the axis of the fiber (the movement must be along the channel)
- Complex geometry requires careful modeling to establish charge distribution inside the measurement area
- Screening of the electrodes results in data that must be analyzed in light of a proper model

The measurement is limited to around 100ms, after which the screening of the electrodes stops the movement of the particles in the channel. The frequency of the electrodes is 200Hz, with framerates of 2kHz, gives a good Nyquist value for the measurement. Averaging several frames it is possible to observe driving movement after 500ms, which means the movement is really dampened by the screening (or enhanced by the initial osmotic flow). 

The Comsol simulation assumes cylindrical symmetry also for the electrodes, which was not the experimental setup depicted on the paper. Time frames and speeds seem to be in line with the experimental results but further analyses still need to happen.

## Potential follow-up experiments: 

- Using particles with different charges and showing that the osmotic flow is not driving the oscillatory movement of the particles. In the discussion of @faez2016, the simulations yield time-scales of ~.01ms, while experiments have timescales of ~10ms. From @bazant2004, the timescales are between 0.6ms and 60ms for the experimental setup, which means simulations must be re-scaled or a better model introduced. 