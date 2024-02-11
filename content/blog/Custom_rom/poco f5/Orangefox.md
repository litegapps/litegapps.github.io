---
type   : blog
title  : Download Orangefox Poco F5 marble
date   : 2024-02-11T09:17:35+07:00
categories: [recovery]
tags      : [orangefox]
keywords  : [orangefox]
---


OrangeFox is a custom recovery project that aims to provide a fast, stable, and feature-rich experience for Android users. OrangeFox supports a wide range of devices, including the Poco F5, a mid-range smartphone with a 6.67-inch AMOLED display, a Snapdragon 778G processor, and a 64MP quad-camera setup.

## Features of OrangeFox for Poco F5

Some of the features of OrangeFox recovery for Poco F5 are:

- Based on TWRP 12.1
- Supports Android 12 and MIUI 13
- Supports decryption of data partition
- Supports backup and restore of vendor partition
- Supports OTA updates and incremental updates
- Supports Magisk, SuperSU, and addonsu
- Supports ADB sideload and MTP
- Supports gesture navigation and theme customization
- Supports screen lock and fingerprint authentication
- Supports MIUI OTA survival and disable DM-verity
- Supports built-in file manager and terminal
- Supports many languages and fonts

## How to install OrangeFox on Poco F5

To install OrangeFox recovery on Poco F5, you need to have an unlocked bootloader and a PC with adb and fastboot tools. You also need to download the latest OrangeFox zip file from [here](^3^) and copy it to your device's internal storage. Then, follow these steps:

- Boot your device into fastboot mode by holding the power and volume down buttons together.
- Connect your device to your PC via a USB cable.
- Open a command prompt or terminal window on your PC and navigate to the folder where you have the adb and fastboot tools.
- Type the following command to flash the OrangeFox recovery image:

`fastboot flash recovery orangefox.img`

- Once the flashing is done, type the following command to reboot your device into recovery mode:

`fastboot reboot recovery`

- Swipe to allow modifications and enter your lock screen password or PIN if prompted.
- Tap on the Install button and navigate to the folder where you copied the OrangeFox zip file.
- Select the OrangeFox zip file and swipe to confirm the installation.
- Once the installation is done, tap on the Reboot System button.

## Download Link

[Click Here](https://github.com/Ctapchuk/android_device_xiaomi_marble-OFRP/releases/download/2024-02-10/OrangeFox-R11.1_5-Beta-marble.zip)
