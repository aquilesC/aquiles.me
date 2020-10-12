# Comments on Digital Gardens
I believe that having the possibility of adding comments on a [[digital garden]] is the quickest way of collecting feedback from visitors. If someone wants to interact with me regarding anything I've written, it should be a few key-strokes away and not based on an external platform. 

However, comments on a garden are attached to a given status of the note. I wonder what would the impact be of this dialog that may end up being disconnected between text and comments. Perhaps if contents would fade away with time it could be a good compromise. Or fade away (slowly) with the edits of the notes. 

I miss comments on other's digital gardens, because I feel there is a big barrier for connecting with them (sending a message through Twitter does not feel the best, and I think there's always a chance of messages getting lost.) 

On the other hand, having a high activation barrier guarantees that if you reach out to someone must be for an important topic. 

## Utterances are not the way to go
I have implemented [utterances](https://www.utteranc.es) as a commenting system. However, it is not the proper way to go. Comments are stored as issues on Github, which means that:

1. Whoever is writing must be a Github user
2. I'm platform-locked with Github

While being a Github user is a reasonable requirement for purely developers' spaces, I believe a general garden should not impose such a restriction. One of the decisions of the architecture of this garden is to be platform agnostic (see: [[how i built this website]]), and being locked with Github is a contradiction.

## Plain-text comments
However, leveraging [[git as a commenting platform]] may not be a bad idea. With an intermediate service (such as utterances or [staticman](https://staticman.net/)), I could build a pure plain-text commenting system based on a repository external to the garden itself. 

