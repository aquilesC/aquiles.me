# git as a commenting platform
It is possible to use plain text files, versioned through git as a commenting platform. This is what [staticman](https://www.staticman.net) does. [[Thomas Jollans]] has implemented his own version using Flask, called [commie](https://tjol.eu/blog/commie.html). The biggest difference here is that Staticman relies on Github (not git) to create pull requests, while commie can directly commit to a repository (local or remote), effectively making it platform-agnostic. 

In any case, both services store the comment information as plain text files, which would make the comments durable over time and transparent. 

**Note**: Commie uses the combination of IP/Browser/E-mail to validate user's identity and allow for comment edits and publish without verification. [[Django-comments]] uses a similar approach (comments are sent by e-mail encoded with base64 to prevent hitting the database before verification). 

Tags: #git #commenting-system #discussions-website 