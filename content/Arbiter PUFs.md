![[Pasted image 20260324152821.png]]

The idea of an **APUF** (arbiter [[Physical Unclonable Function]]) is to use small differences in manufacturing to create unique systems. Specifically, the picture above shows a series of MUX connected symmetrically. Given a challenge ($\vec{c}$) the signal will propagate differently due to different (and minute) delays in each gate. 

The arbiter is essentially a latch that gives a $1$ or a $0$ based on which signal arrived before. 

For each challenge $\vec{c}$, the output $r$ will depend on the underlaying system. It is possible to an extension to $2D$ so that the PUF behaves like a matrix: $A\times\vec{c}=\vec{r}$ increasing the total CRP space and making it more robust. 

However, this specific implementation of an APUF is prone to modelling attacks, i.e. predicting the behaviour by looking at the differences in manufacturing itself. 