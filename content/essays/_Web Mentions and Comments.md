---
title: Web Mentions and comments for websites
description: Is it worth implementing a commenting system and webmentions on blogs?
tags:
  - Webmention
  - comments
  - websites
  - blogs
  - interaction
status: draft
template: essay.html
---
I think there are different dimensions to how [[webmentions]] or [[comments]] can add value to the content of an article. They can also come at a cost, which means we should balance them. Both comments and web mentions can be implemented in different ways, to generate different outcomes. Each website owner should judge what they want to achieve.    
  
Webmentions are great if you are building networked content. It allows me to 'mention' you on an article and you will get a ping. It is a very efficient way of keeping an eye on what people are using my content for, and on the other side, it is a good way of grabbing the creator's attention.    
  
An extra feature would be to publish the mentions on each page. It is what [SWYX](https://www.swyx.io/) does, for example. However, the system can quickly become a spamming nightmare, and the website could be prone to showing links to undesired content or, even worse, it could directly display that content.
  
An intermediate approach would be to display webmentions only from **trusted domains**. This can work out great when you are in a community, a company, etc. and people write about similar topics and link each other 'often'. In this way you can have decentralized blogs (each developer in a company can keep her own space). If you change jobs, or your interests, the content is still yours and you can still reference people outside of your immediate circle.    
  
We must bear in mind that the ideas behind WebMentions are mostly of decentralization and content ownership. If we check the things [Aaron Parecky](https://aaronparecki.com/) does, we'll see what are the motivations behind. You can use the same structure to confirm attendance to events, ping locations, etc.   
  
However, the networked approach to content is very tough to get right beyond a simple 'comment-type' implementation. I played with the idea of using [[transclusion]] for webmentions, but it quickly becomes a nightmare because of the points above. This approach is similar to what a [[federated wiki]] would look like, but an HTML specification instead of pure shear will. 

Right now, I have implemented webmentions for this website (see: [[how i built this website]]) but I don't display them, I consume them with an [[RSS feed]] so I can keep an eye on who is building and discussing what I write. I must stress, however, that not a lot of websites implement webmentions. I believe not even Wordpress does so out of the box.
  
Regarding comments (see: [[comments on digital gardens]]), I do like them as a way of quickly communicating with me, based on the way I use comments on other websites. For example, if I spot an error I am much more likely to drop a comment than to track down the author and send an e-mail. And this has been the case for my other websites as well. However, regarding the idea of adding value to the articles themselves, I am hesitant.  

Are discussions meant to happen in threads? In chronological order? What about comments left on articles written more than a year ago? If a comment is left regarding an older version of the published article, would you leave the comment up? I have decided to purge the comments from my website once in a while. Many of my articles are not static, and I do use the comments to improve the content, which makes the comment pointless.   
  
For technical blogs, comments are, sometimes, a place to ask for help. Is that what you are expecting them to be? I got tired of people dropping messages like "I get this error, how can I solve it?" on a completely unrelated article. All those messages are removed as fast as I can, gone from my mental backlog of things I could reply to. But they may be very valuable if you can, for example, solve the problem for a fee, or use them as sources of inspiration for other articles.   

## Conclusions
Web mentions and comments are not mutually exclusive. They serve different purposes and they come at different costs for the website owner. I like keeping an eye on web mentions but do not display them on my website. With this I desinsentivize spammers but can still keep an eye on people building on my content and use that knowledge.   
  
Comments are a useful way of reaching out to the author of the article, but I personally think they can quickly become dead weight. I purge comments once in a while. They are very good at letting people point out errors, and may be a good source of inspiration for new articles. However, whether the discussion adds value to the article or not, is hard to judge. I, personally, don't think they do.