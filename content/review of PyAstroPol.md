# Review of PyAstroPol
For the Journal of Open Source Software ([[JOSS]]). 

PyAstroPol is a [[Python]] package to calculate Mueller matrices of circular objects, such as lenses or mirrors, and their combinations. 

## The Paper
The paper stresses too much the limitations and too little the features. The first mentioned feature says:

> However, a major caveat here is that, to computeMueller matrix the electric fields of all the rays will be added coherently after propagating through the system.

Even the features are handicapped in the description of the software instead of focusing on the strengths. Of course, this is a choice of the authors, but I do think that the impact can be related to how one decides to present the work. 

Something that I have missed from the paper is how the program relates to other existing packages (if any). It can be that this is the first package addressing polarization, but the author also mentions comparing to Zeemax as the ground truth. I would replace several of the stated limitations to expand on a discussion about how this program fits in the community. 

### Writing
The writing can be improved. There are several sentences of the form

>  Majority of the optical surfaces in astronomical 

Instead of 

> The majority of the optical surfaces in astronomical 

Or

> The package can be described as collection of the important objects 

Instead of 

> The package can be described as a collection of the important objects 


## The Code
### Installation
The readme file includes a list of modules that are used, such as ``os``, and ``copy`` which are Python built-ins, while it also adds ``numpy`` and ``matplotlib`` which are external libraries and must be installed. It also mentions ``mpl_toolkits`` which is part of matplotlib and therefore can't be installed separately. 

Installation instructions must be improved. A novice user will not be able to go through them. This can be quickly solved by: adding a ``requirements.txt`` file to the root of the project, and/or creating a ``setup.py`` file specifying dependencies and versions. The latter also helps with the instruction of adding the folder to the ``PYTHONPATH``

### Documentation
The documentation is provided as a sphinx project, but sphinx is not listed in the requirements, therefore it can't be built by a user. Even though the documentation is on-pair right now with the code, since it has no visible continuous integration tools to keep the documentation always up to date, I would suggest either leaving the ``_build`` folder out of the repo and asking people to build the docs, or using tools such as ``ReadTheDocs`` to simplify the process. 

**Note**: The readme points towards a html file in the docs folder which, on Github, renders as the source code and not as a website. This makes it very hard to explore the documentation online and/or offline, especially when relying on sphinx-autodoc (the documentation is built from the source code of the program and therefore is not explicitly written in the docs folder). 

The index page of the documentation has very little information on how to get started. It is customary to include some general information, similar to the readme file, and link to specific points for the reader to be able to crack into the program. 

The code itself is very well documented. Every method and class I have checked had appropriate docstrings, so compliments to the author for taking the time to do such a thorough work. That really pays off for anybody trying to learn from the code and, potentially, contribute to it. 

### Quality of the Code
The program performs the tasks that it needs to perform. However, inspection of the code leaves several rooms of improvement that relate to standards (but not requirements) of how Python programmers work. 

For example, using ``from PyAstroPol import *`` is highly discourage, since this is prone to name clashes and makes it very hard to understand what is going to be available to the developer. This is done through the code everywhere, for example in the ``__init__`` file every module is imported with ``import *``. And this propagates to the example on the Readme, where matplotlib is never imported but the code still works. This behavior is also visible within the program files. For example, **material.py** uses numpy, but numpy is never imported. 

Another topic is the non-adherence to [PEP8](https://www.python.org/dev/peps/pep-0008/). Again, these are guidelines, but that can ensure the long-life of a project by lowering the barrier to future contributors. I believe all methods use lowerCamelCase, but attributes of classes don't follow a regular pattern. For example, in **coating.py** there is ``self.Wavelength`` and ``self.iRI``.  

#### Examples
The examples are a great starting place. I think they are the best addition to the code since they very quickly allow a new user to get the gist of the program and start adding small modifications to it. 

However, all the examples run into a ``RuntimeWarning`` because of a division by 0. This raises the concern of whether the code is actually performing the right calculation or if there are problems that may have an impact on the obtained values. I have no way of verifying the accuracy claims:

> Results of the code have been verified against previous works (Pruthvi, Krishnappa, Belur, &Kadagattor (2018)), and ZEMAX© OpticStudio – a popular commercial software.


## Conclusions
The paper and the code are ready to be published provided that the author performs the following:

- [ ] Improve the writing of the paper
- [ ] Clear placement of the current program in the field, i.e. what other packages exist and how this one relates to them
- [ ] Clearly explains how to install the program. Ideally making dependencies (and not built-in python modules) version-specific such as what a requirements.txt file would provide
- [ ] Explains why having a ``RuntimeWarning`` pointing towards a division by zero still generates the proper results. Ideally, this warning should be handled by the program so the end user does not need to worry about it. 
