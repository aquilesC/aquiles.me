---
title: Open Hardware Business Models
description: Different paths and considerations for transforming an open-hardware project into a viable business
status: draft
epistemic: I have been contributing to open projects for at least 10 years, and have been following the open-hardware landscape for at least 5. I also have experience in technology transfer and business development. 
---
[[Open Hardware]], or probably better described as [[libre hardware]], is a way of sharing knowledge that is slowly taking root in different disciplines. It is in a sense the extension of [[open source]] software to the physical world. However, hardware and software have very different potentials and caveats which are worth exploring in detail to understand the full range of promises that each can bring. 

Software, at least since the massive adoption of the internet, has an extremely low (if not zero) [[marginal cost]]. This means that the economy of scale does not apply to software as it does for hardware. If we were to produce a single cell phone, its costs would be astronomical, but if we plan on selling millions, the costs per unit fall dramatically. (See: [[Development costs of open source software]])

It is undeniable that 3D printing and other techniques lowered the barrier to start designing and building tools. In less than a week a person can go from zero to having a custom holder for microscope slides just following online tutorials. Safety risks and required know-how are minimal when starting, easing the transition from consumer to designer/producer. For software this was always different, because the means of production were in the hands of the consumers themselves. You can't use nor produce software without a computer. 

The story of a kid who learns to program because their games do not work the way they expected is a clichè that depicts many successful entrepreneurs in the tech world. The story of a kid who learned to sew to fix the quality of the balls to play football, is one completely unheard of, at least up to now. Lowering the access barrier to manufacturing processes is what is sparking the *maker* profile, outside of the digital realm and into physical products. 

One of the reasons for the quick adoption of manufacturing tools such as 3D printing and laser cutting is that in recent years many alternatives appeared, lowered the costs, and became available even as household items. At scale, however, a printer is not able to compete in costs to injection molding. For materials such as metals, casting, extruding, or CNC, are proven and scalable processes that can't yet be beaten by digital techniques. 

It is worth mentioning that libre hardware is often associated with techniques such as 3D printing and laser cutting, but they are not a requirement. The fact that many projects use these techniques is a sign of where they are coming from, not of where they are going. A clear example is the Arduino, that started with bulky electronics that could even be soldered by hand, and now is using surface mount components, much easier to mass-produce.  

Therefore, the open question that still remains is whether a project rooted on open-hardware principles can become a business that is self-sustainable. This means, an endeavor that is able to generate enough cash flow as to maintain its core activities running without requiring continuous external funding. Although there may be many projects stemming from different fields, I will focus on tools that started as research projects, probably financed with public money in a university or institute. Most of the reflections are, however, extrapolable. 

## The race to the bottom
Before discussing about business models themselves, I think it is wise to put a warning notice regarding the race to the bottom. There are countless open-hardware projects that stress the fact that they are cheaper than the proprietary competition as their main, or perhaps even unique, advantage. First, this is a skewed metric, because not a single project factors the costs of development and manufacturing. 

Let's do a very simple math with the example of an open-source syringe pump[@wijnen2014] (see: [[open hardware business model]]). The paper has 4 authors, so let's assume 2 PhD's, 1 postdoc and one professor. The two PhD's dedicated perhaps 10% of their time to the project over a year. With Dutch salaries that is around 8k€ plus overhead, let's round to 10k€. Let's say the postdoc dedicates 5% of their time, it's around 5k€. And the professor's role is a bit more ambiguous, but let's assume is an insignificant amount of time, at 1k€ total. That's already 16k€ for a plastic syringe pump, without materials and without the price of publishing in PLOS. 

Perhaps the costs in materials for making a syringe pump are lower than the costs of buying a ready-made solution. But this is true only if a lot of associated costs with DIY approaches are not taken into account. One could argue that after 'investing' 16k€ it is now possible to make as many pumps as desired. If the same people would build 100 pumps, at 100€ in materials, they should charge at least 260€ just to break even. Which is not far from a commercially available solution. However, what I just depicted is not a real case. These pumps can't be bought, they have to be made be individuals in their own labs. Without previous experience in electronics and 3D printing, making a reliable pump would take weeks, adding to the costs, albeit this time distributed among many researchers and institutions.  

