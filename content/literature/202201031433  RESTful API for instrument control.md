# 202201031433  RESTful API for instrument control

- Source: [@lelli2011]
- Tags: #instrument-control #web-based #restful-api

It is possible to control instruments through a web interface based on a RESTful API. Particularly, the methods defined seem very appropriate:

- GET
- PUT
- POST
- DELETE
- OPTIONS

Wonder what *Delete* could mean. The authors propose a specific URI pattern like:

```
/Context/<id>/Instrument/<id>/Description
/Context/<id>/Instrument/<id>/Status
/Context/<id>/Instrument/<id>/FSM
```

I don't fully understand what *Context* means in this architecture, it is stated as:

> Context represents a configuration of the instrument itself

The **FSM** is the Finite State Machine of the instrument, which should represent the current status of the device and the possible transitions. 

The data exchange can be achieved through XML (ATOM) although the authors also mention JSON. 

It is worth noting that in the past 10 years some changes have happened in the online world. Especially the clear domination of JSON for data exchange between restful services. Also, the emergence of GraphQL as layer for standardization of information between services. 