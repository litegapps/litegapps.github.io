---
description:
title: Documentation | LiteGapps
ads: true
lang: en
url: /doc.html
---


This page contains complete documents, please follow the steps and also notes so as not to use LiteGapps incorrectly.


## How To Fix Contact Not Sync

Version ``[MAGISK]``, ``[KSU]`` or ``[AUTO]`` converted into magisk, making Litegapps not working fully. this causes contact sync sometimes not working.

One "solution is you have to install the litegapps version ``[RECOVERY]`` it will work fully.

but there is an alternative way to solve this problem

### Sync with google contact


1. make sure you give all permissions to **Google play services (GMS)**.

2. First you have to download and install **Google Contact**

3. go to **android settings** then **Google Services And Preferences**

4. **Settings for google apps**

5. **Google contacts sync**

6. Enable **auto sync** and **sync device** in manage settings

7. **Settings > Account > Your Email Account Google > Acount Sync > Sync Now**.

8. Done

## How to Fix Google Drive Issue In Whatsapp


Version **``[MAGISK]``** **``[KSU]``** or **``[AUTO]``** converted into magisk, making Litegapps not working fully.This causes backup/restore not working (always login to google account,
One solution is you have to install the litegapps version **``[RECOVERY]``** it will work fully.


## Fixed app crashing with other gapps

We do not recommend that you install more than one custom Google App, this will cause conflicts in the Android application system, so we recommend deleting the old custom gapps by wiping the /data partition or reinstalling the custom ROM.

## Fixed Force close youtube, chrome, google keyboard

To fix the force close on Google apps because you uninstalled LiteGapps, you can install updates or wipe the /data partition.

## Fixed Play Store and Google Play Services not appearing

Play Store and GMS not appearing is caused by Google Apps not being compatible with your device, make sure you download and install it correctly and it is compatible with your device.

## Fix android not support error

This problem is caused because the zip version you are using does not match your device, so the Litegapps installer refuses installation for security reasons.

## Fix google canlender not sync

To fix the problem of calendar sync not working, this can be done easily by changing the AOSP calendar to Google Calendar.  You can download it on Play Store or you can download LiteGapps addon on SourceForge.

## Fix bootloop in crdroid rom

CDroid custom ROMs have a different system configuration from other custom ROMs, to overcome this you can download patch fix.zip at sourceforge.  You can install it via Magisk or Recovery.

## Fix not display di miui china

Miui China does not provide Google Apps in its default ROM, so you can install LiteGapps on Miui China with a special version of Miui and this version is not official so it is rarely updated.

## How to open litegapps controller

To open LiteGapps is quite easy,

1. First, make sure you have installed the Termux application
2. Open termux app
3. Give the termux app root permission with ``su``
4. then ``litegapps``

then you will enter the LiteGapps controller menu and you're done.

## How force recovery mode

Litegapps uses a sophisticated installer so you can use several modes with one flashble.

To do this, simply add an empty file with the name ``/sdcard/force_kopi``.

## How to insall in adb sideload

litegaps supports installation via ``sideload`` on mobile and desktop, the method is quite easy, you just type into the terminal ``adb sideload name_file.zip`` then enter.  The installation process will start and wait for it to finish.

## How to update litegapps

To update LiteGApps, you have to cleanly delete the old LiteGapps, by installing the flashable zip twice.  After deleting the old version, you can install the latest version.