Therefore, defining *costs* of open-hardware tools as those derived only from materials is a skewed metric compared to a context in which salaries and time must be taken into account. And it risks losing most of the opportunities associated with developing new tools and the open nature of the project. Focusing on the cheap is a race to the bottom. If someone artificially generates lower prices, it forces the competition to do the same, etc. In the end it will only survive the one that has the highest amount of money or the real lower costs. I don't think academic-based products should focus on this behavior alone, but instead should focus on **creating value**. 

## The problem to solve
A common framework to developing business plans starts by identifying a problem that can be solved with our product. In this context, a product is intended in the broadest sense as something delivered in exchange for money. Open-hardware is, in itself, not different to any other product. The only way a business can self-sustain is if someone else is willing to pay for what we sell. 

Many projects are hard to encompass in the problem/solution paradigm. Take, for example, a book. Harry Potter or any other novel do not address a problem, but they can be incredible money generators. Another perspective is to think about **value** delivered. Enjoyment, having fun, learning something new, are all things a book can deliver, and the reason why most people decide to buy them: because they understand the value they'll get in return. 

With this optic, we can think that a possible problem a researcher has is that some tools are too expensive. Therefore, having lower-quality, cheaper alternatives is a valid way of delivering value to that person. Bear in mind that in this train of thought, it does not matter whether the tool is open or not. However, the problem can also be specific to a domain, especially with researchers. Scientists face problems every single day, but rarely those problems are identified as business propositions (and in my opinion, rightly so.) Whenever a scientist solves a problem in their lab, it is possible to assume that another one would be interested in the same solution. It is as simple as that: if you can sell the solution, then you have a business proposition. 

This happens with many physicists and engineers who build tools that are simply not available in the market. Some of this tools can be interesting to people who have not the skills to build them themselves. This is exactly what we are doing at [[Dispertech]], for example, and at many other companies that were built as the product of [[Technology Transfer]] from universities and research institutes. Bear in mind that most of these companies are built on restrictive intellectual property (i.e. patents) that are held by the original owner, such as a university, and licensed to the company. 

Interestingly, there is nothing inherent to open or non-open hardware that changes the approach proposed here. If there is no problem being solved, or if there is no value being delivered, there will be hardly any possible business opportunity. 

## The added value
Another very important factor to take into account is the value that a product delivers. This is very different from the price of it. To a scientist, for example, if we tell them that with our device they'll be able to generate data worthy of a Science or Nature paper, they'll be able to immediately see the value we bring on to the table. 

The value may stem from friendlier interfaces, better design, more accuracy. People's perception of value over time changes and is not universal. And this is one of the aspects in which being *open* or contribute to open projects can make a difference in the perception people has of our own projects.

There is a paradigmatic example of how value can be perceived differently with respect to the same product: the Arduino boards and software. Both the schematics for the electronics and the software to program them are freely distributed. For someone working in a factory this is a game changer. Proprietary electronics are inherently risky, because if a manufacturer discontinuous them or goes out of business every tool build on them will be susceptible to immediate obsolescence. 

Even if Arduino goes out of business, there are already other companies making copies. The resilience is build by the non-exclusivity of the manufacturing rights. This, from an industrialist perspective is a high added value to a relatively simple tool. Keep reading, because what I just mentioned is true only on the surface, and I will revisit this exact same idea later on. 

On the other hand, if we think about individuals who use an Arduino to build art installations, learn electronics, or even for universities that use them for teaching, the open nature of the devices makes no difference at all. I have been using arduinos for 10 years already and have not looked at the schematics of the boards, not even a single time. The value that Arduino added, in my case and in many other users like me, was a very low entry barrier and a big community. 

The low entry barrier was key. You can have an LED blinking in less than an hour, you can control stepper motors in about a day. By the end of the month you can be controlling a water pump and heater with a relay and a pt100 in order to have a temperature-stabilized sample chamber in your microscope. And this, without even knowing what a relay nor a pt100 were when you started (personal story). In part this low entry barrier is by design, in part it is because of the community around the boards. 

There are so many projects documented online, that it is easy to find one that more or less resembles what you are trying to do and build on it. It is important to stress that this is not related to the open-hardware nature of the project. **Raspberry Pi's**, for example, also have an extended community. Although they run open-source software, the boards themselves **are not open-hardware**. The fact that most people don't know this, points to the little value being 'open' adds for *some* consumers.

## The value chain
The tools to which we have access are becoming more and more complex. This means more components, more suppliers for those components. Let's think about a 3D printer, for example, because they are one of the epitomes of successful open-hardware companies (like Prusa). 

