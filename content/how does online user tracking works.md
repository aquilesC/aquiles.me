# How Does Online User Tracking Works
Every time you visit a website, the browser sends a bunch of information to the server that hosts the page. The information looks something like this:

```
3.235.137.159 - - [29/Sep/2020:05:23:21 +0000] "GET /things-ive-done/ HTTP/1.1" 200 4128 "https://www.aquicarattino.com/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0"
```

We get the IP address of the guest, from which we can quite accurately determine the location. We get the time of the visit and which page (``things-ive-done/``), and we also get the exact specifications of the browser the person was using: Firefox version 81 on Ubuntu, and whether it is a mobile or desktop device. We can also tell the user (me) arrived to the specific page from `https://www.aquicarattino.com/`, we know who referred them.

The example above is the bare minimum data that a website collects in their logs. If we include a [[tracking script]], we can go one step further. This is what I've done for [[Privalytics]]:

    var url = window.location;
    var document = window.document;
    var navigator = window.navigator;

    var data = {url: url.href};
    if (document.referrer) data.referrer = document.referrer;
    if (window.innerWidth) data.screen_width = window.innerWidth;
    if (window.innerHeight) data.screen_height = window.innerHeight;
    
The script collects who referred the user, and the screen size. Then, it sends that data to my own server. I will have access to the information I showed in the earlier example, plus whatever information my script can gather. I tried to be respectful and acquire only the essentials. 

So far, all what I have shown is passive, I am just collecting data. However, since I know the IP of the person, I can look at which devices are present with the same IP. I can tell someone has a Mac, an Iphone, or a Linux machine. I can also know when you upgrade to a newer phone, or when you go on holidays. 

If my tracking service is available in many websites, I will be able to know the kind of news (or porn) you consume, how long you stay on each page. I can tell if you go on dating sites, or the kind of products you like buying. And all of this is just by looking at your IP. It has some caveats such as that your IP can change, two people in the same house would get the same IP, etc. But overall it can be quite accurate. 