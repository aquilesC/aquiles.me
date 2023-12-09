# Get Time of First Commit of a File
In [[git]], to get the time of the first commit for every file in a directory, it is enough to run the following:

	$ git log --format=format"%ci" --name-only --diff-filter=A

Which will produce something like this:

    2020-10-03 15:06:25 +0200
    content/Dispertech.md
    content/things I've done.md
    
    2020-10-01 14:57:15 +0200
    static/14092.jpg
    static/Aquiles.jpg
    static/aquiles_square.jpg
    static/deardisya.ttf
    
    2020-10-01 12:21:03 +0200
    content/digital garden tos.md
    content/optimization.md
    content/there is more to data than what meets the eye.md
    content/what is a machine learning algorithm.md
    content/why backlinks are the core of my digital garden.md

The date and time of the commit and the files that were added. 

The important parts are: ``--diff-filter=A`` will only look at when files are added comparing one commit with the previous one. We can also use ``D`` to see deleted files, ``M``  for modified, or ``R`` for renamed. [The docs](https://git-scm.com/docs/diff-options) explain all the rest of choices. 

``--name-only`` will output the name of the files, while the ``--format`` decides how to output the information. Out of the box, we have these choices: 

- oneline 
- short
- medium
- full
- fuller
- reference
- email
- raw

Or we can specify our own formatting, by making use of [pretty formats](https://git-scm.com/docs/git-log#_pretty_formats). Some examples would be:

	%ci
Commit date
	
    %cn
Committer name

	%s
Commit subject (the message)




