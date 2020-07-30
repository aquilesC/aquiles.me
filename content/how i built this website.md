---
title: How I built this website using Python and Markdown
description: I created my own builder to parse my notes and create a beautiful static website
---
# How I Built this Website
The website is built on top of a collection of markdown files. These files are stored in my own computer and backed up and synchronized through [[Github]]. As an editor I use either [[Zettlr]] or [[Obsidian]]. There is a difference between my notes, which I keep private, and this public garden. Only some of the notes I take are moved to the public space. As you can imagine, I don't want to make public the phone numbers of my acquaintances. 

## The technology choice
Since I was building the website by rendering markdown files, I first thought in using a standard tool. I checked [Pelican](https://blog.getpelican.com/), because it is what I've used for other websites. However, it is a beast of a program, and just thinking in going through the process of configuring and adding custom plugins gave me a headache. [[Pelican]] has a lot of value, but not for my task at hand. 

I wanted to stay away from [[Jekyll]], since I don't fancy Ruby, nor their templating system. I also gave [GatbsyJS](https://www.gatsbyjs.org/) a try. It is without doubts a fantastic piece of technology. I also found the [Andy Theme](https://github.com/aravindballa/gatsby-theme-andy/) which gives a neat look to notes, and the [Brain Theme](https://github.com/aengusmcmillin/gatsby-theme-brain), which inspired the looks of the current design. 

However, if [[Pelican]] is a beast of a program, [[GatsbyJS]] is on a league of its own. I tried it for some days, but the entire [[Javascript]] toolchain associated is incredibly annoying. Dependencies that take up megabytes, endless configuration files. I just wanted something simple and quick. 

### Custom Static Builder
So, after thinking for a while, I decided to build my own custom website builder. [I've released it](https://github.com/aquilesC/static_website_builder) under a [[BSD]] license, because I think it can be used by others to learn. I built it using [[Python]], the core is straightforward: go through all the files, parse them, build a dictionary containing links and rendered content, write the files using [[Jinja2]] templates. 

To make it look nice, I used [[Tailwind]], a great CSS library, that has amazing video tutorials to quickly get started. The style for the website is stored on a separate file that later I use when rendering the pages. The process is a bit manual, separating the template from the notes, but in principle it is something that happens only once. 

## Deployment
Since the output of the program is a collection of HTML files, I thought about giving [[netlify]] a try. I've heard many good things, and they are specialized in this type of situations. One of the nicest things about [Netlify](https://www.netlify.com/) is that it's setup process is straightforward. I just had to create a ``requirements.txt`` file so it installed the dependencies, including my own website generator. You point it to the output folder and voilà. The website is live. 

!!! note 
	I had to tweak a bit the process in order to use the proper Python version, and some dependencies that do not work out of the box with the ``setup.py`` file but I don't understand why.
