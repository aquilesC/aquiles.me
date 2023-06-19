---
status: draft
epistemic: I have been developing technology for extracellular vesicle characterization for over 4 years
---
[[extracellular vesicles|Extracellular Vesicles]] are a fascinating topic in biology and biomedical research. These particles, released by all cells, are fundamental agents for intracellular communication in complex organisms, as well as garbage disposal mechanisms. 

**All bodily fluids** (urine, blood, saliva, milk, cerebrospinal fluid) **contain extracellular vesicles**, at different concentrations and with different types. 

In the past couple of decades, a lot of effort has been placed in studying how they can be used to diagnose disease and how to exploit them to target the delivery of drugs. It is important not to forget that **many basic biology questions** regarding biogenesis, uptake, and the overall life-cycle of these particles are still open. 

## My Interest in the field
Coming from a [[my phd|purely physics background]], my interest in extracellular vesicles is somewhat tangential to the technology behind their characterization. For the past 4+ years, I have been developing technologies to measure their concentration, size, refractive index, and protein content. 

When [[Dispertech]] started, we focused on extracellular vesicles because we believed it was a booming field, with plenty of opportunities for new analytical tools (although we may have misjudged what the field needed.) 

I joined online journal clubs, MOOCS, followed an endless number of researchers on Twitter and LinkedIn (I compiled [a list of interesting profiles](https://twitter.com/i/lists/1656191648404221954?s=20)), attended conferences and embedded myself in the questions I could perceive the field has. 

## The technological landscape
Biology in general, and the extracellular vesicles field in particular, can greatly benefit from technological advancements that allow researchers to gain new insights. There is a long standing tradition of translating tools developed in physics labs to increase the number of details that can be seen in biological samples. From super-resolution microscopy, to cryo-EM, from X-Ray diffraction to mass spectrometry. 

Sometimes, however, the **key to understanding** biological processes lays not on how much you can see but on all the **steps taken for preparing the sample** before the measurement. 

Super-resolution is not possible without specific fluorescence markers, antibodies, buffers. Cryo-EM requires vitrification of very clean samples. X-Ray diffraction needs a degree of crystallization to be useful, etc. 

Extracellular Vesicles samples are not exempt of heavy workloads before each measurement. Lot's of efforts are focussed on increasing the yield of the interesting particles, 

### Sample enrichment
Today, the field of extracellular vesicles is the convergence of a broad pool of techniques. On the one hand, sample preparation is mostly focused on *enriching*. This means increasing the concentration of interested particles, and removing as much as possible the background. 

Techniques such as [[size exclusion chromatography]] (SEC), or tangential-flow-filtration separate particles based on their size. [[Separating EVs based on density]] through [[density gradient centrifugation]] is also possible, as well as using [[free flow electrophoresis]]. 

However, none of those methods is perfect because there are always other particles in fluids with the same properties. Separating EV's from other particles based on only 1 physical dimension seems, at least cumbersome. 

Imperfect techniques does not mean they can't be used. The challenge is then passed downstream, to the sample characterization step. 

### Sample characterization
The first question that most researchers try to answer when looking at EV's is how big they are. This is rooted in the understanding that size can be associated with the biogenesis of the particles, and because it is the first check that one can perform to validate the sample enrichment steps. 

### Measuring size
The majority of the extracellular vesicles in the body are very small, with diameters well below $150\,\textrm{nm}$. The size is too small to measure with a conventional optical microscope, since they will all look like blobs of more or less the same diameter. 

#### NTA
[[Nanoparticle tracking analysis]] (NTA) is a smart way of using a conventional microscope to measuring the size of *colloids*, particles that are free to diffuse in a liquid, such as EV's. By following the movement of individual particles, it is possible to determine their diffusion coefficient, and then relating that to each particle's size. 

The biggest limitation of conventional NTA is that small particles are very hard to characterize. Bellow $100\, \textrm{nm}$ particles diffuse too quickly and are very dim. This means that on the microscope's camera they are very hard to identify and the calculation of their positions becomes quite inaccurate. 

Sample confinement through the use of a [[hollow optical fiber]], or faster cameras such as those used in [[iNTA]] can help overcome some of the limitations. 

#### Coulter Counter 
A [[Coulter Counter]] works by applying a voltage in two liquid reservoirs separated by a membrane with an aperture. Once a current is established, every time an object flows through the aperture the current would drop. At small scales, the aperture becomes a nano-pore, and the method was branded as [[Resistive Pulse Sensing]] (RPS). 

The size of the particles that pass the nano-aperture can be derived by how much current they block. 

Although the principle of operation is smart, the biggest limitation is that the implementation of the technique does not perform as simply as expected. 

Biological samples are mostly complex fluids which can clog the nanopores, the current across the constrictions is heavily dependent on the medium used, the pore shape can change over time, altering the results of the measurements. 

#### Flow Cytometry
[[Flow Cytometry]] is a technique that has resemblances to a [[Coulter Counter]], but that operates in a very different setting. The liquid sample is passed through a special nozzle that makes it very narrow at some position. A carefully aligned laser is then used to detect particles one by one as they flow through the focus spot. 

Flow Cytometry was developed to work with cells, which are gigantic in comparison to an Extracellular Vesicle. 

To detect small particles, the flow has to be much slower, the nozzles have to be re-engineered, and the sensors have to become the best-in-class. 

The idea of a [[nanoFCM|nano flow cytometer]] is gaining a foothold in the community, but the control of the flow at the rates required is challenging, as well as the interpretation of the results. The laser is scattered every time a particle is in the focus, but relating the signal strength to the size of a particle requires very careful calibration which is not yet possible in the current instruments. 

#### Bulk methods and Electron Microscopes
Other approaches to measuring size include transforming sample preparation tools into analytical tools. This is the case for [[Analytical Ultracentrifugation]], that looks at the sedimentation properties of particles as the sample container spins, or [[literature/202111301108 limitations of A4F-DLS-MALS|A4F-DLS-MALS]], which couples filtration with bulk size measurements ([[dynamic light scattering]], [[multiangle light scattering]]). 

Of course, tools like electron microscopes or cryo-electron-microscopes are available, but they are from a completely different league. They are very expensive, hard to operate, and require very delicate sample preparations that in most cases can alter the results. They images they provide are very powerful, since they clearly show the structure of the EV's, but they can't be used to provide statistically significant results, nor can be used routinely in all labs. 

### Beyond Size
Although size is the first physical parameter that was sensible to measure, biology relies on many other properties. Depending on the question being answered, the selection of the tools will be different. 

Surface proteins can be used to determine the origin of EV's and therefore can hold great relevance when using them as biomarkers and 


## Where I think the field is going