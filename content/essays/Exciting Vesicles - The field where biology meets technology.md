---
status: draft
epistemic: I have been developing technology for extracellular vesicle characterization for over 4 years
template: essay.html
head_image: Exciting_vesicles.png
---
[[extracellular vesicles|Extracellular Vesicles]] are a fascinating topic of research in biology and biomedical sciences. These particles, released by all cells, are fundamental agents for intracellular communication in complex organisms.

**All bodily fluids** (urine, blood, saliva, milk, cerebrospinal fluid) **contain extracellular vesicles** at different concentrations and with different compositions. 

In the past couple of decades, a lot of effort has been placed in studying how they are generated and how they transport valuable information across cells. It is believed that vesicles can be used to diagnose disease, since their presence is correlated with a plethora of ailments. There is building evidence showing that [[EVs can be used as ovarian cancer markers|EVs can be used as biomarkers]].

EV's derived from cancer cells, for example, will expose specific proteins associated with them, becoming ideal targets of research for liquid biopsies. Some viruses and parasites exploit vesicles to [[HIV-1 contains CD9 and CD63|bypass the immune system]], or to [[EVs that inhibit viral infection|favor cellular uptake]]. On the other hand, the same mechanisms that naturally favor communication, can be exploited deliver drugs specifically to certain tissues or cell types. 

It is important not to forget that **many basic biology questions** regarding biogenesis, uptake, and the overall life-cycle of these particles are still open. 

## My Interest in the field
Coming from a [[my phd|purely physics background]], my interest in extracellular vesicles is somewhat tangential to the tools used for their characterization. During the past 4+ years, I have been developing technologies to measure their concentration, size, refractive index, and protein content. 

When [[Dispertech]] started, we focused on extracellular vesicles because we believed it was a booming field, with plenty of opportunities for new analytical tools (although we may have misjudged what the field needed.) 

