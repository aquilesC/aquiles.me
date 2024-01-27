# My Wedding App
Since we already had a [[My Wedding Website|Wedding Website]], going all-in and [developing an App](https://github.com/aquilesC/cami-y-aqui-app) seemed appropriate. It's [[open source]], so you are free to go ahead and check it out! 

## Motivation
Having an app was completely unnecessary, but I wanted to learn the full cycle, from the back-end development to the release on the App Store. Originally, the idea was to use the app as playful option during the event. For example, it could have been a way to get people to interact with each other. But these projects were much more ambitious than what time allowed. 

## Key Features
The App reflects the core ideas of the website and it synchronizes with it: 

- You need a code to log-in or you could request one. 
- There is an RSVP function that allows you to add extra guests, specify dietary restrictions, etc.
- There is information about the venue and transport to it
- We can send notifications to the users in case of important news
- You can see a random selection of pictures submitted by us or other guests

## Technology Choices
For the App, I used [[React Native]] and [[Expo]]. I based it on the [Kitchen Sink App](https://nativebase.io/kitchen-sink-app). I found the approach to building a User Interface very intuitive, to the point of trying to migrate some of the concepts to the programs I make in Python. 

Although the app could have been released for iPhone and Android phones, the review process of Apple is so cumbersome and expensive, that we opted to release it only for Android. 

It was a very interesting process debugging the App. The communication with the backend was not trivial, especially given my lack of knowledge of [[JavaScript]], it's promises and it's incredibly complex concatenation of functions and curly-brackets. 

