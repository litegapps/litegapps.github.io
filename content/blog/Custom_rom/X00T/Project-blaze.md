---
type   : blog
title  : Download ROM Project blaze android 14 Asus Zenfone max pro m1
date   : 2024-02-12T09:01:35+07:00
categories: [custom rom]
tags      : [X00T]
keywords  : [projec blaze]
author : wahyu6070
---

# Project: Running Elixir on Custom ROM "Blaze" Android 14 on ASUS ZenFone Max Pro M1

## Introduction
Custom ROMs empower users to personalize their Android devices beyond the limitations of stock firmware. In this project, we embark on the journey of running Elixir, a functional programming language built on the Erlang VM, on a custom ROM called "Blaze" based on Android 14, specifically tailored for the ASUS ZenFone Max Pro M1.

## Prerequisites
1. ASUS ZenFone Max Pro M1 with an unlocked bootloader.
2. Custom recovery installed (such as TWRP).
3. Custom ROM "Blaze" based on Android 14 specifically for ASUS ZenFone Max Pro M1.
4. Basic understanding of the Elixir programming language.
5. Access to a computer with ADB and Fastboot installed.
6. Back up all important data, as unlocking bootloader and flashing custom ROMs will erase device data.

## Steps

### Step 1: Unlock Bootloader
Begin by unlocking the bootloader of your ASUS ZenFone Max Pro M1. Refer to ASUS's official documentation or community forums for detailed instructions specific to your device.

### Step 2: Install Custom Recovery (TWRP)
Flash a custom recovery like TWRP onto your device using Fastboot. Connect your device to your computer, boot it into Fastboot mode, and execute the following command:

```bash
fastboot flash recovery twrp.img
```

Replace `twrp.img` with the filename of the TWRP recovery image.

### Step 3: Boot into Recovery Mode
Boot your device into TWRP recovery mode by pressing the appropriate key combination during boot (usually Volume Up + Power button). Alternatively, you can use the following Fastboot command:

```bash
fastboot boot twrp.img
```

### Step 4: Backup Existing ROM (Optional but Recommended)
Before proceeding further, it's recommended to create a backup of your existing ROM from within TWRP. This backup serves as a safety net and allows you to revert to your original ROM if needed.

### Step 5: Wipe Data and Install Custom ROM "Blaze"
Navigate to the "Wipe" option in TWRP and perform a factory reset to wipe data, cache, and Dalvik cache. Once completed, return to the main menu, select "Install," and choose the custom ROM "Blaze" zip file you downloaded earlier. Confirm the flash and wait for the process to finish.

### Step 6: Reboot System and Set Up "Blaze" ROM
After successfully installing the custom ROM "Blaze," reboot your ASUS ZenFone Max Pro M1. Follow the on-screen instructions to set up the ROM, including configuring Wi-Fi, Google account, and other preferences.


## Conclusion
With the custom ROM "Blaze" based on Android 14 installed on your ASUS ZenFone Max Pro M1, combined with Termux and the Elixir programming language, you've unlocked a realm of possibilities for customization and development on your device. Explore the capabilities of Elixir and unleash your creativity in building innovative applications and utilities tailored to your preferences. Custom ROMs like "Blaze" empower users to take full control of their Android experience and customize it according to their needs and desires.


# Download Link
[ROM](https://www.projectblaze.in/)


