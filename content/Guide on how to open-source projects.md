---
title: Guide on how to open-source projects
epistemic: This is work in progress. I am still exploring the challenges of organizing such a course
status: draft
---
# Guide on how to open-source projects
This is meant to be the central place of a future "How-To [[Open Source]]" course. The idea of this course was triggered after [[reviewing Hardware Control]] on JOSS. And many discussions with different researchers who don't have a clear path forward regarding how to structure work in their labs in order to enable openly sharing software and data together with traditional publications. 

## Target Audience
There are two sides to the same coin: PhD's and postdocs who actually do the work, and must develop specific working practices in order to be able to successfully achieve their own goals. On the other hand, PI's who need to guide their groups in order to empower them to reach their ambitions. 

Therefore, the target audience is, broadly speaking, **researchers**, remembering that there is a two-fold problem that must be addressed: from a management perspective and from a workflow perspective. 

## Challenges
One of the challenges of this initiative is the distance between the PI and the people actually doing the work. In many cases, PI's were never exposed to proper working practices during their careers, and therefore they don't know how to guide their students in order to empower them. On the other hand, masters are very poor in the quality of the programming courses they offer. Most people get exposed to abstract programming practices, not to real *problem-solving* skills. 

This pushes the burden to the students themselves later in their careers, and particularly to PI's who need to divert resources in order to train their groups. This normally creates a negative spiral of consequences, in which doctorands are not properly trained, which in turn generates postdocs poorly trained, who passed down to PhD's non-optimal practices, and who in turn become PI's who have no elements to develop a proper work environment. 

The external challenge is that not everyone working in research sees value in openly sharing software or code. These external forces are beyond the scope of this guide, but must be taken into account. For example, some people are worried about scooping or public shaming. On the other hand there are very little incentives for making data and code public (see, for example: [[changing scientific incentives can help overcome stagnation]]).

## Objectives
I want to develop a hands-on approach that shows how it is possible to structure data and code in such a way that it can be maintained in the long term. Some of these ideas were developed as part of [[Python for the Lab]], showing that it is possible to develop high-complexity programs without creating overhead. For data reduction and analysis, the practices is very similar and comes down to having a workflow that enables [[reproducibility]]. 

To this end, the guide should focus on the entire flow between raw data and publication-ready figures. Keeping in mind that both the code and data would be shared publicly. Therefore, there will be a generic overview of each step, useful for PI's who want to establish practices in their groups, and also hands-down coding examples for the people who are going to work on the data. 

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

## Structure Of the Guide

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
    - Building a community
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