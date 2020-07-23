---
title: OpenAI release of GPT-3
description: Amazing engineering achievement, but overhyped by media and people
---
# OpenAI released GPT-3 
I have seen a lot of articles about **GPT-3**, a new generative pre-training transformer[^1]. It is, fundamentally, an unsupervised learning algorithm that was trained on a gigantic corpus[^2] of 570GB of compressed plain text. Includes all of [[Wikipedia]] in English, corpora of books and something called the *[[CommonCrawl]]*. 

The interesting thing is that [[OpenAI]] released the tool as an [[API]] that *some* people could use to build upon. Very quickly, people came up with tools that could build websites based on simple descriptions such as "A website with a search bar, the Google logo on Top and two buttons below, one saying search and the other I'm feeling lucky". 

The true advantage of GPT-3 comes from not being trained for a specific task as many previous [[artificial intelligence]] models. In their paper they claim that regardless of this, the model already performs as good as models trained for specific objectives. You may think about translating from a language to another, or generating paragraphs of new text as specific tasks. 

To my understanding, what makes GPT-3 very powerful is that the parameters where optimized using a gigantic dataset, but it can also be trained on specific (non open) datasets. For example, we could feed all the customer service chats to make it domain-specific, but using the accumulated knowledge. In this way, a company could build much more intelligent chatbots for customer service. 

Of course, news about [[machine learning]] and such always brought up the same problems regarding fears of [[losing jobs in the hands of artificial intelligence]]. A lot of people[^3] are still struggling to understand the long-term picture. 

[^1] https://openai.com/blog/better-language-models/
[^2] https://arxiv.org/pdf/2005.14165.pdf
[^3] https://nesslabs.com/gpt-3-future-productivity?utm_source=Maker+Mind&utm_campaign=a8df5142e4-MAKER_MIND_053&utm_medium=email&utm_term=0_d634852cd6-a8df5142e4-130742116&mc_cid=a8df5142e4&mc_eid=22b39e4ac7