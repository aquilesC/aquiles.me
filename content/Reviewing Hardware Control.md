# Reviewing Hardware Control
I am reviewing [Hardware-Control](https://bitbucket.org/berkeleylab/hardware-control/src/1.0.0/) for a submission to [JOSS](https://github.com/openjournals/joss-reviews/issues/2688)

## Paper
- [ ] Typos: 
    - [ ] Task, such as data logging or parameter scans (should be Tasks)
    - [ ] often needs (should be need)
    - [ ] Especially the control through python during execution make (should be makes)
    - [ ] there are others
- [ ] uses Qt, a GUI framework (Riverbank Computing Limited,2020)
    - [ ] Qt is not from Riverbank Computer, PyQt is. 
- [ ] LabView (...) they often do provide a wide range of instrument drivers. 
		This is spiritually not correct. Hardware manufacturers provide drivers written for (or in) LabView. 
- [ ]  "because it solves the broadly applicable problem of instrument automation"
		This is an oversell of the package. It does not solve *the problem*, it only shows one way of working
- [ ] The authors lack acknowledging all the other instrumentation software available. Notably projects like PyMeasure, LantzProject, pyacq.
- [ ] There is no discussion on why they implemented their own solution instead of contributing to ScopeFoundry, for example.
- [ ] The paper builds on PyQtGraph but yet, it only cites Qt
- [ ] The paper misses the fact that they only implement message-based devices, and no way of working with other type of instruments
## Program
- [ ] The paper claims "and many export formats". This is not explicitly documented, what are the formats? Only digging through the code, in the GUI, there are the options: JSON, Pickle, NPY, TXT, HDF. However, **HDF** is not implemented in the code, and saving data in JSON or TXT must be properly documented. Is data going to be saved as base64, plain ascii?
- [ ] Missing tests. The authors claim they can't make tests for backends unless the devices are connected. Even though I agree with the challenges of writing tests for devices, the fact that later they claim they can run the user interface without devices connected defeats their own argument. Part of the problem of not being able to run tests is the lack of abstraction between different backends. This is something that other packages have already achieved and is worth checking out
- [ ] The README states that the code is linted with black, however running black on the code itself raises 22 files with errors (almost 30% of the total)
- [ ] The NI backend has some issues. It imports the nidaqmx only on Windows systems, it fails, but if it is not a Windows system it raises an exception which is not properly handled. There is a script at the end of the file that is meant to remediate that but it makes no sense to have it in the same file where the nidaqmx is imported. 
- [ ] There are many parts of the code that repeat themselves. For example, the Adam_6015 and Adam_6024 have an identical ``try_connect`` method.
- [ ] There are patterns that repeat overall, but are not abstracted, for example the checking of the dummy instrument happens all over the place and could be part of the base Backend. 
- [ ] **Type Hints**: They are partially implemented, which makes them pointless. Many return types are not specified nor in the docstrings nor as type hints.  
- [ ] Some patterns are confusing. For example, in the Rigol backend, a string is returned as ``"Bad setting"`` if there is a problem, but also ``None`` is returned if things go right, and sometimes a string is returned if things go right. I don't see proper definition and handling of exceptions.
- [ ] Separation of concerns: For example, the ``Instrument`` class is defined within the GUI, while I believe it would have been more appropriate to have it in the 'backends' and without relying on Qt. This class is, after all, an abstraction on the behavior of the instruments and may be useful even if you don't build a GUI. 
- [ ] There are some parameters that are hardcoded which makes it hard to understand the rationale behind. For example, the ``default_state`` in the ``DelayGenerator.py``. 
### Documentation
- [ ] There is an overall lack of documentation through the program. For example, the fact that the program requires to define your own commands for the instruments makes documentation even more necessary. For example, looking at the NI device, there is a self-defined command: ``CHX_V_MAX`` that is not documented anywhere. 
- [ ] The documentation does not follow a common style. Some are missing argument and return specifications, some follow numpy-style docstrings. 
- [ ] To create a new user interface, it is stated as start with a template (the same with other devices), however there is little guide on what a 'template' is in the case of GUIs. This must be greatly improved since the majority of the program relies on the user interface.
- [ ] **Contributing**: There should be more information on how and what to contribute.