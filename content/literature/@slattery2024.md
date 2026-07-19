---
aliases:
  - Aidan Slattery. Science. 2024
  - Automated self-optimization, intensification, and scale-up of photocatalysis in flow
tags: []
title: Automated self-optimization, intensification, and scale-up of photocatalysis in flow
authors:
  - Aidan Slattery
  - Zhenghui Wen
  - Pauline Tenblad
  - Jesús Sanjosé-Orduna
  - Diego Pintossi
  - Tim Den Hartog
  - Timothy Noël
year: 2024
journal: Science
doi: https://doi.org/10.1126/science.adj1817
zotero: zotero://select/library/items/R375XQ3M
pdf: /Users/aquiles/Zotero/storage/U78DZQ38/Slattery et al. - 2024 - Automated self-optimization, intensification, and .pdf
---

<!-- START_ABSTRACT -->
The optimization, intensification, and scale-up of photochemical processes constitute a particular challenge in a manufacturing environment geared primarily toward thermal chemistry. In this work, we present a versatile flow-based robotic platform to address these challenges through the integration of readily available hardware and custom software. Our open-source platform combines a liquid handler, syringe pumps, a tunable continuous-flow photoreactor, inexpensive Internet of Things devices, and an in-line benchtop nuclear magnetic resonance spectrometer to enable automated, data-rich optimization with a closed-loop Bayesian optimization strategy. A user-friendly graphical interface allows chemists without programming or machine learning expertise to easily monitor, analyze, and improve photocatalytic reactions with respect to both continuous and discrete variables. The system's effectiveness was demonstrated by increasing overall reaction yields and improving space-time yields compared with those of previously reported processes.
,
Editor’s summary
There has been an extraordinary burst of recent research in photochemistry and photocatalysis  driven in part by the environmentally benign appeal of light as a source of reactivity. However, many of the studies showcase small-scale reactions, and scale-up relies on a patchwork of different technologies that can require substantial trial and error to optimize. Slattery
et al
. report a combined software and hardware platform that iteratively determines optimal, substrate-specific conditions for photochemical processes in a scalable, flow-based architecture. The closed-loop Bayesian optimization approach enhances overall and space-time yields of a variety of distinct reactions. —Jake S. Yeston
,
A combined software and hardware platform facilitates substrate-specific optimization of photochemical reactions.
,
INTRODUCTION
Photocatalysis exploits light for driving reactivity under mild conditions, contributing to advancements in synthetic methods for pharmaceuticals, agrochemicals, and materials. Nonetheless, challenges persist in optimizing, replicating, and scaling these techniques. These challenges stem from practical considerations such as uneven light absorption and experimental variability, alongside chemical complexities such as poorly understood reaction mechanisms and intricate interactions among various variables. These phases in advancing photocatalytic processes are crucial yet time-consuming components of contemporary chemical manufacturing, requiring expertise and precision owing to their intricate and sensitive nature.
RATIONALE
In response to the need for efficient optimization of complex photocatalytic reaction conditions, we have developed a robotic platform named RoboChem. RoboChem facilitates the self-optimization, intensification, and scale-up of photocatalytic transformations. By integrating readily available hardware, customized software, and a Bayesian optimization (BO) algorithm, this platform offers a hands-free and safe solution, mitigating associated challenges. Operating autonomously, RoboChem eliminates the requirement for extensive expertise in photocatalysis or scaling processes to achieve optimal results. This renders RoboChem a valuable collaborative robotic platform suitable for any synthetic organic chemistry laboratory, irrespective of users’ specific familiarity with photocatalysis.
RESULTS
The robotic platform incorporates several key components, including a liquid handler, syringe pumps, a tunable continuous-flow photoreactor, cost-effective Internet of Things devices, and an in-line nuclear magnetic resonance (NMR) system. It uses a closed-loop BO approach to systematically explore a chosen parameter space encompassing both discrete and continuous variables. Consequently, the platform excels in identifying optimal reaction conditions that maximize either yield, throughput, or a combination thereof.
Operating within a continuous flow microreactor, the platform effectively addresses mass, heat, and photon transport considerations, resulting in the generation of well-structured datasets. These datasets capture both positive and negative results, thereby highlighting the influence of specific variables on the targeted objective function.
Furthermore, the optimal conditions identified by the platform have been successfully scaled up within the same continuous flow photoreactor. Manual isolation processes have been applied to obtain meaningful quantities of pure isolated compounds. Notably, the isolated yields closely align with the NMR yields obtained by the platform, validating its high precision and reliability.
The platform's capabilities were demonstrated across a diverse set of 19 molecules, covering various facets of photocatalysis, such as hydrogen atom transfer photocatalysis, photoredox catalysis, and metallaphotocatalysis. Notably, human involvement was limited to the definition of the parametric space, the preparation of stock solutions and the isolation of pure compounds. The effectiveness of the platform stems from its BO algorithm, which efficiently captures intricate interdependencies among different reaction variables. Consequently, the platform consistently identified optimal reaction conditions that either matched or exceeded those obtained through manual approaches. As a result, the RoboChem platform stands out from conventional synthetic methods by tailoring reaction conditions to the specific needs of each substrate. This capability enables a thorough assessment of the applicability and limitations of the reported transformations, ultimately enhancing their value for potential industrial implementation.
CONCLUSION
The RoboChem robotic platform expedites and streamlines the optimization of photocatalytic transformations, simultaneously enhancing safety and liberating researchers to focus on other creative facets of chemistry.
RoboChem: a benchtop robotic platform for the self-optimization, intensification and scale-up of photocatalytic transformations.
<!-- END_ABSTRACT -->


<!-- START_TEMPLATE -->
# {{title}}

- Source:
- Tags: 
<!-- END_TEMPLATE -->
