---
source: https://blog.miguelgrinberg.com/post/the-ultimate-guide-to-error-handling-in-python
tags:
  - python
  - errors
  - exceptions
---
Handling errors in Python is still something many programmers seem to do poorly (or not at all). I have written, a long time ago, [a tutorial](https://pythonforthelab.com/blog/learning-not-to-handle-exceptions/) discussing when and how to do it, and perhaps it's time for an update. 

Two paths:
- Look Before You Leap (LBYL)
- Easier to Ask Forgiveness than Permission (EAFP)

Most likely people are very familiar with the first one (checking that everything is OK before trying to do something), but the second one could be preferred: just go ahead and handle the exception if it appears. 

- New Errors Vs Bubble Up errors
- Recoverable vs non-recoverable
	- Which can be new or bubbled up

"Catch all" exceptions for the main application, so we can deal with whatever is sent (for instance, logging the exception, gracefully closing down the program). 

Something like this:

```python
import sys

mode = os.environ.get("APP_MODE", "production")

def my_cli()
    # ...

if __name__ == '__main__':
    try:
        my_cli()
    except Exception as error:
        if mode == "development":
            raise  # in dev mode we let the app crash!
        else:
            print(f"Unexpected error: {error}")
            sys.exit(1)
```

