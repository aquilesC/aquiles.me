---
title: Simple explanation of an optimization algorithm
description: Companies rely on complex terms to hide their intents. Many of our daily decisions are based on algorithms, so let's debunk some myths
keywords: optimization algorithm, parameter space, explanation
topics: algorithms, optimization
epistemic: I have formal university and professional training regarding optimization problems. Attempting simplifying the topics is a new approach.
---
# Simple explanation of an optimization algorithm
Imagine you want to subscribe to a streaming service at your house. You have some options, such as Netflix, Amazon, Disney, Youtube How can you decide which one you want? You can start exploring the options and see what they offer and what they ask in exchange (features can overlap with reality but it is not the point): 

- Amazon has a pay-per-view, low subscription but you pay every time you want to watch something. Doesn't have the Netflix hot shows
- Netflix has a vast catalog, and releases new hit after hit, albeit is a bit expensive
- Disney has a lot of content for kids, not found in other platforms, but doesn't have grown up content
- Youtube: It is free if you can spend almost 25% of your time viewing ads, or you can go premium. It does not have curated content like Netflix, but you still consume a lot of what is in there. 

So far, it is very tough to decide. But, let's say that you don't worry about the money you spend, you just want to make the most *efficient* decision. In our case we define efficiency as enjoyment/money-spent. If you don't enjoy that much the content, and pay a lot, then it is not an efficient choice. Or the opposite. Of course, *enjoyment* is a somewhat abstract idea but it works for illustration purposes. 

We calculate the efficiency for each one of the options: Amazon has relatively good content, but it becomes expensive if you watch too much. Netflix has a flat rate and we know we enjoy the content and will watch many hours. Disney is as expensive as Netflix, and we wouldn't watch too much. We don't enjoy Youtube content as to pay for it, but it is a backup content provider. 

So we can now choose the best option based on what we defined: *efficiency*. 

And this is what happens at many different scales under very different assumptions. Sure Facebook and Google are known for optimizing different parameters of their users, but also retailers, supermarkets, perhaps even some governments employ these ways of thinking. 

Imagine you want to sell a product like soap. You make two packages for it, in one you write "soap", and in the other "cleaner". You put one next to the other in the supermarket and then see which one people buy more. That's it, next time you just pick that wording. Another experiment, you write "cleaner" in red and in green, and see which one is more popular, and so forth. 

What I explained is an offline [[optimization algorithm]], it happens in the real world, without a computer involved. But it is exactly the same that happens on websites and phones. The only problem is that [[what are algorithms|communicators fail at explaining what an algorithm is]]. 

## Optimization when you have access to user data
You are now visiting this website. Imagine I had something for sale, such as a book. I could wonder what can I do to increase sales. The amount of money I make for each visitor to my website is the parameter to optimize. I try to add a banner on the right column with some flashy colors, and another one on the top, that blends better with the website. And I notice that people buy more often after clicking on the one with the flashy colors. 

**Wait!** this means I *know* who and how often people clicked on each banner, and whether they purchase or not a book. Next step, I wonder if people who arrived to my website from Google are more likely to buy my book than people who arrived from Facebook. Again, this means I need to [[collect user data]] to know. I find that people from Facebook are more likely to buy, so I focus on them. I try different wordings, perhaps "cheap" *performs* better than "economical". 

What I have just described is what most webmasters and marketeers do. It is just painful to do it by hand, so most people resort to digital means of collecting and analyzing the data. I focused on users arriving to my website, but they could already be *in* my website. They spend hours on it, following links, sharing content. I could easily automate data collection the process. I can start passively understanding my users: how long do the stay, how many clicks they follow. And then I can act on that information: users who stay longer click more often on the banner in the sidebar, while users who follow many links are more likely to buy after a popup message. 

That is, precisely, an [[optimization algorithm]]. I define an outcome that I want to maximize or minimize. Could be money spent, time on a platform. It can also be that I want to minimize the amount of times someone needs to contact tech support. The ways in which such algorithms can be implemented go to unimaginable extremes, and sometimes in imperceptible ways. Have you ever noticed the "This is the last room!" on Booking? It is not an innocent message, it doesn't even need to be true. 

What we should always wonder is what are platforms, services, websites, trying to optimize. Booking wants you to spend the highest amount of money possible (their commission is tied to how much you spend). However, if they show you only the most expensive hotels, you would probably got o AirBnb. Therefore, Booking needs to use all they know about their users to *convince* you to spend the most. 

## The more data the more accurate
When you are trying to optimize a given outcome, the more data you have, the better the prediction. If I am trying to optimize the throughput of a factory, the more I understand about its processes the better predictions on the outcome I can give. But it's not only the process that determines throughput. Employees also get sick, or not all of them perform at the same level. 

And here is where the morally complex part of optimization algorithms arises. Is it correct (I am not even discussing the legality) to ask for the medical records of the employees? I could use them to predict, for example, that in winter there is a higher chance of absentees, and therefore it is better to stockpile during the autumn. By the way, I could have arrived to the same conclusion just by looking at past data and not by requesting medical records. 

Of course this leads to the question regarding [[profiling users online]], and [[how can websites track you]], which are not exactly related to an optimization algorithm in itself. 