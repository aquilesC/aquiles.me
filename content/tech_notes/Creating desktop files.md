# Creating .desktop files
**Keywords**: #[[linux]] #[[AppImage]]

This is a quick tutorial on how to create ``.desktop`` files for ``AppImage`` programs so that you can have a shortcut in the activities panel, can pin it to the sidebar, etc, on [[gnome]]-based computers. 

I use [[Zettlr]] as an example, but it works with any other program. 

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

