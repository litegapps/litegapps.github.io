---
type : doc
title : Config
lang : en
url: /doc/config.html
---



We provide configuration to regulate which packages the user will install and can activate or deactivate features in LiteGApps.
## Download 

[Click here](/download.html)

## Path
move the configuration file **litegapps.config** to **/sdcard/litegapps.config**

or if your partition cannot be read, you can also place it in:

**/data/litegapps.config**

**/data/media/0/litegapps.config**

**/dev/litegapps.config**

**/system/litegapps.config**

## How To use
Edit the configuration file using a text editor.

### Enable
name package=true

#### Example
GoogleServiceFramework=true



### Disable
name package=false

#### Example
GoogleServiceFramework=false




