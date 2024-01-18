---
description:
title: News
lang: en
ads: true
url: /news.html
sitemap: true
---



This page contains every update and change of LiteGapps


## Update v3.0

### Android 14 support

 At the beginning of January we released the first Android 14 beta support in the release of Google Apps and gradually we released the beta version with several improvements which were reported on GitHub.  now we officially release stable android 14 support.

 This update will be immediately released to the four arm 32/64 bit x86 32/64 bit architectures and for the temporary variant we are only releasing the lite variant but we will gradually add the supported variants.

### KernelSU support

 The Android community is back with a powerful Android root application, namely Kernesu, this has a different way of working from other root applications. It runs in the main kernel environment with a special kernel patch code in the source.

 Unfortunately, this is still considered new and only supports a few devices, however, it has a system similar to the Magisk root application, namely using a systemless system as the module installer.
LiteGapps

 We added installer support and full system support with the kernelsu module and make sure to download the latest version of the ksu app to install.

### We are returning the old feature, namely installing packages via the Litegapps controller

 We have removed this feature a long time ago, due to user requests we have added a feature for installing addon packages online or online via the LiteGapps controller.

 but we delete the installation in non-systemless mode, because the latest devices only support read only partitions, systemless is the key to installing into the system.

 This means it will be installed via the Magisk system module and Kernelsu module.
 
### Addon

#### New System Installation

We have added support for systemless and non systemless installation systems by entering ``[MAGISK]`` ``[KSU]`` ``[RECOVERY]`` ``[AUTO]`` mode, this means users can now perform  into any mode.  previously it was just ``[AUTO]`` mode.

#### New Additions

We have added some new addons implemented from google pixel 8 pro. beberapa fitur dari gopix 8 pro mungkin akan tersedia di ponsel anda jika anda manginstall addon do android 14.

#### New Update app

We have thoroughly updated the addon updates based on Gopix 8 Pro, but we have not ported some apps yet.  As time goes by you will continue to update the Android 15 addon continuously and don't always check the addon for updates.

updating requires a total cleanup of the /data partition, we recommend doing a backup before doing a clean flash.

#### Update from magisk

We fixed the update via Magisk which doesn't work in older versions, only version 3.0 and above can update.  so you must update if you are using version 3.0 and below.


## Note

- The KSU installation system is still being tested, maybe in some versions there will be some minor problems.
- For the time being we are only adding **lite** and **core** variants to Android 14, gradually we will add other variants.
- **litegapps++** is still actively under development, although we have not yet released it to the public.
- Contact Us if you find any errors in the v3.0 update.
