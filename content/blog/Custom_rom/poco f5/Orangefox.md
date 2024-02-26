---
type   : blog
title  : Download Orangefox Poco F5 marble
date   : 2024-02-11T09:17:35+07:00
categories: [recovery]
tags      : [orangefox]
keywords  : [orangefox]
---


## Changelog since R11.1_4 Beta

- Now MTP available after /data format (but all files will be removed after first boot)
- Fix NTFS mounting
- Fix OFRP splash preview on changed splash
- Some changes for decryption
- Some changes for /data format

## Full changelog:

- Attempt to fix format data issues
- Add system image flash/backup/restore support (see notes)
- Add more Russian translations to terminal
- Move Bluetooth and DSP partition backup to separate items
- Now MTP available after /data format (but all files will be removed after first boot)
- Fix NTFS mounting
- Fix OFRP splash preview on changed splash
- Update Magisk to 27.0
- Some changes for decryption

## Notes

- With this version, OFRP got system image flashing support (for GSI flashing in particular) and new auxiliary features. Check more info here
- Supports Android 13 and 14
- Still beta, so not all functions have been tested
- MTP works strangely, rarely files transferred from PC aren't saved after reboot

## Flashing Steps
Flash as a normal zip file in custom recovery or flash image in recovery (select Recovery image) or in fastboot:

``fastboot flash recovery_ab OrangeFox-R11.1_5-Beta-marble.img``

Image md5: be02b4411bdd2fb988a39adf149a876b

Zip md5: 6a07c4f0047002cbb9a40a6926814a91

## Download Link

[Click Here](https://github.com/Ctapchuk/android_device_xiaomi_marble-OFRP/releases/download/2024-02-10/OrangeFox-R11.1_5-Beta-marble.zip)
