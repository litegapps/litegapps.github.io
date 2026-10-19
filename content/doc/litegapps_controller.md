---
type: doc
layout: doc
title: Lico (LiteGapps Controller) Documentation
language : en
adstera: true
monetag: true
url: /doc/litegapps_controller.html
---


**Lico** (formerly **LiteGapps Controller**) is the companion Android app for managing **LiteGapps** and **LiteGapps++**. It comes with a Material 3 interface with dynamic color, and it runs in both **root** (Magisk, KernelSU, APatch) and **non-root** mode.

> The old terminal-based flashable module (`su` → `litegapps`) has been discontinued. Its last release is **v1.3**. Lico replaces it as a regular Android app.

## Download
Get the latest APK from GitHub Releases:

<p><div class="MID"><a href="https://github.com/litegapps/litegapps-controller/releases/latest">Download Lico</a></div></p>

Source code: [github.com/litegapps/litegapps-controller](https://github.com/litegapps/litegapps-controller)

## Requirements
- Android **8.0** or newer
- Root is **optional**. Features marked with **(root)** need Magisk, KernelSU or APatch.

## Install
1. Download the latest `.apk` from the [Releases page](https://github.com/litegapps/litegapps-controller/releases/latest).
2. Open the APK and allow installing from unknown sources if asked.
3. Open **Lico**. On a rooted device, grant root access when the root manager asks.

## Features

### Play Integrity Doctor (root)
Checks your Play Integrity setup: **Play Integrity Fix**, **Tricky Store OSS**, **Yuri Keybox Manager**, **Zygisk**, and whether your keybox has been revoked. It includes an **auto-fix** option.

### Gapps Doctor (root)
Checks and fixes the core Google components: **Google Services Framework**, **Google Play services** and **Google Play Store**.

### Backup & Restore (root)
Back up and restore:
- Apps with their data
- OBB files
- Contacts and SMS
- Default apps

Backups can be saved to internal storage, an SD card or a USB OTG drive.

### Memory Doctor (root)
Frees up storage by cleaning caches, trash, leftover files, large or old files, and unused apps.

### Memory Speed Test
Measures the read/write speed of your RAM and storage.

### Boost, App Frozen & Battery Saver
Performance and power tools:
- **Boost**: stops background apps to free RAM and speed up your device.
- **App Frozen**: freezes apps you don't use.
- **Battery Saver**: lowers power usage.

### Modules & Addons (root)
Manage **Magisk**, **KernelSU** and **APatch** modules, and install **LiteGapps addons**, all from one place.

### Transfer File
Send files between two phones running Lico over **Wi-Fi Direct**, with no internet connection needed.

### Other Tools
- Device info
- Device props
- Gapps check

## License
Lico is licensed under the **BSD 3-Clause** license.
