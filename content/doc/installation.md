---
type: doc
layout: doc
title: Installation
lang: en
adstera: true
monetag: true
sitemap: true
url: /doc/installation.html
---


This page contains all the instructions for installing LiteGapps in various modes, make sure you follow the steps correctly.

# Install

## 1. MAGISK Module Only [MAGISK]

Even though this is only [MAGISK] mode, you can install it anywhere, for example via: Magisk Manager, TWRP, Orangefox and others as long as Magisk and its components have been installed.

### Device A Only

- Reboot recovery
- Install rom
- Install Recovery
- Install magisk.zip
- format data/wipe (if necessary)
- Reboot system
- Install magisk.apk
- Open Magisk Manager
- Reboot system/OS
- Open magisk manager and install litegapps
- Reboot




### Device A/B partition

- Reboot Recovery
- Install rom
- Install Recovery
- Reboot Recovery
- Install Magisk.zip
- Format Data (If necessary)
- Reboot system/OS
- Install Magisk apk
- Open magisk manager apk
- Reboot System/OS
- Open Magisk manager And install litegapps
- Reboot system/OS



## 2. KSU Module Only [KSU]


Even though this is only [KSU] mode, you can install it anywhere, for example via: KSU Manager, TWRP, Orangefox and others as long as Kernelsu and its components have been installed.


### Device A Only

- Reboot recovery
- Install rom
- Install Recovery
- format data/wipe (if necessary)
- Reboot system
- Install KSU apk
- Open KSU app
- Reboot system
- Open KSU Manager and install litegapps flashable zip
- Reboot OS




### Device A/B partition

- Reboot Recovery
- Install rom
- Install Recovery
- Reboot Recovery
- Format Data (If necessary)
- Reboot system
- Install KSU apk
- Open KSU manager app
- Reboot System
- Open KSU manager and install litegapps
- Reboot system



## 3.Recovery Only [RECOVERY]

Even though this is only [recovery] mode, you can also install it in various places such as Magisk Manager, KSU Manager and custom recoveries such as TWRP, OrangeFox, Lineage Recovery.  but this only confers to recovery mode.

### Device A Only
- Reboot Recovery
- Wipe or format data
- Install rom
- Install litegapps
- Reboot system/OS


### Device A/B partition

- Reboot recovery
- Install rom
- Install Recovery
- Reboot Recovery
- Format Data (If necessary)
- Install LiteGapps
- Reboot system/OS

## 4. Magisk Module | KSU module | Kopi Module (RECOVERY) [AUTO]
### If you want to install it as a magisk module
#### Device A Only
- Wipe
- Install rom
- Install magisk
- Install Litegapps
- Reboot


#### Device A/B partition
- Reboot recovery
- Install rom
- install recovery
- reboot recovery
- Install magisk.zip
- format data/wipe (if necessary)
- Reboot system
- Install magisk.apk
- Open Magisk Manager
- Reboot system/OS
- Open magisk manager and install litegapps
- Reboot system/OS
- Install litegapps
- Reboot

### If you want [AUTO] to be installed as a ksu module

#### Device A Only
- Wipe /data partition
- Install rom
- intall gapps (if necessary)
- reboot system
- Install ksu apk
- open ksu app
- reboot system
- open ksu app
- Install Litegapps
- Reboot System


#### Device A/B partition
- Reboot recovery
- Install rom
- install gapps (if necessary)
- install recovery
- reboot recovery
- format data/wipe (if necessary)
- Reboot system
- Install ksu apk
- Open ksu app
- Reboot system/OS
- Open ksu manager and install litegapps
- Reboot system
- Reboot

### If you want to install it without magisk
#### Device A Only
- Wipe
- install rom
- install Litegapps
- install magisk (if you want to install magisk)
- reboot

#### Device A/B partition
- Reboot recovery
- Install rom
- Install Recovery
- Reboot Recovery
- Format Data (If necessary)
- Install LiteGapps
- Reboot system/OS



### Notes

1. [AUTO] which is converted to a magisk module or ksu module (systemless) makes it not work fully 80%, this will cause small problems such as synchronizing Google contacts and others.

2. You can do the uninstaller in any mode, but Google applications such as YouTube, Google Chrome, Google Keyboard will experience several problems such as force close and other problems, so we recommend deleting the updated application first before uninstalling LiteGapps.

3. You can install [MAGISK], [KSU], [RECOVERY], [AUTO] via Magisk Manager, Kernelsu manager or Recovery.

4. If you use **[AUTO]** and install magisk or kernelsu, you can force it to **[RECOVERY]** mode by adding an empty file ``/sdcard/force_kopi``.

5. Make sure that your ROM does not have gapps installed, if it is installed there will be a conflict in the system.


