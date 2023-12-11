---
title: Dictionary Views in Python
description: How to retrieve and modify information in dictionaries. Views access the same underlying data, and thus can be used to modify dictionaries even if not explicitly
topics: Python
keywords: dictionaries, mutability, dictionary views
---
In [[Python]], [[dictionary]] views actually change their data if the underlying dictionary changes. Let's remove some keys:

```pycon
>>> data = {'a': 1, 'b': 2, 'c': 3}
>>> keys = data.keys()
>>> keys
dict_keys(['a', 'b', 'c'])
>>> del data['a']
>>> keys
dict_keys(['b', 'c'])
>>> 
```

It also works for the items:

```pycon
>>> items = data.items()
>>> items
dict_items([('b', 2), ('c', 4)])
>>> items_list = list(items)
>>> items_list
[('b', 2), ('c', 4)]
>>> data['c'] = 0
>>> items
dict_items([('b', 2), ('c', 0)])
>>> items_list
[('b', 2), ('c', 4)]
```

Note that once the ``dict_items`` object is cast into a list, it loses the reference to the data item. 

And, just out of curiosity and, as expected, it is not serializable:

```pycon
>>> with open('test.dat', 'w') as f:
...  pickle.dump(items, f)
... 
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
TypeError: cannot pickle 'dict_items' object
```