Each printer requires some electronics, which we assume could be based on an Arduino. They require at least 3 motors (one for each axis) plus a motor for extruding the filament. They also require threaded rods, and some metal parts for the housing. And, of course, to make something with a printer we need a filament. 

This means that every printer in the market will generate demand for an Arduino, motors and continuous supply of filament. It seems that it is in the best interest of companies producing these goods that 3D printing becomes a successful technique. This is what I refer to as the value chain. We can think of situations like BASF financing Prusa's developments because it will drive the sales of their own polymers. 

But this also happens with the Arduino. The most common models are based on ATmel chips, which are not open-hardware. If ATmel goes out of business, the industrialists we discussed earlier, those that chose an open alternative for their electronics, will be in the same problems they would have been choosing proprietary solutions. In the end, they chose a proprietary solution, just that buried under two layers of openness. 

And this is something most people fail to see when discussing open-source software. Software must run somewhere. It is in Intel's, AMD's, and ARM's best interests to support software that runs on their hardware. Whatever one of them makes to improve the Linux Kernel, for example, will be inherited by the others. This dynamic of direct collaboration among competitors is, to my knowledge, very poorly studied. Most people stay at the superficial, perhaps romanticized, view of what open-source is and does (see, for example: [[the role of money in open source]]). 

Open-hardware projects (but this is valid for any other project) can be a link in a larger chain. There could be a an added value in doing something, even if not economically profitable, that drives an increase of demand of something else. With software, Android is a clear example: the free operating system drives the demand for Google services such as maps, the app store, data storage. For hardware, I think there are not big enough examples yet. 

## The commercial strategy
A successful business plan is validated once there is a valid commercial strategy. It is nothing more than knowing how to generate revenue based on the activities the company performs. In this regard, software and hardware are extremely different. Not all what can be learned from software can be translated directly into hardware, even if their *openness* is equivalent. 

The biggest difference is that software has a virtual [[marginal cost]] of zero both for producers and consumers. Once a developer puts a program to download from the internet, it does not matter if one or a million people get it. There is no extra cost (or if there is, it is almost zero) associated with each new user. From the user perspective, downloading software has no cost in itself, since it is supposed to run out of the box. 

These ideas apply both for paid and for free software. Bear in mind that I make the distinction here, because open-source does not require to be free, nor the other way around. The idea of seeing software as a product started to be washed away, and that forced many companies to build *services* around it. Open-source projects already knew how to do it, because they couldn't charge for the software. Red-Hat and Open Suse, for example, they offer services around critical software, such as the one running on servers. 

Consumer software such as Microsoft Office, or Photoshop became services by adding some cloud capabilities in order to justify periodic renewal. Professional software is now released under time-bound licenses, such is the case of Comsol, Autodesk Inventor, and many others. This is a shift not only on business model and consumer preferences but also in value perception. 

Hardware, on the other hand, is extremely different. The fixed costs of serial production usually scale linearly with the number of items produced. Bringing costs downs can be achieved by scaling the processes to many units simultaneously. On the other hand, sharing building instructions to users shifts the cost of manufacturing away from the producer, but it is not zero. Almost no one (except Ikea) factor the time it takes to mount a wardrobe when judging the price. And this applies for hardware that must be built and assembled by users, be it open or not. 

### Selling a product
When it comes to hardware, selling a physical product seems the straightforward thing to do. If you can build something that someone else wants, why not just selling it. One can think about pricing, and how to set up the legal construct to be able to sell, but those are minor details. If someone is willing to buy, you should not delay in satisfying that person's desires. 

Of course, this story is not that straightforward. The normal doubt with open-hardware is how can we prevent others from copying what we do. The reality is that as soon as one decides to go the open-hardware route is because they *want* to be copied and built upon. Being open and fearful of copies is an oxymoron. The only way of someone improving on our product is by first copying it. 

For anyone who is willing to go the hardware route, there should never be a doubt in their minds that selling a product is always a viable source of income. Of course, products can be of various qualities, and this is the point where most hardware projects fail. Open-hardware when is not intended as a *product* but only as a mere scientific endeavor, allows some rough edges, functional problems, unfinished touches. We can tolerate the door of an Ikea wardrobe to be tilted because we built it ourselves. We wouldn't tolerate it from a designer piece of furniture. 

