---
title: Getting started with FastAPI on a Raspberry Pi
description: FastAPI on a raspberry pi can be easily installed. These are the steps to follow in order to have a smooth experience, including the installation of the Python tools required. 
---
Recommended operating system: **Ubuntu Server 20.4**. 

After loading the operating system on an SSD card, booting, and logging into it, the most important is to perform an update to the latest libraries following the steps that will appear on screen:

```bash
sudo apt full-update
```

``apt-get`` is the package manager of Ubuntu, and the command ``apt`` is a convenient way of using it. ``sudo`` instructs the command-line to run the command as the "Super User", a user that can make changes to the entire computer. Use ``sudo`` with care. 

In order to get started with Python, we must install some libraries:

```bash
sudo apt install python3 python3-pip python3-venv
```

This will install Python (most likely it is already installed, but just in case), the Python package manager ``pip``, and the ``venv`` module to create virtual environments. 

See: [[Difference conda environment and virtual environment in Pyhon]]

Once it is ready, we can proceed to creating a virtual environment, for example:

```bash
python3 -m venv fastapi
```

The ``-m venv`` is a quick way of using a Python module directly from the command line. To activate the virtual environment we must run:

```bash
source fastapi/bin/activate
```

To deactivate the virtual environment:
```bash
deactivate
```


We can see that it worked because there'll be a ``(fastapi)`` string at the beginning of the command line. 

Before installing FastAPI, we will need to install ``cargo``, the package manager of Rust, another programming language. 

```bash
sudo apt install cargo
```

Now we can install the python packages that are needed. It is important to install these packages inside a virtual environment, for example by first activating fastapi as we did earlier. 

```bash
pip install fastapi[all]
```

It is important to note that all the commands that involve ``apt`` are acting at a computer level. Cargo is installed on the computer, not within the virtual environment, for example. Any changes to it will have impact on all the virtual environments that rely on it. 

To start a FastAPI program and make it accessible through the network, from an outside computer or device:

```bash
uvicorn main:app --reload --host 0.0.0.0
```