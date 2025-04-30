# 202504291345

- Source: [[@potyrailo2020]]
- Tags: #gas-sensor #detection #MOX

In order to overcome the [[Limitations of chemiresistive gas sensors]], instead of measuring the resistance, the authors propose to measure the impedance of the sensitive layer. 

It is important to keep in mind that there's a fenomenological power-law rule regarding the resistivity of the sensing layer:

$$
R = R_0(1 + K_\textrm{gas}[\textrm{gas}])^{-\beta}
$$
Where $K_{\textrm{gas}}$ is the sensitivity to a specific gas, while $\beta$ depends on different factors, such as: 
1. The nature of the measured gas 
2. The type of sensing material, including the grain size, grain surface-to-volume ratio, types of dopants
3. The geometry and material of the electrodes of the sensing element. 

Using the following circuit diagram for the sensing measurement (IC: intergranular contacts, EC: electrode/particle contacts)
![[Pasted image 20250429135129.png]]

We can define (not sure where this is coming from):

$$
Z' = \frac{R}{1+(2\pi fCR)^2}
$$
$$
Z'' = \frac{-R^2C2\pi f}{1+(2\pi fCR)^2}
$$
The entire observation of the paper is that while resistance alone has a non-linear behaviour and saturates at relatively low concentrations of gas, $Z''$ shows a linear behavior in a wide range of parameters. 

![[Pasted image 20250429135655.png]]

![[Pasted image 20250429140333.png]]

Interesting to remember: 
- The **sensor used** was TGS 2611
- ASIC: AD5933, ADuCM355