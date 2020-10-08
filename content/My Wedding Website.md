# My Wedding Website
For our wedding we wanted to keep in touch with guests in a modern way. They were coming from different parts of the world and they were speaking different languages. That is why we decided to build a [custom-made website](https://github.com/aquilesC/camiyaqui/) that reflected ourselves. It is [[open source]] so you can go ahead and check it out! 

## Motivations
Having a personalized website for an important event such as a wedding was a conscious decision. We could have opted for the low-effort approach of having a Facebook group but...

1. At that time I was already trying to [[how I managed to quit Facebook|quit Facebook]]
2. We wanted full ownership of the event so that our [[user privacy online|guests privacy]] would be respected to the fullest
3. A proof of principle that [[a healthier internet]] is possible with a bit of ingenuity

## Core features

- Simple login based on a link shared by e-mail. ([[How to send verification e-mails with Django]])
- RSVP to confirm whether they were coming, if they were joining with a partner, had dietary restrictions, etc.
	![Screenshot of Cami y Aqui wedding website](/Pasted image 20201008161342.png)
- User-submitted photo albums
- *Contact us* through a simple form and the message would reach our e-mails
- Multilingual support (in Spanish and English)
- Backend for us to manage guests and send e-mails (like a self-hosted newsletter with custom filtering options)
- Daily backup of guestlist sent by e-mail as a CSV.

## Technological choices and comments
I used [[Django]] as a framework, and it made my life much easier. At the moment I didn't know [[Wagtail]] or I would have added it to manage the content and to update the guests. I made heavy use of Django translations in order to offer a seamless experience both to our guests from Argentina and from abroad. 

![](/wedding_photo_album 1.png)

To create photo albums I opted for a mixed approach, using a Django model to store the meta-information, but the photos themselves were uploaded to AmazonS3 via a Javascript program directly from the page. This allowed the simple website to handle simultaneous interactions instead of hanging on a single user. Also, the images were resized through an Amazon Lambda function when accessed for the first time and served via Cloudflare. 

Instead of relying on the Django Admin, I created a custom backend to see the guest list, update it, and send e-mails. This was my first approach at self-hosting a newsletter. I customized the filters (for instance, people who already confirmed). It also allowed us to write messages using Django templates, especially useful for conditional statements (such as gender differences in Spanish.) 

Didn't have enough time to add Celery in order to send the e-mails asynchronously, but as a personal project it was fine for us to wait for some seconds on a page while the server was sending e-mails one by one. 

The **design** was based on a freely available template. I think this was the best possible choice, or it would have taken an enormous amount of time to converge with the aesthetic decisions. Fonts, color palette, all was chosen for us. The only thing I regretted was that some elements were missing (little support for forms, for example), which meant we had to create them by hand and you can tell they don't merge 100% with the rest of the design choices. 

The last thing to mention about the website is that I also added the [[Django REST framework]] in order to be able to synchronize the data from the website to [[My Wedding App]]. 