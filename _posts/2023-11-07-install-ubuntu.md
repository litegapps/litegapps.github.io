---
layout: blog
title:  How To Install Ubuntu In Termux Android
date:   2023-11-07 11:02:07 +0100
description: Termux is a powerful terminal emulator app that allows you to run Linux commands and programs on your Android device
lang: en
categories: android
---



Termux is a powerful terminal emulator app that allows you to run Linux commands and programs on your Android device. With Termux, you can turn your Android device into a mini Linux computer and do various tasks, such as coding, hacking, pentesting, and more. One of the cool things you can do with Termux is to install Ubuntu, a popular and user-friendly Linux distribution, on your device. This way, you can enjoy the features and benefits of Ubuntu without rooting your device or using a virtual machine.

In this article, we will show you how to install Ubuntu in termux android, We will guide you through the steps and requirements, and help you troubleshoot some common issues. By the end of this article, you will be able to run Ubuntu on your termux app and use it for your projects and experiments.

## Requirements

Before you start, you will need the following:

- An Android device with at least 2 GB of RAM and 5 GB of free storage space.
- A stable internet connection.
- The Termux app installed on your device. You can download it from the Google Play Store or the F-Droid Store.
- The wget, curl, and proot packages installed on your termux app. You can install them by running the following command in termux:

    pkg install wget curl proot -y

## Installation

To install Ubuntu in termux android, you will need to download and run a script that will automate the process for you. The script will download the Ubuntu image, extract it, configure it, and create a start script for you. There are several scripts available on GitHub, but we will use the one created by dylanmeca³, as it is simple and updated. Here are the steps to follow:

- Open the termux app and make sure you are in the home directory. You can do this by running the following command:

    cd ~

- Download the script by running the following command:

    wget 

- Make the script executable by running the following command:

    chmod +x install.sh

- Run the script by running the following command:

    ./install.sh

- Wait for the script to finish. It may take some time depending on your internet speed and device performance. You will see some messages and prompts on the screen. Just follow the instructions and enter the required information, such as your username and password for Ubuntu.

- Once the installation is finished, you can start Ubuntu by running the following command:

    ubuntu

## Usage

After you start Ubuntu, you will see a terminal prompt like this:

    user@localhost:~$

This means that you are now in Ubuntu and you can run any Linux command or program you want. For example, you can update and upgrade your Ubuntu system by running the following commands:

    sudo apt update
    sudo apt upgrade

You can also install any package or software you need by using the apt command. For example, you can install the nano text editor by running the following command:

    sudo apt install nano

You can also access the files and folders on your Android device by going to the /sdcard directory. For example, you can list the files on your internal storage by running the following command:

    ls /sdcard

You can also copy, move, delete, or edit any file or folder on your Android device by using the Linux commands. For example, you can create a new file on your internal storage by running the following command:

    touch /sdcard/test.txt

## Troubleshooting

Sometimes, you may encounter some issues or errors when installing or using Ubuntu in termux android. Here are some common problems and solutions:

- If you get an error message that says "Fatal Kernel too old" when you start Ubuntu, you need to edit the start script and add a parameter to the proot command. To do this, open the start script by running the following command:

    nano startubuntu.sh

- Then, find the line that starts with "command+=" and add "-k 4.14.81" at the end of the line. It should look like this:

    command+=" -k 4.14.81"

- Save and exit the file by pressing Ctrl+O and Ctrl+X. Then, try to start Ubuntu again by running the following command:

    ubuntu

- If you get an error message that says "groups: cannot find name for group ID" when you start Ubuntu, you need to add the missing groups to your Ubuntu system. To do this, run the following commands in Ubuntu:

    sudo groupadd --gid 20305 permagrp5
    sudo groupadd --gid 50305 permagrp6

- If you have any other issues or questions, you can check the GitHub page of the script³ or the Termux wiki² for more information and help.

## Conclusion

In this article, we have shown you how to install Ubuntu in termux android, based on the web search results from Bing¹. We have explained the requirements, the installation steps, the usage, and the troubleshooting tips. We hope that this article has helped you to install and use Ubuntu on your termux app and enjoy the power and flexibility of Linux on your Android device.

