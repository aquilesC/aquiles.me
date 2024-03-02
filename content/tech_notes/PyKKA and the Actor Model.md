There a Python package called [PyKKA](https://pykka.readthedocs.io/en/stable/) that implements the [[actor model]] (at least a part of what Akka did for the JVM). 

One important caveat is that PyKKA is designed to work in threads, therefore the usability to increase performance is limited. What is interesting is that there's a heavy use of typing in order to identify the type of actor created and message passed.

The code base seems very straightforward, taking care of the boilerplate needed to get messages, handling exceptions, call backs, etc. The fact that it is designed to work on a single-process limits the range of use-cases I can envision for this library. 

The question is whether the [[actor model]] itself is a useful model for [[instrumentation software]]. 