In essence, a #PUF is a device that can be manufactured only once and which has some unique and impossible to reproduce observables. They are used to identify hardware and ensure systems have not been tampered with. 

The first approach to PUF is through a **challenge response pair** (CRP). The idea is that the PUF transforms a *challenge* into a *response* in a way that is unique to the device. If we create a database of CRP's at the moment of fabrication, we can use those CRP's to verify it's the same device. 

Things to consider are: the CRP space. How many challenges does the device tolerate, and how correlated are one to another. The time it takes to read out all the challenge/response pairs. 

The first is important, because it limits the usability and the chances of faking the response. This is particularly important for cases of remote access to the PUF: I can ask you to perform a measurement and give me the answer. But if you could know all the possibilities upfront, then you can "fake" the PUF by just providing the answer. 

The other issue is how long it takes to scan all possibilities. If at the moment of manufacturing, you store some random CRP in a table, when you challenge the PUF you expect the chances of someone else having recorded the same CRP are very low. This is violated if you can somehow measure all the CRP space in a reasonable timeframe, or if responses are heavily correlated. 

There is a final concern that comes from **modelling the PUF**. Imaging there would be a way of predicting behaviour, we could "*easily*" compute the CRP. Today, this is one of the largest concerns. As compute power increases and more sophisticated algorithms are available, it becomes easier to predict outcome based on past results. 

In electronics ([[semiconductor industry]]) the challenge is similar. Devices are integrated in different factories, building complex equipment. Authenticating that no alterations happened in the supply chain is a challenging problem. 

## See:
- [[Optical PUFs]]
- [[Arbiter PUFs]]
- [[Memory-based PUFs]]