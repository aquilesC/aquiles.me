---
title: Comments on Digital Gardens
description: Discussion regarding whether digital gardens must include or not comments, and if so, how can they be implemented
epistemic: I couldn't find external sources discussing the role of comments on digital gardens, and whether they have any kind of impact
---
# Comments on Digital Gardens
I believe that having the possibility of adding comments on a [[digital garden]] is the quickest way of collecting feedback from visitors and increasing the value of the notes collectively. If someone wants to interact with me regarding anything I've written, it should be a few key-strokes away and not based on an external platform. 

However, comments on a garden are attached to a given status of the note. I wonder what would be the impact of this dialog that may end up being disconnected between text and comments. Perhaps if contents would fade away with time, it could be a good compromise. Or fade away (slowly) with the edits of the notes. 

I miss comments on other's digital gardens, because I feel there is a big barrier for connecting with them. Many suggest to connect through Twitter, but it does not feel the best, and I think there's always a chance of messages getting lost. On the other hand, having a high activation barrier guarantees that if you reach out to someone it must be for an important topic. 

Comments directly on pages increase the workload through moderation and maintenance. This may have a detrimental overall outcome, if we write less just to free up time to moderation, or if comments morally impact our thoughts. It is a bit early to judge the role comments can have on public gardens. 

## Distributing Comments with Webmentions
I have been exploring [[webmentions]] as a path to distribute the commenting system. With webmentions each page, anywhere on the Internet, becomes a potential source of comments to any other page. Even though this is tempting, it is also very prone to abuses (mentions can't be moderated). Giving visibility to mentions on websites automatically always has an inherent risk. Webmentions have many merits, I just don't think they are the proper tool for *comments* themselves. 

## Utterances are not the way to go
I have implemented [utterances](https://www.utteranc.es) as a commenting system. However, it is not the proper way to go. Comments are stored as issues on Github, which means that:

1. Whoever is writing must be a Github user
2. I'm platform-locked with Github

While being a Github user is a reasonable requirement for purely developers' spaces, I believe a general garden should not impose such a restriction. One of the decisions of the architecture of this garden is to be platform agnostic (see: [[how i built this website]]), and being locked with Github is a contradiction.

## Plain-text comments
However, leveraging [[git as a commenting platform]] may not be a bad idea. With an intermediate service (such as utterances or [staticman](https://staticman.net/)), I could build a pure plain-text commenting system based on a repository external to the garden itself. 

## Or Just don't Care
Even though I believe in a long-term approach by using technologies I fully own, with standards that are likely to be compatible with future technologies, comments may be just transient snippets not worth storing for the long run. [Gwern](https://www.gwern.net/About#anonymous-feedback) and I share many of the general concerns regarding how to write online for the long haul, but he actually implements Disqus. 