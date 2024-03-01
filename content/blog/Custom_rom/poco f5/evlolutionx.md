---
type   : blog
title  : Custom ROM Evolution X Poco F5 Android 14 Official
date   : 2024-02-27T09:17:35+07:00
slug   : evolutionx-marble
categories: [Custom Rom]
tags      : [aosp]
keywords  : [Custom Rom]
author : wahyu6070
---


Download custom rom Evolution X POCO F5 Android 14 for android 14 marble

## Device changes

- Add OnePlus Dolby app
- Remove support for high touch polling rate (causing touch issues)
- Switch back to Silvercore kernel
- configs: wifi: Disable FW TWT
- overlay: improve signal reception
- props: Remove Force triple frame buffers

## Notable ROM changes

- Always allow overriding the number of work profiles
- Boost process priority during fork.
- CEC: correct frameworks physicalAddress parsing
- EvolutionUtils: Refactor isPackageInstalled method
- Fix judgment logic of DisplayDeviceConfig#loadSdrHdrRatioMap.
- Fix race condition in process observer
- KeyStore: Update local attestation spoofing
- LocalImageResolver: Stop the spam
- Make sure we'll always kill process group
- PixelPropsUtils: Clean up and minor fixups
- Reduce some redundant steps
- ScreenOffAnimation: Fix system animation disable check
- Settings: Deviceinfo: Extend Battery info page
- Settings: Phone ringtone setting for Multi SIM device
- SystemUI: Forward port 'HD & wifi calling statusbar icons'
- UserDataPreparer: be more careful about auto-deleting data on error
- core: BatteryManager: Add few more Battery broadcast intents
- core: Enable force disable nav bar config by default
- restore Android 13 "pause work profile" behavior


## Notes

- Update to HyperOS firmware first then flash the ROM after.
- Always dirty flash at your own risk. If your device bootloops, revert to an older build that boots.
- Install KSU zip or Magisk for root.
- Play Integrity passes by default (As of 02/23/2024).
- Uses Silvercore kernel
- Includes Dolby Atmos, Dolby Vision, Dirac Sound, Viper4AndroidFX, Leica camera.
- Credits to YukongA, AkaneTan, Saikiran, GR, Chaitanya.


## Link

[Download](https://evolution-x.org/device/marble)
