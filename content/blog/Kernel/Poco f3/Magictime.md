---
type   : blog
title  : Download MagicTime kernel alioth Poco F3
slug   : magictime-kenel-alioth
date   : 2024-02-15T09:17:35+07:00
categories: [kernel]
tags      : [magictime]
keywords  : [kernel]
author : wahyu6070
---

## Changelog

- Merged 4.19.304
- Merged Latest CLO tags from KAMORTA
- Merged Latest LineageOS changes
- added DTBO (check stability with it)
- Makefile: More optimizations for kryo385
- arm64: Makefile: Optimize for cortex-a77 with GCC
- Enable LTO/ThinLTO Forcefully 
- soc: qcom: msm bus: Remove events tracing
- soc: qcom: Remove tracing
- msm: msm_bus: Don't enable QoS
clocks when none are present
- smp: Make generic_exec_single() public
- drm/msm/dsi-staging: Fix transposed panel_switch and panel_post_switch
- scsi: ufs: Disable interrupt in clk-gating.
- scsi: ufs: Use WQ_HIGHPRI for gating work.
msm: kgsl: Avoid dynamically allocating small command buffers
- rcu: Fix a performance regression.
- drivers: thermal: Don't qualify thermal polling as high priority.
- disp: msm: Don't allocate memory dynamically for plane states
- drm/msm/sde: Don't allocate memory dynamically for CRTC atomic check
- xattr: Avoid dynamically allocating memory in getxattr
- drm/msm/sde: Skip heavy autorefresh checks when it's not enabled
- sched/rt: Change default SCHED_RR timeslice from 100 ms to 1 jiffy
- msm: kgsl: Don't try to wait for fences that have been signaled



## Download link

[click here](https://github.com/TIMISONG-dev/kernel_xiaomi_sm8250/releases/download/1.0.5r/MagicTime_2024-01-14_14-40-56.zip)
