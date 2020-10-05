---
title: How I built this website using Python and Markdown
description: I created my own builder to parse my notes and create a beautiful static website
---
# How I Built this Website
This is a slightly technical walk through in case anybody would like to build from my experiences.

## The short version
I built a [custom script](https://github.com/aquilesC/static_website_builder) that parses markdown files and outputs plain HTML. These files are hosted on Netlify and the build process is triggered by pushed to a [Github repository](https://github.com/aquilesC/aquiles.me). 

## Starting point
I wanted a robust system that was independent from platforms and as future-proof as I could make it. Opting to build on top of Markdown files seems the best choice, especially because with them it is possible to [[lower the barrier to writing]]. The files are stored in my own computer and backed up and synchronized through a [Github repository](https://github.com/aquilesC/aquiles.me). As an editor I use [[Obsidian]] (see: [[choosing between Zettlr and Obsidian]]). 

## The technology choice
Even though I used Pelican in the past, and I know how well Jekyll works (that's what Tom Critchlow [uses](https://tomcritchlow.com/2019/02/17/building-digital-garden/)), I wanted something different. I gave  [GatbsyJS](https://www.gatsbyjs.org/) a try. And even though It looks like a fantastic piece of technology, I don't want to mess with JavaScript and much less with React. I also found the [Andy Theme](https://github.com/aravindballa/gatsby-theme-andy/) which gives a neat look to notes, and the [Brain Theme](https://github.com/aengusmcmillin/gatsby-theme-brain), which triggered the initial design of this website. 

Going for a custom builder, leveraging the existing libraries seemed the way to go. 

### Minimum Features I wanted
- Render markdown
- Handle subdirectories and static files
- Using the wikilink syntax
- Building backlinks
- Custom syntax (i.e. images of certain width, etc.)
- Templating System

### Custom Static Builder
To achieve the minimum required features, I built a [[Python]] script that goes through all the markdown files within a folder, extracts the links to other pages (wikilinks) and builds a dictionary with all the information, including those *backlinks*. Another loop renders the Jinja2 templates and saves them to an output folder.  

I released the  [builder](https://github.com/aquilesC/static_website_builder) under a [[BSD license]], because I think it can be used by others to learn. It is fare from being 'a package', but many of its parts can be repurposed easily for others trying to achieve the same. 

## Styling
A different chapter is about how to make it look nice, I used [[TailwindCSS]], a great library, that has amazing video tutorials to quickly get started. The actual style for the website is stored on a separate file that later I use when rendering the pages. The process is a bit manual, separating the template from the notes, but in principle it is something that happens only once or rarely.

I wanted to have links that are easy to follow, and therefore I opted to having a different underline color depending on whether they are internal or external links. I also wanted to give a predominant position to the backlinks (see: [[why backlinks are the core of my digital garden]]). Some things I've learned about TailwindCSS:

- [[How to setup gulp to minify the style file]]
- [[How to make cool underlines for links with TailwindCSS]]
- [[The prose plugin of TailwindCSS is a great addition for people like me]]

## Deployment
Since the output of the program is a collection of HTML files, I thought about giving [[netlify]] a try. I've heard many good things, and they are specialized in this type of situations. One of the nicest things about [Netlify](https://www.netlify.com/) is that it's setup process is straightforward. 

**Some things to note about the process**: Some dependencies of my static website generator can't be installed via the ``setup.py`` file, so I had to add a ``requirements.txt`` file to ensure that dependencies are installed first, and then the package itself. I also had to add a ``runtime.txt`` file to specify the Python version, or it would default to Python 2. 

## Comments
I thought for a while whether I should [[add comments to a digital garden]] or not. I opted for using a library called **utterances**, that allow using Github issues as a commenting platform. I still liked the approach of **staticman** better, because comments become files in a repository, with all the added benefits of portability. 

The only problem with staticman was the amount of spam I was receiving, and didn't particularly fancy the idea of having a Recaptcha sniffing information on my users. I may try to implement a custom solution.

## Microformats
The last feature I want to point out of this website is that I tried to implement [Microformats](https://microformats.org) in order to make the content more parseable by engines. I accept [[webmentions]] although they are not displayed on the pages, yet. I am still experimenting with the different options, but I do like the idea of having [[backlinks across domains]]. If I may be allowed to continue with the garden metaphor, Webmentions are a way of pollinating species in different gardens.  