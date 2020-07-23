---
title: Octopi: Open (?) microscope able to process 1.5M red blood cells/min
description: From the creators of foldscope, the Octopi shows great promise but they never released the schematics
---
# Octopi: A pseudo open microscope
When researching about [[open hardware]] projects to get inspiration for the [[Small Scope]], found an interesting one called Octopi[^1], by [[Prakash Lab]], the same guy behind the [[foldscope]][^2]. However it is very frustrating to see a project that claims to be "open" but then you don't find blueprints nor software anywhere else. The twitter of the lab says: "Stay tuned while we update our Github" (but that was written in June 2019 and there are still no news in July 2020).

I have sent an e-mail asking for the information, but they never replied. I have also sent a message through Twitter, although I am not the first one. Something they did very nicely is the press release. If you just google around, you'll find a lot of coverage. 

## Objectives of Octopi
They identify a great need for tools to do malaria diagnosis, which currently rely on microscopy imaging and manual analysis. This creates a great bottleneck, since technicians able to do the study and hardware is not easy to find in some countries. 

Octopi can overcome these limitations by automating the image analysis, and by lowering the costs of the microscope itself. [[Malaria]] is one of those diseases that affect under developed countries and get relatively little attention from central economies (we are talking hundreds of thousands of deaths per year). 

I have also seen a [[spectrometer]] from [[Armani Lab]] that targets the same problems. 

## Ideas behind Octopi
Simple microscope with a stage that can scan large areas and auto-focus. In this way it is possible to image large areas of a smear of [[blood]]. A piezo focuses on the microscope slide and two stepper motors move the sample in XY. A [[Jetson Nano]] powers the pattern recognition software that identifies red blood cells. There is also a laser for fluorescent imaging, and in principle a filter

## Limitations of Octopi
It is very badly documented. It is hard to know what hardware is actually used. A lot of components are sourced from Aliexpress, which means they come and go of stock and it is very hard to buy the exact same components. 


[^1]: https://doi.org/10.1101/684423 
[^2]: https://www.foldscope.com/