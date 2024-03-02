---
status: published
published_on: 02-03-2024
---
📚 I'm reviewing my book, Python for the Lab, adding plenty of insights I gained during the years since I published it. The community has grown, and companies have payed attention, but there's a long road ahead: 

One of the advantages of Python is that it has a low entry barrier. More and more people are developing software for controlling instruments. 

In the past few years, the need to develop our own drivers decreased. Today, even companies like National Instruments and Hamamatsu provide Python drivers for their devices. 

I am a big proponent of following clear design patterns to ease the onboarding of people. Induced by my web development hobbies, I proposed to follow the model-view-controller approach. But now I consider it outdated for instrumentation purposes. 

I am working on a slightly different approach: the Device-Experiment-View. In this case, the driver (what I called controller) is dropped from the spotlight. On the other hand, the relationship between experiments, devices, and views is systematized. 

"Devices" become the first step on creating ownership, on laying out expectations. "Experiments" establish the procedural nature of experiments, from calibration to data acquisition and processing. 

And the "View" is the tricky part, as always. Building GUI's is still daunting for many. I also believe that's the part were a good framework has the chances of creating the largest impact. Using simple drag-and-drop tools (like Qt Designer) and a glue program that effortlessly links a UI file to an experiment or device. 

Still, the biggest bottleneck is that most instrumentation software is developed by PhD's in a rush to get things done and little oversight. We need to start giving software the same importance a lab journal has. 

Poor software leads to poor reproducibility. 

But those topics are somewhat beyond my reach. 

I am looking forward to discussing with people who develop instrumentation software (either in Python or in other languages). I like learning from others' approaches and challenges ahead. 

🔔 Drop me a line and let's connect!