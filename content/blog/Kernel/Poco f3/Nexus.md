---
type   : blog
title  : Download Nexus kernel alioth | Poco F3
date   : 2024-02-15T09:17:35+07:00
categories: [kernel]
tags      : [Nexus]
keywords  : [kernel]
author : wahyu6070
---

## Changelog

- Built with latest Neutron Clang + LTO + MLGO
- Merge tag 'LA.UM.9.12.r1-17600.04-SMxx50.QSSI14.0'
- Merged tag 'ASB-2023-12-05_4.19-stable' (4.19.300)
- Updated KernelSU (v0.7.2)
- Cleaned up display drivers (Reduces latency + fixes some AOD problems)
- Hardcoded zRAM size to 4GB
- Imported arm64 V8 ASM lz4 decompression acceleration
- Enabled polly optimizations & inline optimization
- Cleaned up UFS driver
- Cleaned up scheduler (CASS + PELT)
- Enabled WQ Power Efficient (Reduces battery usage)
- Implemented KCAL
- Avoid various dynamic memory allocations (To avoid overhead on that driver)
- Cleaned up and optimized defconfigs (Disabled useless debuggings and more)
- And alot more.

## Notes
- To use KernelSU just rename the kernel zip name to "-ksu" and its done! (Doesn't work with adb sideload)
- Miui not supported!

## Download link

[Click here](https://www.pling.com/p/1910526/)
