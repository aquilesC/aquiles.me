# How to backup my data
I have been thinking a lot about how to keep my data safe. I have pictures, videos, documents, and programs I don't want to lose. I have seen people suggesting the famous [[3-2-1 backup plan]], but that goes beyond my possibilities, I just want to have a simple way of storing my personal data from my laptop in a reliable way. 

- So far I have been using one hard drive connected to a [[raspberry pi]], and I could backup by copying the contents of my home with ``rsync`` through the network. I do the same with my external hard drive. With this I have a more or less up to date version of my files on a separate hard disk which is [[encrypted with luks]].  
- I had a second external hard drive to which I was also copying the files with rsync. 

The problem with this approach is that all my data is at my place, and thus subject to burglary or disaster. To add an extra layer of safety, I decided to use [Backblaze](https://www.backblaze.com/) to backup the contents stored in the raspberry pi. It offers storage at $0.005/month/GB. It is cheaper than Amazon S3, but more expensive than Glacier Deep Archive. 

I still don't know if I should schedule a cron job from my raspberry or from my laptop to backup the data. The problem is that the first backup will take more than a week full-time, so I can just leave the raspi to do it. On the other hand, this only works if I am inside my house and I remember to copy the data to the raspi. 

See also: [[Installing and running Nextcloud on Raspberry Pi]]

