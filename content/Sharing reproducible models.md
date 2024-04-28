One of the challenges of [[Open Hardware]] is ensuring its distribution and ability of others to build the same tools. 

With software it's easy, since the instructions on how to build a program are encapsulated in a compiler instruction set (or a virtual machine, interpreter, etc.) The code can be easily distributed and adapted. 

Hardware, however, needs to be built. 

PCB manufacturing is relatively straightforward and commoditized (albeit in the hands of few specialized companies.) Assembly instructions are unequivocal. But this is only one domain. 

Today, with the advent of [[3D printing]] it became easier to share 3D models and to replicate them. However, printers have different properties: different resolutions, they work with different filaments. Slicer software needs to be mastered to make the best out of the printer. 

3D printing only brings you so far. Manufacturing in metal with a CNC machine is very common but requires training. (See: [[literature/202306121208 Difference Open Hardware and DIY science|202306121208 Difference Open Hardware and DIY science]]). 

In any case, design files take very different shapes and they possess very different features. 

Commonly, STL files are shared for 3D printing. They have the minimum amount of information needed to reproduce a model. But they can't be modified. 

**STEP** files possess more information, but they are normally a subset of what CAD programs do. Things like assemblies, joints, material properties are lost. 

This puts the sharing of 3D models at a crossroads. 

In the spirit of openness, people started defaulting to programs such as [[OpenScad]], but they are far from the type of tool professional industrial designers use. 

On the other hand, if you design with Solid Works, or Inventor, your files will be available only to those with the same programs (and their insanely expensive licenses.) 

I have seen a raise in the use of [[OnShape]], a web-based service which is equivalent to Solid Works, but with a free tier. The biggest limitation is that you can't have private projects (which is not a limitation for open-hardware.)

Relying on online (and centralized) services is far from ideal, but it may be the best chance at incentivizing the standardization of data formats for exchange of 3D models. 