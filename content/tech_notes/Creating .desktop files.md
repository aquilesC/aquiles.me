# Creating .desktop files
**Keywords**: #[[linux]] #[[AppImage]]

1. Create a file like zettlr.desktop in ~/.local/share/application with the following::
```
  [Desktop Entry]
	  	Type=Application 
  Name=Zettlr
  Icon=/usr/share/icons/zettlr.png
  Exec=/home/aquiles/Programs/Zettlr.AppImage
  Terminal=false
  StartupWMClass=zettlr
```
2. To know the StartupWMClass, you need to run ``xprop WM_CLASS`` and click on the window. This is very important, or Ubuntu fails at knowing that it is actually a window running
3. To extract the icon from man AppImage: ``./Zettlr.AppImage --appimage-extract``
       Where to put it is not that important.

