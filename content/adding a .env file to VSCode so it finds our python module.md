When developing a Python module with VSCode we will face the challenge of importing it within the IDE itself. This problem does not exist on PyCharm, which takes care of setting a proper development environment for us. 

In order to make our module discoverable, we must create a ``.env`` file at the root of our project and add the environment variables we need to it:

```
PYTHONPATH=/path/to/project
```

I am not sure how this is handled by VSCode (would it append it to the PYTHONPATH? Would it overwrite it?) 

VSCode is so primitive that if you open the terminal there's a chance the following command gives an empty results:

```bash
echo $PYTHONPATH;
```

while the code may find your module without problems. 