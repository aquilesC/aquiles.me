In order to perform [[nanoparticle tracking analysis]] on a set of images, one must locate the particles. 

There are different ways of locating bright spots on an image. In @crocker1996 they suggest using gray dilation because:

> It provides a clear implementation of the regional maximum selection criterion

The idea of gray dilation is that one replaces the each pixel by the maximum in a defined area. Therefore there is only one free parameter, the size of the sliding window. To locate the maxima one only needs to find those pixels in which the value of the gray dilation are the same as those of the original image. This procedure will locate any local maximum provided that the image is not saturating. It will also do not discriminate a single-pixel maximum and a proper blob. 

The results of the gray dilation are therefore first estimates.