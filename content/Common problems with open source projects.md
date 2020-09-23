# Common problems with open source projects

What are the challenges people face when they decide to [[Open Source]] their projects? 

The lack of guidelines creates a lot of anxiety before open-sourcing. People don't really know what and how to do it and may skip very important steps to ensure a long-lasting project. 

- Lack of organization:
    - E.g. missing contributing guidelines
    - Committing to master directly, even after releases
- [[Reproducibility]]
    - It is crucial to have a versioning system, so people can verify the exact status of the algorithms
- Lack of attention to documentation
- Lack of incentives, why would someone go through the trouble?
- Tests? Can we afford not having tests? 
- Open-source has a big problem with maintainability. Willing to pass the project to others (or forking) should be an established and encouraged behavior

## Reliability
Open source projects can be abandoned from one day to the other, creating bottle-necks in the development of packages that depend on them. They may be small, obscured packages, or even larger ones (example: Django Channels). Do commercial counterparts provide any better reassurance? Comsol could go out of business from one day to another, and then? 