[[Modelling systems]], mostly useful in computing properties, is often done as a **forward problem**, which means calculating something from *first principles*. This is how science has always worked: abstract the problem as much as possible until it becomes useful to make a prediction. 

On the other hand, we can reverse the question: what is the starting point for a given output? 

A trivial thing: at what time do I have to leave to arrive on time? 

As problems get more complex, the reverse problem becomes intractable. This is a crucial aspect of [[cryptography]]: it's trivial to encode something, but impossible to decode without the key ([[Physical Unclonable Function]] are in the same train of thought). 

Specifically, [[material discovery]] often relies on using [[DFT]], a powerful (and complete) numerical method to calculate molecular behaviour. Lot's of work has been put into calculating *properties* based on DFT modelling (which is not at all a trivial step). 

There are entire databases with modelled systems and interactions ([[@abed2024|Open Catalyst Experiments 2024 (OCx24): Bridging Experiments and Computational Models]], for example). 

But those still work forward with experimental validation. 

What if we ask ourselves: "How do I make a material that has X, Y, Z properties, with W boundary conditions?" 

The problem is intractable today. 

I believe that [[tackling the reverse problem with quantum computers]] will be the true breakthrough and in the meantime we need to leverage what we can, including [[AI for the reverse problem]]. 