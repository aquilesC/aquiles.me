When using the ThreadPoolExecutor of concurrent.futures, it is hard to know how many elements are waiting in the queue to be processed. The best I could gather is [^1] :

```python
executor._work_queue
```
That is the queue where the ``WorkItems`` are stored. 

[^1]: https://github.com/python/cpython/blob/b5789a7419655f66692fab463320048bd2290e81/Lib/concurrent/futures/thread.py#L187