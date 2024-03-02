The **actor model** is based on some abstract, mathematical design principles, focusing on having a framework to model and implement concurrency. 

The general idea is relatively easy to understand: actors are a single unit of code-execution. In themselves there is no concurrency, and hence no need to add locks or any other protection. 

Actors communicate with each other passing *messages*, which pile up in a queue. Actors can create other actors, and pass messages back and forth. 

I believe the [[message passing interface]] may be an implementation of one of the crucial layers for the actor model. While reading the [Wikipedia article](https://en.wikipedia.org/wiki/Actor_model), some things were reminiscent of what I tried to achieve using [[ZMQ]], but without being so strict regarding what an *actor* was. 

The [[tech_notes/PyKKA and the Actor Model|PyKKA implementation]] of the actor model for Python is interesting, but it's focused on Threading for its async execution. That heavily limits the ability to improve performance, and hence it becomes an intermediate between Async and pure threads. 

I am wondering the relationship of the actor model with [[instrumentation software]]. I wonder if the same principles can be applied when modeling the interaction between instruments. 