---
layout: doc
title: Memory Features
lang: eng
tagline: memory
permalink: /doc/memory.html
---

Memory is a critical resource in any computing system, and Android devices are no exception. Efficient memory management ensures smooth operation and optimal performance of applications. This article provides an in-depth look at how Android manages memory and offers insights for developers and users alike.

Android devices utilize several types of memory, each serving specific functions:

- RAM (Random Access Memory): This is the primary volatile memory used by applications and the system for temporary data storage during operation.
- zRAM (Compressed RAM): A portion of RAM that acts as swap space, where data is compressed to save space.
- Storage: Non-volatile memory used for persistent data storage, such as the file system and app data.

### Memory Pages and Low Memory Management

Memory in Android is organized into pages, typically 4KB each. The system categorizes these pages as free or used, with used pages further classified as cached, shared, or anonymous. In low memory situations, Android uses mechanisms like the kernel swap daemon and low-memory killer to manage the memory footprint of running processes.

### Conclusion
Android’s memory management system is designed to make the most efficient use of the device’s memory resources. By understanding how memory is allocated, managed, and optimized, both developers and users can contribute to the enhanced performance and longevity of Android devices.
