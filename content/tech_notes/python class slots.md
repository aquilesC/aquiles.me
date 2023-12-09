---
title: Using slots in your classes to prevent attribute creation at runtime
description: Quick exploration of the advantages of defining __slots__ in custom classes.
---

# What can slots do for you
The first time I heard of slots, I thought they were referring to the [[Qt]] idea of signals and slots. It turns out that [[Python]] defines its own slots and are completely unrelated to those of Qt. Let's quickly see what they can do for us:

```python
class Slot: 
	__slots__ = ['attr1', 'attr2'] 
```

```pycon
>>> s = Slot()
>>> s.attr1 = 1
>>> s.attr2 = 2
>>> s.attr3 = 3
...
AttributeError: 'Slot' object has no attribute 'attr3'
```

I think it is quite clear what slots are meant to do: they define the attributes that a class has and it prevents you from creating new attributes later on. We can keep on experimenting. Slots are used when the class is defined, therefore, we can have something like this:

```python
class Slot: 
   __slots__ = ['attr1', 'attr2'] 
   attr3 = 3 
```

```pycon
>>> s = Slot()
>>> s.attr3
3
>>> s.attr3 = 4
...
AttributeError: 'Slot' object attribute 'attr3' is read-only
```

You can mix slots and class attributes, but as expected, only those defined in the ``__slots__`` iterable are writable. 

## Why Using Slots
Using slots feels slightly *unpythonic*, it somehow removes the dynamic part that makes it so attractive for many of us. However, I found a very clear use case when you are developing code to work with instruments: 

Imagine you have a camera in which you can set the exposure time. You develop a class, and define an attribute ``exposure``. Another day, or another person, grabs your code, and while fiddling, uses ``exp_time`` instead of exposure. No error will appear since [[Python]] allows you to define attributes at runtime, but it is for sure an unwanted behavior. If you define ``__slots__``, you will be sure that mistake can't happen. This is can also be avoided if you opt for [[functional control]] instead of [[imperative control]].

Another reason to use slots is because it lowers the memory consumption of your programs. Python's objects store attributes in a dictionary, which may be memory inefficient if you are going to create a lot of objects of the same class with a limited set of attributes. A personal example: 

I was simulating [[Brownian Diffusion]] of multiple particles, each one was an object of class ``Particle``. Each particle had a limited number of attributes, but I needed to create millions of them. At the time I didn't know the slots possibility, and had to work around the limits of my computer, but I now know I could have had a much better performing program. 

## Inheritance
Inheritance with classes that define slots is an interesting pattern. Let's quickly see what I am talking about:
```python
class Slot:
	__slots__ = ['var1', 'var2']
    
class NewSlot:
	pass
```

And if we try out the ``NewSlot`` class:
```pycon
>>> s = NewSlot()
>>> s.var3 = 3
>>> s.var3
3
```
We see that it gets the dynamic attribute assignment of the normal Python objects. However, we can also do the following:
```python
class NewSlot:
	__slots__ = ['var3']
```
In which case:
```pycon
>>> s = NewSlot()
>>> s.var1 = 1
>>> s.var3 = 3
>>> s.var4 = 4
...
AttributeError: 'Slot' object has no attribute 'var4	'
```

## Why Not Using Slots
If there are reasons to use slots, there should also be reasons not to use them. First, it forces you to repeat yourself: you need to define attributes both in the ``__slots__`` and in the class. 