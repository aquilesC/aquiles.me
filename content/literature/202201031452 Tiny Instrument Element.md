# 202201031452 Tiny Instrument Element

- Source: [@lelli2009]
- Tags: #instrument-control #web-based #restful-api 

The idea of developing an architecture to control devices through a RESTful API (see: [[literature/202201031433  RESTful API for instrument control]]) is not only a technical advantage but also that it empowers different types of users to interact with instruments in the same way web platforms have different types of users. For example:

- **END USER**: Can use the tool but has no underlying understanding of the technology. 
- **Advanced User**: Is able to perform some simple customization, follow guides, etc. 
- **API Developer**: Has programming skills and can build on top of an existing API (for example a user interface) or can aggregate data
- **Tool Programmer**: Is the product owner, has the ultimate knowledge on how to build, customize, extend the instrument. 

An instrument can be described by its:

- **Parameters**: hold configuration information
- **Attributes**: hold instrument variables (inputs and outputs)
- **Commands**: hold *actions* that the device can perform
- **Finite State Machine**: specifies a state transition automata, used to constrain in which states can commands be executed. 

In this work they also describe a specific case analysis but it's hard to know what are they talking about. 