# Online version of Python for the Lab

Outline of the contents for a [[Python for the Lab]] course to be held online. 

## Objectives
Lay out the common patterns that one encounters in the lab. Starting from the basic ideas of communicating with a device through the serial port all the way to building a User Interface. 

## Requirements
Students should have a basic working knowledge of programming, knowing what for-loops or if-statements are. Also, students will have to get their hands on the hardware used for acquiring data: An Arduino due, three wires, a resistor, LED, and a breadboard. 

I will use PyCharm as an IDE, as I do in the face-to-face workshops. 

How can this be made more flexible?

## Strategy
Develop bite-sized videos that can be consumed by students at their own pace. Some videos (especially at the beginning) can be skipped by more experienced programmers. Videos should be complemented by text, perhaps based in the book. 

## Platform
Need to research, but probable Teachable.

## List of Videos
Outline of the content of the course:

- Intro: 
    - Objectives
    - Why Python
    - Working in the lab
    - What is the end goal?
- Setting the environment:
    - Anaconda on Windows
    - Anaconda on Linux
    - Anaconda on Mac (?)
    - Installing packages
- Intro to Python:
    - Lists
    - Dictionaries
    - Loops
- Objects in Python:
    - Quick Intro to PyCharm
    - An object stores the state
    - Inheritance
- Get started with the device:
    - Introduction to the Arduino <- How to build an Arduino?
    - Plugging the device (programming port, etc.)
    - Sending a command
    - Reading the serial number
    - The manual
    - Reading a voltage
- Abstracting the device to a class
    - Initialization
    - Read
    - Write
    - Troubleshooting the scripts
- More abstraction
    - How to identify patterns that can be further abstracted? 
    - Troubleshooting
- Divergence: Other tools that achieve the same at a higher level:
    - PyVisa
    - Lantz
    - ...
- Intro to the MVC
    - What is the role of the MVC?
    - Separation of concerns for lab work
    - Model for the device, discuss what should go in it. 
    - Adding units via pint
- Experiment MVC
    - What is required? 
    - Skeleton
    - Config file, read with pyYAML
    - Initialize device
    - Acquire IV curve
- Experiment Model, threads
    - How to make the scan stoppable?
    - Intro to threads
    - Threads for the scan
    - Sharing data into and out of a thread
    - Warning: risks
- Missing bits:
    - Saving data
    - Saving metadata
    - Finalizing
- Starting with the View
    - Intro to PyQt
    - Simple Window
    - Adding a button
    - Triggering a signal/slot cycle
    - Triggering the scan, what happens? Threading!
- Intro to QtDesigner
    - Building a better looking screen
    - Loading the design into Python
    - Connecting the buttons
    - Intro to QThreads
- Adding the Plot
    - Intro to PyQtGraph
    - Adding a 1D plot
    - Updating periodically

To Think:
- Digitizing a signal
- Digital to Analog conversion
- Frame rates
- Max number of pixels