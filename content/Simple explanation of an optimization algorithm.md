---
title: Simple explanation of an optimization algorithm
description: Companies rely on complex terms to hide their intents. Many of our daily decisions are based on algorithms, so let's debunk some myths
---
# Simple explanation of an optimization algorithm
filed under: [[algorithms]], [[optimization]], [[optimization algorithm]]

Imagine you want to subscribe to a streaming service at your house. You have some options, such as Netflix, Amazon, Disney, Youtube. How can you decide which one you want? The easiest is by exploring the options and see what they offer and what they ask in exchange (features can overlap with reality but it is not the point): 

- Amazon has a pay-per-view, low subscription but you pay every time you want to watch something. Doesn't have the Netflix hot shows
- Netflix has a vast catalog, and releases new hit after hit, albeit is a bit expensive
- Disney has a lot of content for kids, not found in other platforms, but doesn't have grown up content
- Youtube: It is free if you can spend almost 25% of your time viewing ads, or you can go premium. It does not have curated content like Netflix, but you still consume a lot of what is in there. 

So far, it is very tough to decide. But, let's say that you don't worry about the money you spend, you just want to make the most efficient decision. In our case we define efficiency as (enjoyment)/(money spent). If you don't enjoy that much the content, and pay a lot, then it is not an efficient choice. Or the opposite. Of course, *enjoyment* is a somewhat abstract idea but it works for illustration purposes. 

We calculate the efficiency for each one of the options: Amazon has somewhat good content, but it becomes expensive if you watch too much. Netflix has a flat rate and we know we will enjoy the content a lot and will watch many hours. Disney is as expensive as Netflix, and we wouldn't watch too much. We don't enjoy Youtube content as to pay for it, but it is a backup content provider. 

So we can now choose the best option based on what we defined: *efficiency*. 

And this is what happens at many different scales, at Facebook and Google, but also at retailers, at the supermarket, perhaps even some governments employ these ways of thinking. 

Imagine you want to sell a product like soap. You make two packages for it, in one you write "soap", and in the other "cleaner". You put one next to the other in the supermarket and then see which one people buy more. That's it, next time you just pick that wording. Another experiment, you write "cleaner" in red and in green, and see which one is more popular, and so forth. 

This is a very analog [[optimization algorithm]], it happens in the real world, without a computer involved. But it is exactly the same that happens on websites and phones. The only problem is that [[communicators fail at explaining what an algorithm is]]. 

You are now visiting this website. Imagine I had something for sale, such as a book. I could wonder what can I do to increase sales. That is my parameter to optimize: the amount of money I make. Therefore I try to add a banner on the right column with some flashy colors, but that doesn't work, people don't click on it. **Wait!** this means I *know* who and how often people clicked, if not, I wouldn't be able to *optimize*. 

Next step, I wonder if people who arrived to my website from Google are more likely to buy my book than people who arrived from Facebook. Again, this means I need to [[collect user data]] to know. I find that people from Facebook are more likely to buy, so I focus on them. I need know from which groups they come, or how they share my content. 

What I have just described is what most webmasters and marketeers do. It is painful to do it by hand as I have just described. But imagine the user is not arriving to my website, they are already *in* my website. They spend hours on it, following links, sharing content. I could easily automate the process. I can start passively understanding my users: how long do the stay, how many clicks they follow. And then I can act on that information: users who stay longer click more often on the banner in the sidebar, while users who follow  many links are more likely to buy after a popup message. 

That is, precisely, an [[optimization algorithm]]. And this can be sophisticated to unimaginable extremes, and sometimes in imperceptible ways. Have you ever noticed the "This is the last room!" on Booking? It is not an innocent message, it doesn't even need to be true. 

What we should always wonder is what are platforms, services, websites, trying to optimize for. Booking wants you to spend the biggest amount of money possible (their commission is tied to how much you spend). However, if they show you only the most expensive hotels, you would probably got o AirBnb. Therefore Booking needs to use all they know about you to force you to spend the most. 

The amount of data we provide to each website with every visit (I am not even talking about huge corporations, I am talking even about websites just like this one), is huge. Data which believe me, is being shared across domains, corporations, governments. Websites can very easily tell the operating system you are on, the browser you use, your location. Your preferred language. They can record how you move the mouse on the screen, what parts of the text you select. They can even estimate what other websites you visit based on some trails left behind. 

With all the collected information, it does not take a malicious hacker to create very accurate behavior patterns that can then be used to optimize any target. It can be the time spent watching a video, number of ads clicked, intention to vote for one or another candidate. 