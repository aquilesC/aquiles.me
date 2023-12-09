# Code Before you Think
RealPython[^1] released a tutorial with examples of questions for people to prepare for job interviews. I was puzzled by the first example:

> Write a function, add_it_up(), that takes a single integer as input
    and returns the sum of the integers from zero to the input parameter.
    
If we wouldn't be talking about [[Python]], perhaps you would be tempted at grabbing a piece of paper, a pen, and solve the problem. This is, after all, something that is normally covered explicitly in high-school math and, if not, it is something that any adult should be able to solve by reflecting. (If you actually wonder about what the solution[^2] is):

```
add_it_up(n) = (first+last)*n/2
```

However, on the website they go straight at throwing the computer to the problem. They start with a ``while`` loop and they argue this does not show how good your Python knowledge is and you should do something like  ``sum(range(n+1))``. 

So, I wondered, how come that even if 6 people were involved in the development of the tutorial, not even one of them came up with a solution that, basically, does not involve Python, works in any language and can't be more efficient. 

I think what happened on the article is a perfect example of what is happening in the "developers' world". Most jobs are not for people who think, but just for monkeys that type. If you just follow some devs on Twitter, you will notice that they describe their days as bug-solving. There is no creativity, it is having the certainty of being able to overcome whatever problem appears. 

There is nothing wrong about it, but it relates to [[novelty is not innovation]].


[^1]: https://realpython.com/python-practice-problems/
[^2]: There are many different ways of reaching this solution, the one I like the most is thinking that adding all the numbers is symmetric, the first and last add the same than the second and first to last, etc. Therefore, the total sum will be the first and last times half the number of elements 