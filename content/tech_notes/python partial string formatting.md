---
title: Formatting strings in two steps with Python
description: How to format a string that contains more than one set of {} in a two (or more) step process
---

# Formatting Strings in Two (or more Steps)
This note may be a bit of an extreme case of how to format [[strings]] with [[Python]], but nonetheless it is useful to understand some inner workings of string formatting. 

Because of some projects at work, I needed to be able to handle string formatting in two steps. Let's say, I have a string like this:

```python
var = '{val1}_{val2}.dat'
```

The thing is that I want to format the string using only ``val1`` and leaving the part concerning ``val2`` intact, because that will be passed down to some other code. Basically, I want this:

```python
var.format(val1=123)
```

to return this:
```python
'123_{val2}.dat'
```

But if we try, we get a ``KeyError`` because ``val2`` is missing. This means that [[Python]] is using a dictionary to handle the formatting, and if we could somehow get in between, we can actually skip the error and return the *unformatted* part of the string. 

It takes a bit of black-magic googling, but the answer is actually in the [docs](https://docs.python.org/3/library/stdtypes.html#str.format_map). We can use a custom formatter, we just need to make look like a [[dictionary]] that handles the missing key appropriately:

```python
class FormatDict(dict):
    def __missing__(self, key):
        return '{' + str(key) + '}'
```

If we try again, now it works and we get the expected outcome:
```pycon
>>> var.format_map(FormatDict(val1=123))
'123_{val2}.dat'
```

However, we can go one step further. What happens if we actually specify a format for ``val2``, let's say:

```pycon
>>> var = '{val1}_{val2:04}.dat'
>>> var.format_map(FormatDict(val1=123))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: '=' alignment not allowed in string format specifier
```

So, we need to work around to get it to work. A good starting point to look for answers is the [PEP 3101](https://www.python.org/dev/peps/pep-3101/#controlling-formatting-on-a-per-type-basis) where the ``.format`` notation is introduced. Note that, under the hood, each argument is passed to a formatter class, and the ``__format__`` method will be called. So, we want to define our own method only for the keys that are missing:

```python
class FormatPlaceholder:
    def __init__(self, key):
        self.key = key
    
    def __format__(self, spec):
        result = self.key
        if spec:
            result += ":" + spec
        return "{" + result + "}"
        
class FormatDict(dict):
    def __missing__(self, key):
        return FormatPlaceholder(key)
```

In this case, if the key is missing, it get's a ``FormatPlaceholder``, gets instantiated with the missing ``key`` and its ``__format__`` method is called. Then, we simply append the specification to the result in case it is provided. Now we get it to work:

```pycon
>>> var.format_map(FormatDict(val1=123))
'123_{val2:04}.dat'
```

If you want to see this pattern in the real-world: check [my project](https://github.com/aquilesC/experimentor/blob/9d3320694223a1081c69a4081bed3aeb2ae6b2cd/experimentor/models/experiments/base_experiment.py#L54) one [one use](https://github.com/aquilesC/DisperPy/blob/3589f36586261ac9f818f76ae47202b0e78e87a1/dispertech/models/experiment/dispertech/experiment.py#L108). To see how the ``__format__`` method can be used on custom objects, you can check, for example, what [Pint](https://github.com/hgrecco/pint/blob/132a9fd5ef4737d82527354b26cce6859d631ab3/pint/unit.py#L75) does to format quantities including their units. 