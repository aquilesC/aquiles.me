---
title: After a Failure, Revert to the Last Known Working State
description: In any project, and even in life, it is very easy to depart from the path that would bring us closer to our goals. Finding the first moment we started to diverge is the best way to recover. 
topics: business, management, project
---
# After a Failure, Revert to the Last Known Working State
I have been working full-time on [[Dispertech]] for almost two years already. This [[technology transfer]] project is focused on building a product that can be used (at least initially) by researchers from other areas than where the technique originated. The challenge, therefore, is transforming a prototype that sits in a physics lab to a device that can be used in a biology/bio-medicine lab. 

The *hard-core* prototype, in which every single mirror must be aligned, each lens has to be manually positioned, was useful to prove the [[nanoparticle tracking in hollow optical fibers|underlying ideas]]. However, from the perspective of a *user*, the device must be relatively easy to operate. Translating from prototype to *minimum viable product* includes many steps and changes to the original design in a sequence that, if we don't [[ask why]], can lead us through a series of missteps, lost time, and an overload of frustration. 

## The Multiparemetric Optimization Problem
One of the biggest challenges in many projects is to define what are we trying to achieve. In our case, the general idea of "user-friendliness" has many different approaches. Software to control the experiment must be improved, the external housing has to be nice, with informative LED's to show the status of the device. The optics must be placed in such a way that they stay aligned over time. 

We are relying on the use of disposable cartridges to hold a [[hollow optical fiber]], the core component of our device. These cartridges have many different aspects to consider, from cost of production to environmental friendliness. But we must also include the alignment precision (we are talking in the range of 1/10th of a millimetre) and the type of glue used.  

Overall there are around 20 different parameters that can be changed, and each one will have an impact on the overall outcome. Optimizing for an abstract idea such as *user-friendliness* already generates an uncertain goal. Using a different laser simplifies the electronics, but the user will need to spend 10 more minutes waiting for the device to be ready. How can you weigh the consequences of such a decision? 

Moreover, when almost no parameter can be changed without impacting on the others, you end up with a true [[multiparametric optimization problem]]. You need to explore a multi-dimensional decision space trying to achieve what it looks like, at least, a local maximum. But these processes are time and money-consuming. Therefore we probably will try, consciously or unconsciously, to find shortcuts in the process. 

## Early progress is not a persistent indicator
Many new projects work in such a way that there is a lot of progress at the beginning. Perhaps it is fueled by motivation, perhaps it is enabled by the amount of things that must be done and which have relatively low difficulty level: the famous low-hanging fruit. The early progress is a fantastic feeling, but is also risky to make longer-term assumptions based on it. 

If in the first 6 months you achieved this much, in the coming 6 you must be at this whole new different stage of the development. It is unavoidable to have these feelings and expectations. Marathon runners know this better than anyone: the pace at which you run the first half-marathon can't be used to calculate the time it'll take to finish the race. [[Early progress is not a persistent indicator]] for future progress. 

When quantifiable progress stops being exponential, several feelings will emerge. The most important one is *frustration*. You set expectations for yourself based on what you have done up to a point. Others may project their own expectations on you or on the company. When progress fuels motivation, lack of progress not only takes it away, it also gives space to the opposite feeling. 

## Stop and ask why
When building something no one else has built before, there is no clear reference. You may relate to other products, but you are mostly on your own. Even after the initial phase, progress never stops completely. There are always some wins, either big or small, and plenty of learning opportunities. However, as deadlines pass by and the product is no closer to completion than before, it becomes a constant emotional struggle. 

When you reach this point, you must realize there is a timeline that brought you here. You must be aware that there were plenty of smaller steps to arrive to where you are. This is the moment to stop and [[ask why]]. It is a challenging exercise, but the more often you do it in a conscious way, the better understanding you'll have about the process. 

Asking *why* means reflecting on what was the end goal of the actions you took in the past. For example, I was struggling with building disposable cartridges. They were in place to make the device *user-friendly*, and the entire ethos of what we were doing was around those cartridges. Because of the cartridges many parts of the device became too convoluted, hard to maintain and use. 

The obvious question to ask ourselves was: why are we still using the cartridges? They were the source of most of our problems. However, we built for so long on the idea that cartridges were a must-have, that it took us a very long time to step back and decide that we needed to tackle the problem in a different way. 

## Revert to the last known working state
[[Decisions have a compounding effect]], making the moment at which our path started to depart from our original plan almost imperceptible. Borrowing from version control systems, we can try to [[revert to the last known working state]]. It is not an easy task and it requires a lot of thorough introspection. But if you do the exercise, you will find that there is specific moment in time in which you defined a specific course of action that brought you to the state you want to avoid.   

To identify this moment in time, you can go backwards and [[ask why]] as many times as needed. When you find a moment where the reasoning is flawed or poorly supported, you can be confident that is a moment of departure. But this is not enough. You must be sure that is the *first* moment of departure. In software, this would be equivalent to finding the first time a bug was introduced, not just *a* moment when it was made worse. 

Ideally, we would go back in time to the moment we identified and just make a different choice. However, it is impossible to revert ourselves, our history. The new decision will be based on what we already know, on what we learned. Our resources are not going to be the same now than in the past. But this does not mean that we can't [[simple explanation of an optimization algorithm|optimize]] the decision based on the new context. 

## Dealing with failure is harder when alone
If there's something that I've learned is that when you feel frustrated because of a failure, the best you can do is to lean on others. The worst you can do is to keep everything to yourself. From people who can tell you: you looked happier one year ago, to business partners who have a deeper understanding of the processes. Every bit of input you can gather about the path you followed, is of great value to reconstruct your history. 

What a lot of people miss to realize is that in many [[decisions are made in the limbic system|decisions there are emotions involved]]. Acknowledging a failure, deciding to revert to a previous state, will have a toll. The more this feelings can be shared, and responsibilities spread among people, the easier it'll be for each individual. [[A failure is a learning opportunity]], and we must learn to deal with them in that way. It is just not easy to do it. 