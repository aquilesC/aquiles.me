# Guide on how to open-source projects
Skeleton of the topics to cover on a course on how to release [[Open Source]] projects. It is focused on researchers, scientists, and associated companies, such as [[Dispertech]]. 

Label: [[WIP]] ([[work in progress]])

## Define objectives
Every good course starts by defining learning objectives. What do I want people to be able to do after the course that couldn't be done before. 
[[Why would you learn how to open source projects]]?



- What does it mean to open-source a project? <- Focus on scientific/research-based packages and tools. PyPylon, ODemis, Lantz, PyMeasure. Big ones like matplotlib? Numpy? Scipy? 
    - Need to find examples of smaller packages with a following:
        -  PyQtGraph, 
        -  [[ADDA]] 
        -  Astropy
    - What about [[Open Hardware]]?
        - [[U see 2]]
- What is the goal of open-sourcing? <- You may have different goals!
    - Scientific reproducibility
    - Empowering a community
    - Gaining attention
    - Lowering the maintenance burden
    - Marketing strategy around a product
    - [[Open source is a political act]]
- Risks associated to open-sourcing
    - Researcher: Scooping of topics
    - Single(indie)-developer: Someone builds a product on your work
    - Company: Giving away resources to competitors
- The question: Do benefits outweigh the risks? 
    - Or how do we mitigate the risks? <- Topic for later, since this is more technical
- Choosing the tools to open-source: Git has eaten the world. 3 options:
    - Github <- Where everyone hangs out
    - Gitlab <- Can be self-hosted, e.g. by a university or company
    - Bitbucket <- Is integrated with other tools that belong to Atlassian
- This is not an introduction to Git! <- Can I assume people already know git?
- Readme! Create a description of the project, what it does, how it can be installed. Also, important, how to reach out! Screenshots!
- Choosing a license: On what basis? Never lose track of the objectives you set up at the beginning. (In other words: [[Start with Why]] ;-)
- Do you want people to contribute? <- Create contributor guidelines. If not sure, check other projects. 
- Documentation:
    - The code
    - How to use the program <- Examples
    - How to extend it <- Examples?
    - Self-hosted (and beautiful documentation) on ReadTheDocs
- More technical: Releases <- Zenodo!
- Maintenance of the project: Master/Develop/Feature branch. Don't do all in master or people will get frustrated.
    - Pull requests?
- How to create a community beyond the code
    - Sync/Async communication
    - Respect
    - Foster inclusiveness