---
layout: doc
title: CPU Features
lang: eng
tagline: cpu
permalink: /doc/cpu.html
---

Android devices are powered by CPUs that vary in core count and processing power. The efficiency of these CPUs can significantly impact the performance and battery life of a device. This article explores how Android utilizes CPU cores for optimal efficiency.

### Multicore CPUs and Android Efficiency

Modern Android devices often feature multicore CPUs, which can improve efficiency by using less energy than a single-core processor. Multicore CPUs tend to experience fewer performance “snags,” such as freezing or slowing down

### Thermal and CPU Performance Optimization

The Android Dynamic Performance Framework (ADPF) allows for the optimization of games and performance-intensive apps. It provides APIs to interact with the power and thermal systems of Android devices, enabling developers to monitor and adjust performance based on thermal state management and CPU/GPU clock variability.

### CPU Performance Hints

ADPF offers CPU performance hints, allowing Android to choose the right CPU clocks and core types based on current demands rather than past workloads. This helps maintain performance without overheating the device

### Fixed-Performance Mode
For benchmarking purposes, ADPF enables a fixed-performance mode to obtain measurements that are not affected by dynamic CPU clocking. This mode ensures consistent performance during testing.

### Smartphone Processor Rankings
Processor rankings, such as those provided by NanoReview, offer insights into the performance ratings of various CPUs. These rankings can help users and developers understand which processors deliver the best efficiency and performance for their needs.

### Conclusion

Efficient use of Android CPUs is crucial for maintaining device performance and longevity. By leveraging multicore processors and utilizing frameworks like ADPF, developers can optimize their apps to run smoothly on a wide range of Android devices.

This article provides a general overview of how Android CPUs can be used efficiently. For more detailed information, you can explore the sources provided
