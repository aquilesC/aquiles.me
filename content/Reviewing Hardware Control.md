# Reviewing Hardware Control
I am reviewing [Hardware-Control](https://bitbucket.org/berkeleylab/hardware-control/src/1.0.0/) for a submission to [JOSS](https://github.com/openjournals/joss-reviews/issues/2688). 

Tags: [[Open Source]], [[Hardware Control]], [[Instrumentation]]

## Paper
- [ ] Typos: 
    - [ ] Task, such as data logging or parameter scans (should be Task**s**)
    - [ ] often needs (should be nee**d**)
    - [ ] Especially the control through python during execution make (should be make**s**)
    - [ ] there are others typos, also throughout the documentation.
- [ ] "uses Qt, a GUI framework" (Riverbank Computing Limited,2020)
    - [ ] Qt is not from Riverbank Computer, PyQt is. 
- [ ] LabView (...) they often do provide a wide range of instrument drivers. 
		This is spiritually not correct. Hardware manufacturers provide drivers written for (or in) LabView. 
- [ ] It could have been useful to state what is different about this program that is not found in others (also Python, Matlab, or Java-based, etc.)
- [ ]  "because it solves the broadly applicable problem of instrument automation"
		This is an oversell of the package. It does not solve *the problem*, it only shows one way of working
- [ ] The authors lack acknowledging all the other instrumentation software available. Notably projects like PyMeasure, LantzProject, pyacq, but also uManager for instance. 
- [ ] There is no discussion on why they implemented their own solution instead of contributing to ScopeFoundry, for example.
- [ ] The paper builds on PyQtGraph, matplotlib, and numpy, but yet, it only cites Qt
- [ ] The paper misses the fact that they only implement a strict way of working with message-based devices, and no explicit way of working with other type of instruments (NI cards are a paradigmatic example). 
- [ ] The need for custom messages could have been explicit, because this is a decision that goes against the SCPI standard, for example. Some discussion on scalability and real reusability of the program could have been nice (CPU usage, memory consumption, max number of simultaneous devices). 
- [ ] The program is structured in a way that it makes it very hard to work with 1D or 2D sensors (like a camera or a 1D array), since it all goes around the idea of reading and settings channels. 

## Program
- [ ] **Requirements** should specify versions, in the same way python>3.6 is specified, target versions of each package for the environment should be explicit. 
- [ ] The paper claims "and many export formats". This is not explicitly documented, what are the formats? Only digging through the code, in the GUI, there are the options: JSON, Pickle, NPY, TXT, HDF. However, **HDF** is not implemented in the code, and saving data in JSON or TXT must be properly documented. Is data going to be saved as base64, plain ascii?
- [ ] Missing tests. The authors claim they can't make tests for backends unless the devices are connected. Even though I agree with the challenges of writing tests for devices, the fact that later they claim they can run the user interface without devices connected defeats their own argument. Part of the problem of not being able to run tests is the lack of abstraction between different backends and user interfaces. This is something that other packages have already achieved and is worth checking out.
- [ ] The authors also specify in the docs that they have examples and run them periodically. Some of the examples are broken when ran with ``--dummy``, so I wonder what is the value of the examples. Also, the examples are far from covering the entire package. ``complex_example_a``, for instance, specifies a command line argument for the ``connection_type``, but this is not used later on.
- [ ] In the Backend they explicitly use pyvisa-py as the VISA backend, but again this is not documented (line 246 of  ``Backend.py``) Also, not allowing to choose the VISA backend defeats the spirit of the VISA specification. I also wonder why using sockets explicitly if VISA can handle TCPIP devices?
- [ ] The README states that the code is linted with black, however running black on the code itself raises 22 files with errors (almost 30% of the total)
- [ ] The NI backend has some issues. It imports the nidaqmx only on Windows systems, it fails, but if it is not a Windows system it raises an exception which is not properly handled. There is a script at the end of the file that is meant to remediate that but it makes no sense to have it in the same file where the nidaqmx is imported. 
- [ ] There are many parts of the code that repeat themselves. For example, the Adam_6015 and Adam_6024 have an identical ``try_connect`` method.
- [ ] There are patterns that repeat overall, but are not abstracted, for example the checking of the dummy instrument happens all over the place and could be part of the base Backend. 
- [ ] **Type Hints**: They are partially implemented, which makes them pointless and sometimes they are wrong. Many return types are not specified nor in the docstrings nor as type hints. (see [this](https://twitter.com/ramalhoorg/status/1252347782620299264)) 
- [ ] Some patterns are confusing. For example, in the Rigol backend, a string is returned as ``"Bad setting"`` if there is a problem, but also ``None`` is returned if things go right, and sometimes a string is returned if things go right. I don't see proper definition and handling of exceptions.
- [ ] Separation of concerns: For example, the ``Instrument`` class is defined within the GUI, while I believe it would have been more appropriate to have it in the 'backends' and without relying on Qt. This class is, after all, an abstraction on the behavior of the instruments and may be useful even if you don't build a GUI. This also happens with the saving of data. I wouldn't have guessed that the GUI specifies the data formats. 
- [ ] There are some parameters that are hardcoded which makes it hard to understand the rationale behind. For example, the ``default_state`` in the ``DelayGenerator.py``. 
- [ ] Many methods return ``None`` or ``False`` to indicate success or failure. This pattern is very risky because ``if not val`` evaluates to ``True`` in either case. I see an overall lack of proper exception raising and handling.
- [ ] In the docs, it is stated "A backend for an instrument will run in its own thread. It should have
no Qt references", however the only implementation of threads I found is based on QObjects and QThreads. I strongly suggest to check ``concurrent.Futures`` to deal with instruments, it can simplify a lot the current approach.

### Documentation
- [ ] There is an overall lack of documentation through the program. For example, the fact that the program requires to define your own commands for the instruments makes documentation even more necessary. For example, looking at the NI device, there is a self-defined command: ``CHX_V_MAX`` that is not documented anywhere. 
- [ ] The documentation does not follow a common style. Some are missing arguments and return specifications, some follow numpy-style docstrings, etc. 
- [ ] To create a new user interface, it is stated as "start with a template" (the same with creating new backends), however there is little guide on what a 'template' is in the case of GUIs. This must be greatly improved since the majority of the program relies on the user interface.
- [ ] **Contributing**: There should be more information on how and what to contribute. For example, it is not clear if there are rules for pull-requests (for example, should they stem from main or master? is there a development branch?), should the pull-requests be squashed or do you welcome 100 commits per pull-request? A roadmap is always a nice addition in the early stages, since it allows to see what kind of help are you looking for.  