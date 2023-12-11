## What is Anaconda and the conda package manager

Anaconda is a full-fledged package manager that works on most operating systems. 

For people coming from a Linux background, this is not novelty, but for Mac and Windows users, package managers are unknown. A package manager is a tool that **allows to install programs AND their dependencies**. This removes a lot of duplication (programs shipping dependencies) and makes the system easier to maintain (a single source of truth for versions and requirements). 

Anaconda brought the idea of a package manager to windows, focusing on **scientific/engineering Python developers**. Many libraries such as numpy have dependencies that go much beyond what the default Python installer can take care of. Not so many years ago getting a decent development setup on Windows was a total nightmare, and Anaconda solved that problem. 

Installing packages is only half the problem, being able to isolate project dependencies is the other half. 

When developing several projects on the same computer, managing dependencies can become crucial to ensure quality and compatibility. That's the root idea of a **conda environment**: isolating the dependencies for each project in separated spaces. An update of one of the libraries will have an impact only on that specific project structure, and not on the others. 

Conda environments are so specific that they allow to select the version of Python we want to run, for example. We can track the version of the underlying libraries, for example those on which numpy relies to perform calculations. **Conda environments are ideal for ensuring reproducibility**. You know you can bring the same environment to the next computer you work on, and the results will be the same. 

## How do virtual environments compare to conda environments

Python virtual environments are the light version of the conda environments. 

Virtual environments are a native tool to Python developers, and they provide a functionality similar to that of the conda environments. The main difference is that they rely on the *Python package manager*. **Libraries and programs that do not belong to the Python ecosystem can't be installed with these tools**. In these cases, one must rely on the operating system's ability to install programs. 

The Python package manager improved a lot in the past decade. Today, no one has issues installing numpy, pyqt, or scikit with a simple ``pip`` command. However, many of these packages still rely on libraries available at an operating-system level. For example, Python itself is grabbed from the operating system and not installed purposefully on each environment. **Virtual environments are a very good tool to isolate dependencies across projects that rely mostly on Python packages**. 

## How to choose between conda environments and virtual environments

The choice between one and the other comes down to understanding how much control we have on the underlying operating system, and what would the risks be. 

One of the largest risks when deploying application is that an un-intended software update generates a cascading effect. For example, Windows updates itself giving very little control to the user. In these update cycles it may happen that there's a new release of Python, which in turn makes our program misbehave. However, thinking about **ourselves as the developers and consumers** of the same code hides the real problem. 

If we are delivering software, either by deploying it on a server accessible by others, or as part of an embedded system, or as a program that others will install in their computers, **we probably want to minimize the maintenance burden**. If we have control on the packages installed on a server, for example, then I could argue that conda environments are not necessarily adding value. We could rely on the operating system's package manager. 

If our projects are exclusively Python-dependent, virtual environments are so lightweight that there's only upside in using them. 

Even if we have control on the computer where the code is going to be deployed, adding the layer of a virtual environment gives plenty of peace of mind. It prevents problems with incompatible cross-dependencies, allows careful updates and testing. Even if we don't have too much control on the underlying libraries, it may be just what we need. 

## How I combine virtual environments and conda environments
I normally work on two types of problems using Python: scientific work that requires a high degree of reproducibility across computers, and side projects that are mostly web-based. 

**For scientific-based projects, I always rely on Anaconda**. It gives me peace of mind that there's an authoritative body overseeing which packages are being released. If a user asks for support, I can be quite confident that a ``conda install`` will not expose them to unnecessary risks and burdens. It also limits the problems tracking down dependencies, and troubleshooting version mismatches (especially on Windows). 

My side projects include maintaining websites written with Python. [Python for the lab](https://www.pythonforthelab.com) and the [Climate Helpdesk](https://www.klimaathelpdesk.org) being the two most prominent examples. In these cases, the code is deployed to a server on which I have control on the dependency installation. In that case, **I use virtual environments both locally and remotely in order to test the outcomes of the modifications I want to implement**. 

More than a combination is the selection of the proper tool for the job. 

It is important not to follow trends and broad advice without thinking first. Conda and virtual environments are powerful tools. **They simply serve different purposes and is up to each one to decide what tool to pick**. 

Bear in mind that all this discussion does not even consider the next big thing of nowadays: **Docker Containers**. Virtualization is a completely different realm compared to virtual environments. That would be the topic for another discussion. 