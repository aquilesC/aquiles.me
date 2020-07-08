---
title: Using the Python walrus operator
description: assign and evaluate expression in one go
---
# The Python Walrus Operator
A pattern I often encounter is iterating through a range of values, computing an operation on those values and assigning them to a variable. For example, imagine you are saving files and you don't want to over write them, I create an index and keep increasing it until I get a filename which is available. Something like this:

```python
filename = 'data_{}.dat'
i = 0
while os.path.exists(filename.format(i)):
	i+=1
    
file = filename.format(i)
data.save(file)
```

[[Python]] (I believe 3.8) has introduced a new operator called ``Walrus``, which greatly simplifies the code above:

```python
i = 0
filename = 'data_{}.dat'
while os.path.exists(file := filename.format(i)):
	i += 1
    
data.save(file)
```

The **walrus** operator allows to assign variables to expressions within another expression. In this case, we assigned ``filename.format(i)`` to ``file`` and check its existence. 

If you want to see a real-world example of when I would use the walrus, check [this few lines of code](https://github.com/aquilesC/experimentor/blob/9d3320694223a1081c69a4081bed3aeb2ae6b2cd/experimentor/models/experiments/base_experiment.py#L222) or [these ones](https://github.com/PFTL/py4lab/blob/393c945c83125f92263d2c30a25a321684519ebc/ch_09/PythonForTheLab/Model/experiment.py#L83), in which I search for an appropriate filename. 

**A caveat**: parenthesis play an important role in order resolution:

```python
var = [1, 2, 3, 4]
if n := len(var) > 3:
    print(n)
```

Outputs ``True``, while:

```python
var = [1, 2, 3, 4]
if (n := len(var)) > 3:
    print(n)
```

Outputs ``4``. In the example with the filename it was not an issue because I was using already another function with the output of the walrus. 

I am still hesitant about adding this syntax, since it only works on latest versions of Python which are still not the default on [[Linux]]. 