With hardware is the same. Expectations change when there is a monetary exchange involved. However, many early adopters would be happy to help you iron out those defects in exchange for a tool nobody else has. If you have a new coverslip holder that allows for faster exchanges of samples, it will not matter to early adopters if it looks ugly. You'll have time to hire a proper designer and explore other manufacturing routes down the line. 

The other problem with hardware products, especially those rooted in scientific work, is that they can be expensive to make. A syringe pump can cost in the order of hundreds of euro plus some materials, which can easily be covered by a single person working in a lab. A microscope, on the other hand, can cost hundreds of thousands of euros in components, which puts the risks at a different level. This opens the questions about how to get the money to produce the first one (or the first batch). I'll come back to this later. 

### Offer a service
When it comes to business plans and models, it is important to note that nothing is off the table. But things must be considered and quantified appropriately. It is possible to offer a service associated with open hardware, in the same way Red Hat offers a service associated to open source (see: [[Selling open-hardware services]]). 

However, with the idea of generating a business that allows to maintain the core activities that generated the business, it is important to think what the core is. If the business starts from a piece of hardware developed elsewhere and does not consider the design and engineering process as its core activity, then it seems reasonable to offer services associated with that equipment. 

Services can range from doing custom design for users, support agreements, or even training. They can also be measurement-on-demand services, where scientists outsource measurements when they don't have the capacity in-house (see: [[Outsourcing experiments with open hardware tools]]). Although this is not related specifically to open-hardware itself, being part of the open-hardware community can be the vouching needed to gain trust. 

However, if the business core is making hardware, services alone will hardly cover the costs involved. Pitching services to hardware companies, I think, stems from the myopia that some successful open-source software generated. Hardware is not software, and the non-zero marginal cost is crucial to understanding what can be done.

Services must never be abandoned, though. It is always valid to have extra revenue streams open, such as those of consulting, custom manufacturing, or by offering software as a service. There are many use cases where customers would prefer someone else to handle data storage and analysis, for example. 

### Risks of Open Hardware when building a business

And this is a topic that can open many different discussions, especially regarding protection of intellectual property. Although the sentence is immediately understood as having a patent, it is not always the case. 

Patents create an artificial scarcity in a specific market, because only one actor will have the right the produce a given object. This helps drive prices up which in principle should offset the costs of development, and the risk taken in order to develop the solution. Patents, on the other hand, are expensive, hard to enforce, expire, and are public. All concerns which are not minor for many companies, big and small. There is an interesting story with how Phillips protected its intellectual property by not outsourcing key manufacturing elements (see: [[How Phillips protected IP by not outsourcing key manufacturing components]]).


Business models that revolve around patented inventions can benefit from an artificial monopoly for some years. This scenario is easy to understand for everybody, including funding agencies (in case of public financing) and of private investors. They analyze risks and benefits, unfair advantages, and intellectual property exclusivity is clear. 

When it comes to open hardware, even though the end goal can be exactly the same, it will become harder to pitch the idea to an investor. It is not impossible, and past examples of success are always good indicators, but one must be aware of how the world works. It may change in the coming years, or it may not. However, not every project requires initial external investment. Many research-related projects already have proof of concept devices and perhaps they even validated the market by receiving requests from users. 

In those cases the risk is virtually zero, because the risk of development was already observed by scientific funding, and there is at least one customer willing to buy the product. The only remaining part of the equation is the price and the legal organization to enable the sell. But these are details relatively easy to iron out. 




The design is open, and we can copy it. But what about the motors, are they also open-hardware? The advantage with stepper motors is that their shape is standardized, so we can replace them. We can use faster, slower, other brands, so no problems there. And the filaments? Most filaments are not open-sourced. It is even fair to say that, in fact, almost no filament is open. 



However, many open hardware projects rely on 3D printing and never consider going to mass production or moving away from plastics. In part this is because 3D printers are cheap and the filament used is normally inexpensive. In part this is because the skills required to produce a 3D printed part are much lower than those needed for designing a part for a CNC machine. 



And scale is not a minor feature when thinking about electronics. [[Arduino]] is a paradigmatic example of open hardware. But they have a peculiarity: if I want to build my own board, the costs are going to be much higher than the costs the company has, simply because of the scale of its production. And it can even go further: since the means of producing electronics are pretty much commoditized, the only way of cutting costs is lowering quality. 