I joined online journal clubs, MOOCs, followed an endless number of researchers on Twitter (I compiled [a list of interesting profiles](https://twitter.com/i/lists/1656191648404221954?s=20)) and LinkedIn, attended conferences, and embedded myself in the problems I perceived the field had. 

## The technological landscape
Biology in general, and the extracellular vesicles field in particular, can greatly benefit from technological advancements that allow researchers to gain new insights. There is a long standing tradition of translating tools developed in physics labs to increase the number of details that can be seen in biological samples: from super-resolution microscopy, to cryo-EM, from X-Ray diffraction to mass spectrometry. 

Sometimes, however, the **key to understanding** biological processes lays not on how much you can see but on all the **steps taken for preparing the sample** before the measurement. 

Super-resolution is not possible without specific fluorescence markers, antibodies, and buffers. Cryo-EM requires vitrification of very clean samples. X-Ray diffraction needs a degree of crystallization to be useful, etc. 

Extracellular vesicles samples are not exempt of **heavy workloads before each measurement**. And this is rooted in the need of increasing the yield of the interesting particles. 

### Sample enrichment
Today, a broad pool of techniques has converged on the field of extracellular vesicles. On the one hand, sample preparation is mostly focused on *enriching*. This means increasing the concentration of interesting particles, and removing as much as possible of the background. 

Techniques such as [[Size exclusion chromatography is the second most popular EV enrichment method|size exclusion chromatography]] ([[SEC]]), or [[tangential-flow-filtration]] separate particles based on their size. [[Separating EVs based on density]] through [[density gradient centrifugation]] is also possible, and there's quite some enthusiasm on using [[free flow electrophoresis]], which sorts particles based on *mobility*. 

However, none of those methods is perfect. In biological samples there are always overlapping properties, therefore separation based on only 1 physical dimension seems almost impossible. That is why preparing samples requires a combination of steps, including ultra-centrifugation, filtration, etc. The hope is that the *few* remaining particles in the vial are going to be those of interest. 

Imperfect techniques, however, do not mean they can't be used. The challenge is then passed downstream, to the sample characterization step. 

### Sample characterization
The first question that most researchers try to answer when looking at EV's is how big they are. This is rooted in the understanding that size can be associated with the biogenesis of the particles, and because it is the first check that one can perform to validate some of the sample enrichment steps. 

### Measuring size
The majority of the extracellular vesicles in the body are very small, with diameters well below $150\,\textrm{nm}$. This range is impossible to measure with conventional optical microscope, since they will all look like bright blobs. Measuring size, therefore, requires a more sophisticated approach. 

#### NTA
[[Nanoparticle tracking analysis]] (NTA) is a smart way of using a conventional microscope to measure the size of *colloids*, particles that are free to diffuse in a liquid. By following the movement of individual particles, it is possible to determine their diffusion coefficient, and then relating that to each particle's size. 

The [[limitations of nanoparticle tracking analysis]] include that small particles are very hard to characterize. Bellow $100\, \textrm{nm}$ particles diffuse too quickly and are very dim. This means that on the microscope's camera they are very hard to localize, yielding inaccurate size measurements.

Sample confinement through the use of a [[hollow optical fiber]], or faster cameras such as those used in [[literature/202212281528 Refractive index measurement of EVs with iNTA|iNTA]] can help overcome some of the limitations. 

#### Coulter Counter 
A [[Coulter counter]] works by applying a voltage across two liquid reservoirs separated by a membrane with an aperture. Once a stedy current is established, every time an object flows through the aperture it will create an electronic blockage. At small scales, the aperture becomes a nano-pore, and the method was branded as [[Tunable Resistive Pulse Sensing]] (TRPS). 

The size of the particles that pass the nano-aperture can be derived by how much current they block. 

Although the principle of operation is smart, the biggest limitation is that the implementation of the technique does not perform as accurately nor reliably as expected. 

Biological samples are mostly complex fluids which can clog the nanopores, the current across the constrictions is heavily dependent on the medium used, the pore shape can change over time, altering the results of the measurements. 

#### Flow Cytometry
In [[Flow Cytometry]], the liquid containing the sample is passed through a special nozzle that creates a very narrow flow. A carefully aligned laser is then used to detect particles one by one as they flow through the focus spot. 

Flow Cytometry was developed to work with **cells, which are gigantic in comparison to an extracellular vesicle**. 

To detect small particles, the flow has to be much slower, the nozzles have to be re-engineered, and  sensors have to become the best-in-class. 

The idea of a [[nanoFCM|nano flow cytometer]] is gaining a foothold in the community, but the control of the flow at the rates required is challenging, as well as the interpretation of the results. 

The laser is scattered every time a particle is in the focus, but relating the signal strength to the size of a particle requires very careful calibration which is not yet possible in the current instruments. 

### SP-IRIS
[[SP-IRIS]] is an optical method that relies on a two step process. First, a micro-patterned substrate is prepared with some antibodies. This is similar to an ELISA test, but with control on the number of attachment sites and their location on a *macroscopic* area. The second step includes adding a fluorescent label, which adds an extra dimension to the detection events. 

To count particles attached to a given site, the device uses an interferometric approach, not unlike [[iSCAT]] (used in the [[iNTA]] approach). The interferometric detection allows to calculate the size of the particles, and the fluorescence signal (which can be multiplexed) yields the extra dimensions. 

The biggest challenge with this approach is overcoming the [[tyranny of the Langmuir binding isotherm]]. To guarantee that small populations of particles are detected, the user needs to wait many hours (up to 24) for all the particles to have enough chances of interacting with the substrate. 

#### Bulk methods and Electron Microscopes
Other approaches to measuring size include transforming sample preparation tools into analytical instruments. Such is the case for [[analytical ultracentrifugation]], that looks at the sedimentation properties of particles as the sample container spins, or [[literature/202111301108 limitations of A4F-DLS-MALS|A4F-DLS-MALS]], which couples filtration with bulk size measurements ([[dynamic light scattering]], [[multiangle light scattering]]). 

Of course, tools like electron microscopes or cryo-EM are available, but they belong to a completely different league. They are very expensive, hard to operate, and require very delicate sample preparations that in most cases affect the results. The images they provide are very powerful, since they clearly show the structure of the EV's, but they can't be used to provide statistically significant results, nor can be used routinely to process hundreds of samples. 

### Beyond Size
Although size is the first physical parameter that was sensible to measure, biology relies on many other properties. 

Surface proteins can be used to determine the origin of EV's and therefore can hold great relevance when using them as biomarkers. The cargo (if any) of EV's can be crucial to identify genetic disorders. Today, for example, there is more attention given to the corona of the particles: the surrounding proteins that not necessarily form part of the vesicles, but that may play a role in their behavior. 

Understanding, first, and then using exosomes either for diagnostics or therapeutics, is a fertile ground for experimentation. It is an ideal domain for high-risk/high-reward biophysical tools that help gain completely new insights into the inner workings of intracellular communication. 

### Super Resolution Microscopy
A discussion on extracellular vesicles characterization wouldn't be complete without including super-resolution microscopy techniques. Super resolution can be achieved through single-molecule localization, or through enhanced optical systems such as in STED. The latter is not yet very popular in the EV community, and I will not discuss it.  

Single-molecule methods include strategies such as **STORM** or **PALM**, which became quite popular in the vesicle community in recent years. However, these methods are limited to a localization accuracy of around 20~50nm, which is not good enough to say much about the shape or size of particles below $100\,nm$ in diameter. 

Single-molecule techniques, on the other hand, allow **the ultimate detection threshold**: just one label is enough to generate a signal. 

In this line of thought, other concerns appear, such as the labelling specificity and coverage. Quantifying the number of proteins on an EV based on the number of labels attached is risky and the entire process needs to be properly understood to derive accurate conclusions. 

It is important, therefore, to understand what information researchers are after, and **whether super-resolution or a device with a very low limit of detection** is what will give them the results they need.

## Where I think the field is going
I think in the coming couple of years we'll see the emergence of diagnostic tests based on vesicles. In a first stage, these tests will be designed around existing tools and protocols. For example, an [[elisa test]] after some sample enrichment. 

The biggest advantage of this path is that such **tools are already validated and approved by regulatory bodies**, therefore adoption can be rather quick. 

To move forward, the main question is whether the techniques available today for sample enrichment and characterization, for example, are enough to find a correlation between particles and disease.

In order to reach the clinically-relevant stage, many exploratory tests need to be performed, without losing sight from the basic-biology driving questions. This is the stage where up and coming companies can help researchers: by understanding their underlying needs, they can design tools and services that match expectations. In turn, the better positioned solutions have much more to gain in the following stages. 

As for the next steps, I am quite confident that the real breakthrough will happen thanks to much more complex analyses. Judging the samples in a binary fashion, for example by the presence/absence of a protein, will not be enough. 

**Multi-dimensional analysis**, including physico-chemical attributes such as size, refractive index, charge, mass, and the protein or cargo content will unlock many more possibilities. Some that may even be hard to fathom today. Coupling sample preparation tools with analytical tools can speed up the process and give unique insights. 

[[Machine learning]] algorithms able to analyze complex signals will naturally emerge as a necessary step. 

### Missing pieces and challenges
Extracellular vesicles are a complex object to study. Part of the complexity is given by the shear amount pf particles in bodily fluids. If one would be looking at [[EVs can be used as ovarian cancer markers|EV's from a tumor]], for example, the chances of finding them amongst the myriad other EV's and [[lipoproteins]] would be [[why pushing sensitivity of assays|close to zero]]. 

That leads to the need to use **single-particle type of measurements**, where even **the smallest numbers can be detected**. 

The biggest problem with small-number detections is the number of false-positives. There is still a lot of work to be done in labelling and capturing EV's to limit the amount of mistakes. Label-free methods such as **[[literature/202306221512 SERS to identify cancer EVs|SERS]] are very promising, but very hard to implement** under the high-throughput conditions necessary to create statistically sound results. 

Combining techniques in simple to use devices will be crucial for extending the understanding and use of vesicles. Things such as **coupling electrophoretic mobility sorting with fluorescence** detection on the same particles, will be fundamental to unravel multi-dimensional analysis. Performing measurements on different devices has limited advantages, since the particles observed are not really *the same*. 

I think **EV's are going to be a catalyzer for many multi-disciplinary projects**, bringing together people with a broad set of skills all the way from biology to engineering. 

For companies operating in the field, there are many *startups* and scale ups that can risk experimenting with new approaches. However, most of them master one technique. Incentives to create strong partnerships could become essential tools to foster the creation of out-of-the-box solutions. It could also be, however, that only the biggest players in the field can pull through and incorporate a mix of techniques into a single measurement tool. 

### Training the next generation
I think the most important aspect is to acknowledge that science is multi-disciplinary. A biologist that can't program, or a physicist that does not know cells exist, should not be the norm. Funding should allow such arrangements, especially because there's a lot to gain at the intersection of fields but also quite some risks from a career perspective. Funding incentives should align with individual incentives to favor those collaborations and the healthy migration of people across domains. 

In this line of thought, training people on the use of modern technologies is fundamental. And this idea is not limited to just machine learning tools. The more someone understands about the guiding principles behind a technique, the more chances they have to extend it to solve their own needs. That's one of the things I like about [[open hardware]], it incentivizes people to understand the underlying mechanisms that make a tool. 

**Black boxes** are dangerous, not only because they can be misleading, but because **they place too much power in external hands**. 

Next generation scientists should have a broad understanding on the applications of new algorithms for their own benefit. It is not simply speeding up the write up of a paper through a language model. It's the way results are analyzed and how experiments are designed, without losing the perspective of the underlying biology, chemistry, or physics involved. 

## Exciting Vesicles
All in all, the field of extracellular vesicles is extremely exciting from many different perspectives. It is a field that emerged in a place where few devices were available for their study. The complexity of the field itself lead to very creative solutions to complex problems. 

I think Extracellular Vesicles are an extremely promising field to work on, both from the technology perspective, as well as the basic biological questions being answered. 

I am convinced that in the **next 5 to 10 years we'll see the first exosome-based vaccine for humans**, allowing to move over many of the challenges derived from the use of lipid nanoparticles for drug delivery. 