---
title: Guide on how to open-source projects
epistemic: This is work in progress. I am still exploring the challenges of organizing such a course
status: draft
---
# Guide on how to open-source projects
This is meant to be the central place of a future "How-To [[Open Source]]" course. The idea of this course was triggered after [[reviewing Hardware Control]] on JOSS.

## Define Target Audience
The course will be tailored to researchers, scientists, and companies with scientific roots, such as [[Dispertech]]. 

## Objectives
The reason why someone would follow this course. 

### Actionable insights for someone who follows the course
What will people be able to do/know after following the course that was not able to do before the course:

- [[Avoiding common problems with open source projects]]
- [[Practical checklist to open-source succesfully]]
- [[Getting the code ready for publication]] (or as companion of a publication)

### Knowledge gap to be addressed

- [[Why would you open source]]? <- Important discussion for scientists
- [[Risks and opportunities of open-source are misjudged]]
- [[How to lay out a path to create a community around a project]]
- [[Standard patterns for open source projects]]

## Personal Motivation

- [[Why would you learn how to open source projects]]? <- Question is why learning, not why open-sourcing

## Structure Of the Course

- What does it mean to open-source a project?
	Focus on [[Scientific open source]] packages and tools such as: 
    - PyPylon, ODemis <- There's a company behind them
    - ImageJ, CellProfiler <- Bigger projects, now well funded. Check their origins 
- Examples of smaller packages with a following:
    -  PyQtGraph, 
    -  [[ADDA]] 
    -  Astropy <- Often cited as example on [[/essays/Notes on Working in Public - Nadia Eghbal]]
- What about [[Open Hardware]]?
    - [[U see 2]]
    - [[Prakash Lab]] has plenty of examples
- Examples of non-open programs:
    - Gadget (Astronomy)
    - Probably epidemiologic modeling 
    - I am sure there are plenty more, need to collect feedback
- What is the goal of open-sourcing? <- You may have different goals!
    - Scientific reproducibility
    - Empowering a community
    - Gaining attention
    - Lowering the maintenance burden <- Is this true? Perhaps from a company perspective?
    - Marketing strategy around a product
    - [[Open source is a political act]]
- [[Risks associated with open-source]]
    - Researcher: Scooping of topics
    - Single(indie)-developer: Someone builds a product on your work
    - Company: Giving away resources to competitors
- The question: Do benefits outweigh the risks? 
    - Or how do we mitigate the risks? <- Topic for later, since this is more technical
- Choosing the tools to open-source: #git has eaten the world. 3 options:
    - [[Github]] <- Where everyone hangs out
    - [[Gitlab]] <- Can be self-hosted, e.g. by a university or company
    - [[Bitbucket]] <- Is integrated with other tools that belong to Atlassian
- This course is not an introduction to Git! <- Can I assume people already know git?
- Readme! Create a description of the project, what it does, how it can be installed. Also, important, how to reach out! Screenshots!
- Choosing a license: On what basis? Never lose track of the objectives you set up at the beginning. (In other words: [[Start with Why]] ;-)
- Do you want people to contribute? <- Create contributor guidelines. If not sure, check other projects. 
- Documentation:
    - The code
    - How to use the program <- Examples
    - How to extend it <- Examples?
    - Hosted (and beautiful documentation) on ReadTheDocs
- More technical: Releases <- Zenodo!
- Maintenance of the project: Master/Develop/Feature branch. Don't do all in master or people will get frustrated.
    - Pull requests?
- How to evaluate [[Development costs of open source software]]
- How to evaluate [[Maintenance costs of open source projects]]
- How to create and maintain a community beyond the code
    - Sync/Async communication
    - Respect
    - Foster inclusiveness

Tags:  #Open-Source #courses