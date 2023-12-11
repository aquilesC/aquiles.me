I wanted to build the assets for a website as part of the startup process of a django container. To speed it up, I wanted to install the dependencies during the image creation in the same way I was already doing it for the Python dependencies. 

The first think I did was moving the files into the container while building the image:

```
COPY ./yarn.lock /yarn.lock
COPY ./package.json /package.json
RUN yarn install
```

And I created a start script that would run:

```
yarn webpack
```

The problem is that the **node_modules** folder ended up being a folder above where the project's ``package.json`` file was (in the ``/app`` directory in the container). I couldn't find a way of telling yarn where to look for the modules, so I had to force the proper webpack to run, by updated the start script to:

```
/node_modules/.bin/webpack --mode=production
```

The full example code is in this [pull request](https://github.com/Klimaat-Helpdesk/website/pull/52/files). 

Tags: #docker #yarn #building-assets #build-automation