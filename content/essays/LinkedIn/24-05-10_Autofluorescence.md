---
status: published
published_on: 10-05-24
---
🧪 Have we overlooked autofluorescence for bacterial or cellular identification? I'm very skeptical, even in the perspective of an AI that will solve everything. 

Once in a while I like geeking out with things slightly out of my comfort zone, or review preconditioned thoughts. 

Autofluorescence refers to the fluorescence emission that arises naturally from cells when excited by a laser. In most cases, this signal is the background we must overcome. In a flow cytometer it may give false positives, in single-molecule microscope may limit the accuracy of the method. 

I even worked on a technique to image gold nanoparticles (naturally dim emitters) while rejecting most of the unwanted background signal. 

But what if instead of ignoring and trying to get rid of it, we embrace autofluorescence and we use it for identifying cells? 

The premise is compelling: if autofluorescence is intrinsic to a cellular structure, there is a chance that the emission spectrum encodes information about the cells themselves. Perhaps we can use it as a source to identify the type of cell (or bacteria) we have under the microscope without performing any genetic, or proteomic analysis, and without labeling. 

However, things are never so linear. 

Most of autofluorescence comes from specific chemical groups which are present everywhere. On top of that, crowded environments give raise to complex energy levels, which means the emission spectrum will be broadened. And we are still assuming perfect detectors with no noise. 

But, the question remains: will a massive amount of data allow us to train an AI algorithm that can still make sense of these data? 

I still believe this would be too simplistic.

If the signal is very non-specific to a cell type, it does not matter how much we feed an algorithm, the certainty on the output will be a random guess. 

Perhaps I'm mistaken and one day there'll be a quick test for cell type identification based on autofluorescence. But up to that moment, I still place my bet in Raman spectroscopy as a label-free method. 