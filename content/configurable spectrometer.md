For a long time I wondered whether it was possible to have a system that would allow to acquire spectral information only at *some* wavelengths. 

Something like this can be achieved with a filter wheel and several band-pass filters (this is the [[NanoQNT]] approach). An AOTF could improve speed (and elegance) but it comes at implementation costs, since it would require some galvos to be added to the system. 

Another approach is what appeared on [[@gentner2023]], where a DMD is pre-programmed to direct specific wavelengths into a point (or a series of) detector. Switching ON/OFF spectral bands becomes only a matter of selecting which pixels of the DMD are "ON" or "OFF". 

I think this approach is very elegant, since it removes the requirement of "panel design" common to [[flow cytometer]]. In essence, a tunable spectrometer can have "infinite resolution", in the sense that is only optically limited and not filter-limited. Moreover, the arrangement of mirrors can be tuned based no optimal selection for discrimination without additional costs. 

At hundreds of pixels in SPAD-Arrays, they would be a massive improvement on current channel-limited, camera-based, multi-spectral flow cytometers. 