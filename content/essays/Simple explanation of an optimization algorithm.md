---
title: Simple explanation of an optimization algorithm
description: Companies rely on complex terms to hide their intents. Many of our daily decisions are based on algorithms, so let's debunk some myths
keywords: optimization algorithm, parameter space, explanation
topics: algorithms, optimization
epistemic: I have formal university and professional training regarding optimization problems. Attempting simplifying the topics is a new approach.
---
# Simple explanation of an optimization algorithm
Imagine you want to subscribe to a streaming service at your house. You have some options, such as Netflix, Amazon, Disney, and Youtube. How can you decide which one you want? You can start exploring the alternatives and see what they offer and what they ask in exchange. These are just examples, some things may overlap with reality but it is not the point: 

- Amazon has a pay-per-view, low subscription but you pay every time you want to watch something. Doesn't have the Netflix hot shows
- Netflix has a vast catalog, and releases hit after hit, albeit is a bit expensive
- Disney has a lot of content for kids, not found in other platforms, but doesn't have grown up content
- Youtube: It is free if you can spend almost 25% of your time viewing ads, or you can go premium. It does not have curated content like Netflix, but you still consume a lot of what is in there. 

With this information, it is very tough to decide what is the best alternative. So we need to start narrowing down based on our reality. Let's say that you don't worry about the money you spend, you just want to make the most *efficient* decision. In our case we define efficiency as the ratio enjoyment/money-spent. If you don't enjoy that much the content, and pay a lot, then it is not an efficient choice. Or the opposite. Of course, *enjoyment* is a somewhat abstract idea but it works for illustration purposes. 

We calculate the efficiency for each one of the options: Amazon has relatively good content, but it becomes expensive if you watch too much. Netflix has a flat rate and we know we enjoy the content and will watch many hours. Disney is as expensive as Netflix, and we wouldn't watch too much. We don't enjoy Youtube content as to pay for it, but 25% of our free time on ads can be associated with a very high cost, albeit not monetary. 

We can now choose the best option based on the parameter we defined: *efficiency*. In this case the algorithm requires to calculate the *enjoyment* and *cost* of each alternative, measure the ratio and get the best. It is simple to do because we framed the problem with only 4 possible providers and just two parameters. Optimization problems can have many more degrees of complexity. 

Facebook and Google, for example, are known for optimizing different parameters of their users. Facebook optimizes the time we spend on their apps, Google calculates the best ad for every person visiting a website. And it is not only massive online corporations who do this. Retailers, supermarkets, perhaps even some governments employ these ways of thinking. And also contexts that do not deal with personal data, such as logistics or manufacturing companies need to optimize their processes. 

Let's see another example using again a consumer as an example. Imagine we want to sell a product like soap. We make two packages for it, in one we write "soap", and in the other "cleaner". We put one next to the other in the supermarket and see which one people buy more. That's it, next time we can pick the word that sells the most. Another possible experiment: we write "cleaner" in red and in green, and see which one is more popular, and we can continue optimizing. 

Bear in mind that in the previous example I didn't even made explicit the optimization problem. I just assumed that if we are making soap, our goal is to sell more. When there are two or more possibilities and we have no way of judging which one will yield the best result, we can test them all. Booking is known for doing these types of experiments all the time. In the end, what they are optimizing for are guests who spend the most money and hence generate the largest commission. 

The two examples I've discussed above are offline optimization algorithms. The situations happen in the real world, without a computer involved. But it is exactly the same that happens on websites and phones. The biggest difference is the shear amount of data to which companies have access. 

## Optimization with access to user personal data
You are now visiting this website. Imagine I had something for sale, such as a book. I could wonder what can I do to increase sales. The amount of money I make for each visitor to my website is the parameter to optimize. I try to add a banner on the right column with some flashy colors, and another one on the top, that blends better with the website. And I notice that people buy more often after clicking on the one with the flashy colors. 

Note that in the previous paragraph I am giving for granted something that is not trivial at all. In order to understand which banner performs better, I should *know* who clicked on each banner, and whether they purchase the book. Next, I wonder if people who arrived to my website from Google are more likely to buy my book than people who arrived from Facebook. And I want to do this to decide whether to put advertisements on one or the other websites. Again, this means I need to collect user data to know. I find that people from Facebook are more likely to buy, so I focus on them. I try different wordings, perhaps "cheap" *performs* better than "economical". 

What I've just described is what most webmasters and marketeers do. It is just painful to do it by hand, so most people resort to digital means of collecting and analyzing the data. I focused on users arriving to my website, but if I had a larger platform such as a forum or a social network, they could already be *in* my website and I would study other parameters. And once I start looking into more and more parameters, I will feel I can make better informed decisions, which will push me to collect more and more data from my users. 

Imagine we have something like a social network. Our users spend hours on it, following links, sharing content. I can record which links each one posts, which links each one follows. I can see how long they spend looking at given photos. My revenue comes from the number of relevant advertisements I can show to each user. Therefore it would seem natural to choose it as the parameter to optimize. 

I start slowly understanding my users: how long do the stay, how many clicks they follow, what pictures they see the most. This is passive, a computer controls everything and starts finding patterns. People who click on links to news websites are more likely to engage with advertisements of financial services.  And then I can act on that information: users who stay longer click more often on the banner in the sidebar, while users who follow many links are more likely to buy after a popup message. 

That is, precisely, an [[optimization algorithm]]. I define an outcome that I want to maximize or minimize. Could be money spent, time on a platform. It can also be that I want to minimize the amount of times someone needs to contact tech support. The ways in which such algorithms can be implemented go to unimaginable extremes, and sometimes in imperceptible ways. Have you ever noticed the "This is the last room!" on Booking? It is not an innocent message, it doesn't even need to be true. 

What we should always wonder is what are platforms, services, websites, trying to optimize. Booking wants you to spend the highest amount of money possible (their commission is tied to how much you spend). However, if they show you only the most expensive hotels, you would probably got o AirBnb. Therefore, Booking needs to use all they know about their users to *convince* you to spend the most. 

## The more data the more accurate
When you are trying to optimize a given outcome, the more data you have, the better the prediction. If I am trying to optimize the throughput of a factory, the more I understand about its processes the better predictions on the outcome I can give. But it's not only the process that determines throughput. Employees also get sick, or not all of them perform at the same level. 

And here is where the morally complex part of optimization algorithms arises. Is it correct (I am not even discussing the legality) to ask for the medical records of the employees? I could use them to predict, for example, that in winter there is a higher chance of absentees, and therefore it is better to stockpile during the autumn. By the way, I could have arrived to the same conclusion just by looking at past data and not by requesting medical records. 

Of course this leads to the question regarding [[profiling users online]], and [[how can websites track you]], which are not exactly related to an optimization algorithm in itself. 