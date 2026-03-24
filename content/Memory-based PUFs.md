A [[Physical Unclonable Function]] relies on a manufacturing process with a level of stochasticity that makes it impossible to reproduce. In [[semiconductor industry]], this happens with RAM memory: at the moment of power up, each bit will get randomly assigned values of $1$ or $0$. This is unique to the chip, and can't be controlled (similarly to what happens with [[Arbiter PUFs]] using the MUX design). 

There are some subtleties in the architecture in order to define what is a "Challenge", given that the bits are already set since power on. 

As far as I understand, these types of PUFs show a high degree of correlation (when there's a $1$ there's a higher chance of having another $1$ close by) limiting the total space. They can also be inspected from the outside in a non-destructive test, allowing some form of impersonation (given the bit is set at power up, it is already available). 

On the other hand, as far as I understand, they are easy to manufacture, quite stable over time, and with good error correcting algorithms in case there is drift over time. 