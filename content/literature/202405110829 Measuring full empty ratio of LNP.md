
- Source: [[@li2022a]]
- Tags: #lipid-nano-particle #full-empty-ratio

This paper implements a flow cytometer inside a capillary. I am not completely sure about the advantages of their approach compared to any other tool, such as [[nanoFCM]]. 

The capillary is a **Molex** glass capillary with a $10\mu m$ inner diameter. They create a [[light sheet]] to illuminate the entire cross section but, presumably, to keep intensity relatively high. They use 3 colors ($488nm$, $532nm$ and $640nm$). As far as I can tell there is no scattering, just fluorescence. The cameras are used for alignment, not for acquisition. 

![[Screenshot 2024-05-11 at 08.30.33.jpeg]]
There is some discussion about aligning the capillary to the detectors, but I am still missing a discussion on how they compensate the planar geometry while using point detectors. Even they claim using a rectangular aperture to clean up the background, but there is no secondary cylindrical lens. 

The rest of the paper is mostly a discussion on specific samples and the distribution of [[mRNA]] on each [[lipid nano particle]]. The equation they derive is the following:

$$
D_{LNP} = \sum^{N}_{n=1}\omega_{n}\times D_{RNA, n}
$$
Where the distribution of number of RNA molecules per particle is computed by calculating the weights that must be assigned to the signal of different numbers of RNA in the focal volume. They also claim that $D_{RNA},n$ is simply $n\times D_{RNA,1}$ (and not an experimentally derived value). 

I think all this discussion is rather naïve, since the only thing it gets is that the way of measuring the number of RNA molecules in a particle is a direct multiplication by the intensity given by a single RNA molecule. 

There's just a slight complication since intensities themselves forma distribution and not a single value, but the fact they don't have an experimental basis (they neglect any effects in having dual fluorophores, self-quenching, etc.) 

![[Screenshot 2024-05-11 at 08.51.25.jpeg]]

The data in the paper looks exactly like it would look like in a flow-cytometer experiment, but without scattering ([[using scattering instead of fluorescence]]). 

The important conclusion of the paper is that **80%** of the LNP's are empty, even if they were using "the gold standard" of mRNA in LNP's. 

### Note
The paper goes as far as describing a fitting procedure that minimizes $\chi^2$ in the distribution of intensities.  