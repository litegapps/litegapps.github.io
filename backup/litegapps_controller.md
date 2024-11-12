---
type: doc
layout: doc
title: LiteGapps Controller Documentation
lang: en
adstera: true
monetag: true
url: /doc/litegapps_controller.html
---


**LiteGapps Controller** is an additional feature of LiteGapps and LiteGapps++ which has many features that can be used by users.  Users can activate features such as **Boost**, **Battery Saver**, **Gms Dose**, **GPU/CPU Tweaks**, **Download/Install Package** and of course many other features that can be used.  use.

## Download
<p><div class="MID"><a href="/download.html">Click Here</a></div></p>

## Install
You Can Install LiteGapps Controller in Recovery or magisk,apatch, and kernelsu app.

## How To Use
Open terminal (termux recomended)

``su``

``litegapps``

<img src="/img/lc1.png" class="img-fluid" alt="ss device info hw">


### 1. Boost
This will force stop the applications installed on your device and some of the default application list of Litegapps Controller.  So that it will reduce the use of RAM, battery and speed up your phone.</p>

#### Tips
Use this after booting or use it before playing games

### Gaming Mode
Before going into gaming mode, it is recommended that you install ``Device Info HW`` : 
<a href="https://play.google.com/store/apps/details?id=ru.andr7e.deviceinfohw&hl=in&gl=US&auao=false&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Ddevice+hw+info&pcampaignid=APPU_1_Jey2YYuhO9fXz7sPn7ePmA8">Google Play Store</a>

- Then open
- Go to the application menu
- See in the picture that is circled in red it is the name of the package</p>
	<img src="/img/device_hw.png" class="img-fluid" alt="ss device info hw">
	
### Gaming Mode 1
every 60 seconds the installed application will be forced to stop and will continue to be repeated until you stop

#### Stop
``Vol Down + z``

``CTRL + z (using termux)``

#### Add black list
Add an application blacklist, you can edit it using a text editor in ``/sdcard/android/litegapps/data/black_list_gaming1``

### Gaming Mode 2
This mode will disable applications installed on your device and some default lists <strong>Litegapps Controller</strong>This will reduce the use of ram, battery, CPU and your ping will be more stable because the internet connection only focuses on your game.  will not be disturbed by app notifications when playing games.

#### Enable/Disable
Select 1x = enable

Select 2x = disable

#### Add black list App
To add an application blacklist, you can edit it using a text editor in ``/sdcard/android/litegapps/data/black_list_gaming2``

### Gaming Mode 3
This mode will disable the apps that are in the list ``/sdcard/android/litegapps/data/black_list_gaming3``

#### Enable/Disable</h4>
Select 1x = enable

Select 2x = disable

#### Add list App
To add an application blacklist, you can edit it using a text editor in ``/sdcard/android/litegapps/data/black_list_gaming3``

## Baterry Saver
This will force stop installed apps on your device (same as a booster) and disable some Google Play Services components and also lower CPU and GPU performance.

### Enable/Disable
Select 1x = enable

Select 2x = disable

## Check Ping
Test ping : whether your connection is stable or not

