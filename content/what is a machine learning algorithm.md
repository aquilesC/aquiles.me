---
title: What is a Machine Learning Algorithm
description: We were led to believe that machine learning and artificial intelligence are topics on which we shouldn't peek. Let's debunk those myths.
---
# What is a Machine Learning Algorithm
Let's start with a classic example that most people following the machine learning path studies at the beginning. [[what are algorithms|Algorithms]] can be used to understand, for example, handwritten numbers. We take an image and a computer tells us: that is an 8. On the one hand we have the data: the image, and on the other we have the question: *what number is it?*. With the same data we could ask other questions, for example: *was this number written by a right or left-handed person?*. 

Machine learning algorithms work by ingesting a lot of data and finding the common patterns between them. All zero's are similar to a circle, eight's are like two circles, and so forth. They are also resilient to small variations in data. If you grab the image of the 8 you used earlier and remove one pixel, the algorithm will still recognize the number. You may remove 10 pixels and it will still work. 

A Machine Learning algorithm is nothing more that bringing statistics to a level most people is not used to. To identify a number, you can count the number of black pixels, you can study the shape, the amount of contiguous dark pixels. If you find a *correlation* between something you can measure and the result you were expecting, then it is reasonable to extrapolate. For example: 8's use a lot of ink, 1's use very little. 4's have sharp edges and 0's have no sharp edges. 

With these very simple measurements and their combinations, we can explore all the images of numbers we already have, and let a computer program find the best way to analyze the data and give us the result we wanted. Perhaps someone writes the 8 a bit smaller and takes less ink, but has fewer sharp edges than a 1 and many more than a 4. The program will tell us there is an 85% change this number is an 8, 10% it is a 1, and 5% it is a 0. It is up to us to interpret those results. 

The only way this algorithms can be accurate is by having massive databases of [[labeled information]]. They need to compare a huge amount of 1's written by different people in order to identify what specific patterns allow you to say with great confidence that it is a 1 and not a 2. And it must be *labeled*, the program must know beforehand whether it is a 1 or not. This is what is called "training an algorithm". Once you are confident enough with the process, the algorithm can start identifying numbers it never saw before. 

Labeling data is time consuming, because it involves a human making a decision. Therefore there is a lot of value regarding annotated datasets. Now probably you understand why Google asks you "is this a truck?" in their ReCaptcha system. Facebook asks "Is this your friend?" on the images you post. They are both amassing a gigantic amount of labeled data that can later be used to perfect their own algorithms. 

Going back to the question posed earlier, "is this number written by a left or a right handed person?" may be harder to answer but there is a fair chance of success. And what about other questions such as: Is this number written by a liberal or a conservative? What is the sexual orientation? The general answer to this is *we don't know*. 

Perhaps today it is not possible to identify the sexual orientation of a person based on how they write the numbers. There is, however, a great chance that this is only a transient condition based on the lack of available data. We normally do not know the political or sexual orientation of who wrote the number on a piece of paper, at least not us.

But if numbers allow us to already think about far fetched possibilities, imagine what else is possible if you had access to the proper data. The mail office can scan each envelope and know *who* wrote each number. The medical services know whether you are sick or healthy. Those two pieces of information, if put together, transform the idea of predicting whether you are sick based on your handwriting from a bogus idea to a conceivable one. 

That is why [[personal data collection, what is it and where it starts]]. 