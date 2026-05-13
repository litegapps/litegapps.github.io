---
type : doc
title : Disable Secure
language: en
url: /doc/disable_secure.html
---

You can disable security features like memory checking by adding an empty file ``disable_secure`` in :

```bash
/data/media/0/disable_secure
/sdcard/disable_secure
/sdcard1/disable_secure
/tmp/disable_secure
/cache/disable_secure
/data/disable_secure
/system/disable_secure
/product/disable_secure
/system_ext/disable_secure
```

## Example
Open Recovery Terminal

```bash
touch /cache/disable_secure
```

## Note
- Disabling the above security system may cause a bootloop if the memory is full. Some components or applications may not install because the partition is full.
