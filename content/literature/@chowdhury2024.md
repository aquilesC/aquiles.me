---
aliases:
  - Chandra Chowdhury. ChemPhysChem. 2024
  - Bayesian Optimization for Efficient Prediction of Gas Uptake in Nanoporous Materials
tags: []
title: Bayesian Optimization for Efficient Prediction of Gas Uptake in Nanoporous Materials
authors:
  - Chandra Chowdhury
year: 2024
journal: ChemPhysChem
doi: https://doi.org/10.1002/cphc.202300850
zotero: zotero://select/library/items/G5SBDPIK
---

<!-- START_ABSTRACT -->
The discovery and optimization of novel nanoporous materials (NPMs) such as Metal-Organic Frameworks (MOFs) and Covalent Organic Frameworks (COFs) are crucial for addressing global challenges like climate change, energy security, and environmental degradation. Traditional experimental approaches for optimizing these materials are time-consuming and resource-intensive. This research paper presents a strategy using Bayesian optimization (BO) to efficiently navigate the complex design spaces of NPMs for gas storage applications. For a MOF dataset drawn from 19 different sources, we present a quantitative evaluation of BO using a curated set of surrogate model and acquisition function couples. In our study, we employed machine learning (ML) techniques to conduct regression analysis on many models. Following this, we identified the three ML models that exhibited the highest accuracy, which were subsequently chosen as surrogates in our investigation, including the conventional Gaussian Process (GP) model. We found that GP with expected improvement (EI) as the acquisition function but without a gamma prior which is standard in Bayesian Optimisation python library (BO Torch) outperforms other surrogate models. Additionally, it should be noted that while the machine learning model that exhibits superior performance in predicting the target variable may be considered the best choice, it may not necessarily serve as the most suitable surrogate model for BO. This observation has significant importance and warrants further investigation. This comprehensive framework accelerates the pace of materials discovery and addresses urgent needs in energy storage and environmental sustainability. It is to be noted that rather than identifying new MOFs, BO primarily enhances computational efficiency by reducing the reliance on more demanding calculations, such as those involved in Grand Canonical Monte Carlo (GCMC) or Density Functional Theory (DFT).
<!-- END_ABSTRACT -->


<!-- START_TEMPLATE -->
# {{title}}

- Source:
- Tags: 
<!-- END_TEMPLATE -->
