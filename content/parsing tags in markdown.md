[[Luhmann method]] suggests using tags for categorizing entries. I am not sure how I feel about it, but for sure it can help re-discover new notes based on a topic, following an apparently random jumping process. Therefore, to be able to include tags into notes without a fixed structure, I wanted to parse the markdown file and identify strings that start with a ``#``. The regex was inspired by the parses of [sublimeless](https://github.com/renerocksai/sublimeless_zk/blob/master/src/libzk2setevi/zkutils.py):

```python
RE_TAGS = r"(#+([^#\s.,\/!$%\^&\*;{}\[\]'\"=`~()<>”\\]|:[a-zA-Z0-9])+)"
```

The tricky part was to add it as an extension to the markdown parser in [[python]] so that it would not only transform the content, but it would also store it for using in the main script. I followed a similar approach to that defined for the wikilinks:

First, define an ``InlineProcessor`` that will happen after the code has been standardized. Fortunately, the extensions API is well [documented](https://python-markdown.github.io/extensions/api/), but I still had to go [to the code](https://github.com/Python-Markdown/markdown/blob/56b03b21f50d2b28b7ab87df7d8015e1f1b62184/markdown/inlinepatterns.py#L90) to find out what priority to give to it. 

In my case, when I define the ``TagExtension``, I use:

```python
md.inlinePatterns.register(TagInlineProcessor(TagInlineProcessor.RE_TAGS, md), 'tags', 65)
```

The **65** means it will happen right after the ``SimpleTextInlineProcessor`` and the ``AsteriskProcessor``, but I am not sure this is the best place. 