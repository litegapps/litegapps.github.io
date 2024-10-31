---
type : doc
title : Packages Documentation
lang : en
url : /doc/packages
---



## Core
### Common (Main components)
set google apps permissions

### Gms Core (Google Play Services) (Main Components)
GMS Core, or Google Mobile Services Core, is a collection of libraries and services developed by Google that forms the foundation for many apps and functionalities on Android devices. Though it works behind the scenes, GMS Core plays a crucial role in the overall Android experience.

#### Main Functions
 * Provides APIs: GMS Core provides Application Programming Interfaces (APIs) that app developers use to access various Google services, such as:
   * Location: Allows apps to access the device's location, essential for apps like Google Maps, navigation, and other location-based services.
   * Authentication: Facilitates signing in to Google accounts and user authentication across different apps.
   * Cloud Messaging: Supports cloud messaging for push notifications and data synchronization.
   * Payments: Integrates Google Pay for in-app payments and online transactions.
   * Advertising:  Displays personalized ads in apps through Google AdMob.
 * Updates Google Services: GMS Core is responsible for downloading and installing updates for Google Play services and other Google apps.
 * Enhances Performance: Optimizes device and app performance by providing efficient libraries and services.
 * Ensures Compatibility: Helps ensure compatibility between apps and Google services across different Android devices.
#### Uses
 * Access to Google Services: GMS Core enables users to access a wide range of popular Google services, such as Gmail, Google Maps, YouTube, and the Google Play Store.
 * Better User Experience: Contributes to a better user experience by providing essential functionalities for many apps.
 * Easier App Development: Provides APIs that make it easier for developers to integrate Google services into their apps.
 * Consistent Android Ecosystem: Helps create a more consistent Android ecosystem by ensuring compatibility across different devices.

 
### Google Play Store (vending) (Main Components)
The Google Play Store, often referred to as the Play Store, is the official digital distribution platform for applications, games, and other digital content developed by Google for Android devices. The Play Store serves as the primary app store where users can browse, download, and update apps and games.

#### Main Functions
 * App Distribution: The Play Store provides a platform for developers to distribute their apps and games to millions of Android users worldwide.
 * App Discovery: Allows users to easily discover new apps and games through categories, rankings, reviews, and personalized recommendations.
 * App Updates: Facilitates automatic or manual updates for installed apps and games, ensuring users have the latest versions with the newest features and bug fixes.
 * Purchasing and Payments: Supports the purchase of paid apps, in-app purchases, and subscriptions, with various payment options like credit cards, debit cards, and digital wallets.
 * App Management: Enables users to manage installed apps and games, including installing, uninstalling, and updating apps.
 * Digital Content: Offers other digital content, such as books, movies, music, and TV shows, which can be purchased or rented.
 * Reviews and Ratings: Provides a platform for users to leave reviews and ratings on apps and games, helping other users make informed decisions.
#### Uses
 * Access to Millions of Apps: The Play Store gives users access to millions of apps and games, covering a wide range of categories like productivity, entertainment, education, and more.
 * Ease of Use: Offers a user-friendly interface that is easy to navigate, allowing users to easily find and download the apps they need.
 * Security: Google Play Protect, a built-in security feature of the Play Store, scans apps for malware and other security threats, protecting users from harmful apps.
 * Up-to-Date Apps: Ensures that users have the latest versions of their apps and games, with the newest features and bug fixes.
 * Entertainment: Provides access to a variety of digital content for entertainment, such as books, movies, and music.

### Google Framework Services (Main Components components)
Google Services Framework, often shortened to GSF, is a crucial system component on Android devices that acts as a bridge between Android applications and Google services. GSF works behind the scenes to ensure apps can seamlessly access and utilize various Google services.

#### Main Functions
 * Authentication and Authorization: GSF manages the process of signing in to Google accounts and grants authorization to apps to access Google services based on user-granted permissions.
 * Data Synchronization:  Facilitates data synchronization between apps and Google services, such as contacts, calendars, and other app data.
 * Cloud Messaging Delivery: Receives and processes cloud messages from Google, including push notifications and messages for data synchronization.
 * Google Service Updates: Assists in downloading and installing updates for Google Play services and other Google apps.
 * API Management: Provides access to various Google APIs that apps use to access Google services, such as Google Maps, Google Drive, and others.
#### Uses
 * Access to Google Services: GSF enables apps to connect to and utilize a wide range of Google services, enhancing functionality and user experience.
 * Data Synchronization: Ensures that user data remains synchronized across different devices and apps, improving convenience and productivity.
 * Push Notifications:  Receives push notifications from apps and Google services, delivering timely information and important updates.
 * App Updates: Helps keep Google apps up-to-date with the latest features and bug fixes.
 * App Development:  Makes it easier for developers to integrate Google services into their apps, enhancing app functionality and appeal.


### Carrier services
Carrier Services is an Android app developed by Google. Its main function is to support RCS (Rich Communication Services) in the Google Messages app.

**Here are some of the functions of Carrier Services:**

* **Enables RCS features:** Carrier Services allows users to use RCS features such as:
    * Richer messaging: Send messages with images, videos, and large files.
    * Typing indicators: See when someone is typing a message.
    * Read receipts: Know when a message has been read.
    * Enhanced group chats: Easily add and remove people from group chats.
* **Improves call quality:** Carrier Services can improve the quality of voice and video calls over Wi-Fi or mobile data networks.
* **Provides additional services:** Carrier Services can be used by mobile carriers to provide additional services such as Wi-Fi calling and VoLTE (Voice over LTE).

**It's important to note that:**

* Carrier Services does not collect or share user data.
* The availability of RCS features depends on the mobile carrier and the device being used.

**If you're experiencing issues with Carrier Services, here are some things you can try:**

* Make sure the Carrier Services app is updated to the latest version.
* Check if your mobile carrier supports RCS.
* Try restarting your device.
* Clear the cache and data for the Carrier Services app.


### Carrier Setup
Carrier Setup on Android devices functions to configure mobile network operator settings so your device can properly connect to their network. This app is usually installed automatically on Android devices and works behind the scenes.

#### Uses of Carrier Setup
 * Activating carrier services: Carrier Setup allows mobile operators to activate various services on your device, such as voice calls, text messages (SMS), mobile data, Wi-Fi calling, VoLTE (Voice over LTE), and other services.
 * Configuring APN: This app automatically configures the Access Point Name (APN) needed for your device to connect to the operator's mobile data network. The APN contains information such as server address, authentication type, and other settings required for data connection.
 * Updating carrier settings: Mobile operators can use Carrier Setup to send network setting updates to your device. This allows them to improve network performance, add new features, or fix existing issues.
 * Providing operator-specific services: Some mobile operators use Carrier Setup to provide specific services or applications to their customers. For example, operator apps, multimedia messaging services (MMS), or other value-added services.
 
#### How Carrier Setup Works
Carrier Setup works by communicating with the mobile operator's servers. When you insert a SIM card into your Android device, Carrier Setup will automatically download and apply the necessary settings from the operator's server. This process usually happens in the background without requiring any user interaction.

#### Importance of Carrier Setup
Carrier Setup is crucial to ensure that your Android device can connect to the mobile operator's network correctly and access all available services. Without Carrier Setup, you may experience problems such as:
* Inability to make or receive calls
* Inability to send or receive text messages
* Inability to access the internet through mobile data
* Poor network performance
 
### Config Updater
ConfigUpdater on Android devices functions to automatically update device certificates. This app works behind the scenes and ensures your device certificates are always up-to-date.

#### Uses of ConfigUpdater
 * Updating Certificates: The main function of ConfigUpdater is to download and install the latest certificates from Google servers. These certificates are essential for various security and privacy functions on your device.
 * Enhancing Security: Updated certificates help protect your device from security threats such as malware, phishing, and man-in-the-middle attacks.
 * Ensuring Compatibility: ConfigUpdater ensures your device is compatible with the latest services and websites that require the latest security certificates.
 * Maintaining Privacy: Updated certificates help protect your privacy by encrypting communication between your device and servers.

#### How ConfigUpdater Works
ConfigUpdater periodically connects to Google servers to check for certificate updates. If new certificates are available, the app will download and install them automatically on your device. This process usually happens in the background without requiring any user interaction.

#### Importance of ConfigUpdater
ConfigUpdater plays a vital role in maintaining the security and privacy of your Android device. By ensuring your device certificates are always up-to-date, ConfigUpdater helps protect you from various online threats and ensures you can access the latest services and websites securely.

Example Cases:

* When you visit a website with an HTTPS connection, your browser uses certificates to verify the website's identity and encrypt your communication. ConfigUpdater ensures these certificates are up-to-date so you can browse the web safely.
* When you use a banking app, certificates are used to secure your financial transactions. ConfigUpdater ensures these certificates are up-to-date so your financial information remains protected.

### Google Calendar Sync Adapter
GoogleCalendarSyncAdapter on Android devices functions to synchronize calendar data between your device and your Google account. This app works behind the scenes, ensuring that events, reminders, and other calendar information are always up-to-date across all your devices.

#### Uses of GoogleCalendarSyncAdapter

 * Two-way Synchronization: GoogleCalendarSyncAdapter enables two-way synchronization between your device calendar and your Google account. This means that any changes you make on your device calendar will be reflected in your Google account, and vice versa.
 * Adding Events: When you add a new event on your device calendar or Google account, GoogleCalendarSyncAdapter will automatically sync it to other connected devices.
 * Updating Events: If you modify event details such as time, date, or location, those changes will be synced across all your devices.
 * Deleting Events: When you delete an event on one device, GoogleCalendarSyncAdapter will remove it from all connected devices.
 * Syncing Reminders: Reminders you set for calendar events will also be synchronized across all your devices.
 * Saving Storage Space: By storing calendar data in your Google account, GoogleCalendarSyncAdapter helps save storage space on your device.
 * Offline Access: Although GoogleCalendarSyncAdapter requires an internet connection for initial synchronization, once the data is synced, you can still access your calendar offline.
 
 #### How GoogleCalendarSyncAdapter Works
GoogleCalendarSyncAdapter runs in the background and periodically checks for updates in your device calendar and Google account. When it detects changes, the app will sync the data to ensure consistency across all devices.

### Google Contacts Sync Adapter
GoogleContactsSyncAdapter on Android devices functions to synchronize contact data between your device and your Google account. This app works behind the scenes, ensuring that your contact information, including names, phone numbers, email addresses, and other details, are always up-to-date across all your devices.

#### Uses of GoogleContactsSyncAdapter
 * Two-way Synchronization: GoogleContactsSyncAdapter enables two-way synchronization between your device contacts and your Google account. This means that any changes you make to a contact on your device will be reflected in your Google account, and vice versa.
 * Adding New Contacts: When you add a new contact on your device or Google account, GoogleContactsSyncAdapter will automatically sync it to other connected devices.
 * Updating Contacts: If you modify contact details such as phone numbers, email addresses, or addresses, those changes will be synced across all your devices.
 * Deleting Contacts: When you delete a contact on one device, GoogleContactsSyncAdapter will remove it from all connected devices.
 * Merging Duplicate Contacts: GoogleContactsSyncAdapter can help identify and merge duplicate contacts, keeping your contact list clean and organized.
 * Backing Up Contacts: By storing contacts in your Google account, GoogleContactsSyncAdapter helps back up your contacts, so you won't lose them if your device is lost or damaged.
 * Restoring Contacts: If you replace your device or reset your device, GoogleContactsSyncAdapter can restore your contacts from your Google account.
 * Offline Access: Although GoogleContactsSyncAdapter requires an internet connection for initial synchronization, once the data is synced, you can still access your contacts offline.

#### How GoogleContactsSyncAdapter Works:
GoogleContactsSyncAdapter runs in the background and periodically checks for updates in your device contacts and Google account. When it detects changes, the app will sync the data to ensure consistency across all devices.

###  Google Feedback
Google Feedback is an Android system component that allows users and developers to send feedback to Google about their experiences with Android devices, apps, and services.

#### Main Functions
 * Gathering Feedback: This component facilitates the collection of various types of feedback, including bug reports, suggestions, and diagnostic information.
 * Reporting Errors: When an app crashes or encounters an error, com.google.android.feedback can automatically generate a report containing information about the error, such as logs, stack traces, and device details.
 * Submitting Feedback: This component allows users to submit feedback directly through apps or through device settings.
 * Improving User Experience: The feedback collected through com.google.android.feedback is used by Google to improve the quality and stability of the Android operating system, apps, and services.

#### Uses
 * Reporting Bugs: Users can report bugs or issues they encounter while using apps or Android devices.
 * Providing Suggestions: Users can provide suggestions for improvements or new features they would like to see.
 * Helping Developers: Developers can use the feedback collected through com.google.android.feedback to identify and fix bugs in their apps.
 * Improving Android Quality: Google uses the collected feedback to improve the quality and stability of the Android operating system, apps, and services.

### One Time Initializer
One Time Initializer is an Android system component responsible for executing one-time initialization processes on Android devices, primarily during the initial device setup or after a factory reset.

#### Main Functions
 * Initial Setup: This component ensures that essential settings and configurations are applied correctly when an Android device is first powered on.
 * Google App Selection: com.google.android.onetimeinitializer can help users choose which Google apps they want to install during the initial device setup. This includes apps like Gmail, Google Maps, and YouTube.
 * Google Account Configuration:  Assists users in signing in to their Google accounts and syncing important data like contacts, calendars, and emails.
 * Google Services Setup:  Ensures that Google Play services and other essential services are configured correctly.
 * Device Optimization:  Can perform initial optimization tasks, such as optimizing storage and system updates.

#### Uses
 * Simplifying Initial Setup: com.google.android.onetimeinitializer streamlines the setup process for new or factory-reset devices by guiding users through essential steps.
 * Customizing User Experience: Allows users to select the Google apps and services they want to use, personalizing their Android experience.
 * Ensuring Proper Functionality: By executing essential initialization processes, this component ensures that the Android device functions correctly from the start.
 * Saving Time: Automates many setup tasks, saving users time and effort.

### Google partner setup
Google partner setup is an Android system component that facilitates the integration of Google services and features with apps and devices from other manufacturers. It plays a crucial role in ensuring compatibility and an optimal user experience across the Android ecosystem.

#### Main Functions
 * Integrating Google Services: com.google.android.partnersetup allows device manufacturers and app developers to integrate Google services, such as Google Play Services, Google Assistant, and others, into their products.
 * Device Configuration:  Assists in the initial configuration of Android devices, particularly those related to Google services. This can include setting up Google accounts, restoring data, and selecting default apps.
 * Updates and Enhancements: Facilitates the delivery of updates and enhancements for Google services and apps on devices from various manufacturers.
 * Customizing User Experience:  Enables device manufacturers to customize the user experience with Google services while maintaining consistency and compatibility.

#### Uses
 * Providing Access to Google Services: Ensures that users have access to a wide range of Google services on their devices, regardless of the manufacturer.
 * Improving Compatibility: Helps ensure compatibility between Google services and devices from different manufacturers, reducing potential issues and errors.
 * Simplifying Development: Provides tools and resources for device manufacturers and app developers to integrate Google services more easily.
 * Enhancing User Experience: Contributes to a better user experience by ensuring that Google services are seamlessly integrated and function properly across various devices.
 
 
### Google Restore
Google Restore refers to the Data Restore Tool on Android devices. This app, developed by Google, helps users restore data from an old phone to a new phone, either through a wired connection or cloud backup.

#### Main Functions
 * Data Transfer: Moves app data, contacts, call logs, SMS messages, and device settings from an old phone to a new phone.
 * Cloud Backup and Restore: Allows users to back up their data to Google Drive and restore it to a new device.
 * Wired Connection: Supports direct data transfer between devices using a USB cable.
 * Data Selection:  Gives users the option to select the types of data they want to transfer or restore.
 * User-Friendly Interface: Provides a simple and easy-to-understand interface for the data transfer process.
 
 #### Uses
 * Facilitates Switching to a New Phone: Helps users quickly and easily move their data to a new phone without losing important information.
 * Protects Data: Backing up data to the cloud protects user data if the phone is lost, stolen, or damaged.
 * Saves Time: Automates the data transfer process, saving users time and effort.
 * Restores Data After Factory Reset: Allows users to restore their data after performing a factory reset on their device.

### Google Pixel Setup Wizard
The Google Pixel Setup Wizard is an essential application that guides users through the initial setup process when they first turn on their new Pixel phone or after performing a factory reset.

#### Main Functions
 * Step-by-Step Guidance: The Setup Wizard provides easy-to-follow, step-by-step instructions, allowing users to effortlessly configure their Pixel phones.
 * Data Transfer:  Helps users transfer data from their old phones, whether Android or iPhone, to their new Pixel phone. This includes contacts, photos, apps, and more.
 * Google Account Connection: Guides users to sign in to their Google account, enabling access to various Google services like Gmail, Google Maps, and the Google Play Store.
 * Network Configuration:  Assists users in connecting to Wi-Fi networks and configuring cellular network settings.
 * Personalization: Allows users to customize their Pixel phone settings, such as wallpaper, themes, and notification preferences.
 * Security Setup: Guides users to set up security options like PIN, pattern, or fingerprint unlock to protect their device.
 * Feature Introduction: Introduces key features of the Pixel phone, such as Google Assistant, camera capabilities, and other Pixel-exclusive features.

#### Uses
 * Simplifies Initial Setup: The Setup Wizard streamlines the process of setting up a new Pixel phone by providing clear and concise guidance.
 * Saves Time: Automates many setup tasks, allowing users to quickly start using their new Pixel phone.
 * Easy Data Transfer: Facilitates the transfer of data from an old phone to a new Pixel phone, eliminating the need for manual data transfer.
 * Ensures Security: Helps users secure their Pixel phone by guiding them through setting up security options.
 * Maximizes Pixel Experience: Introduces key Pixel phone features, enabling users to take full advantage of their device's capabilities.

### Setup Wizard
A Setup Wizard is a common tool found in various devices and applications, especially on new or freshly installed ones. Its primary function is to guide users through the initial setup and configuration process.

#### Main Functions
 * Step-by-Step Guidance:  A Setup Wizard presents a structured and easy-to-follow series of steps, allowing users to easily complete the setup process.
 * Initial Configuration: Helps users configure basic device or application settings, such as language, network connections, user preferences, and accounts.
 * Data Transfer (if applicable): On some devices, like smartphones, the Setup Wizard can help transfer data from an old device to a new one.
 * Feature Introduction: Can introduce users to the main features and functions of the device or application.
 * Process Simplification: Reduces the complexity of initial setup by providing an easy-to-understand guide.

#### Uses
 * Assists New Users: Helps new users quickly learn and configure a device or application.
 * Saves Time: Automates some setup tasks and reduces the time required for manual configuration.
 * Prevents Errors: Minimizes configuration errors by guiding users through the correct steps.
 * Enhances User Experience: Creates a positive user experience from the start by providing a simple and efficient setup process.

## Gapps
### Flipendo
The Android Flipendo package is the package name for the Extreme Battery Saver app developed by Google.
The main function of Extreme Battery Saver (Flipendo) is to significantly extend battery life by limiting background app functions and activities.

#### Here are some of its specific uses and functions
 * Limits running apps: Flipendo allows users to select essential apps that can still run in the background. Other apps will be restricted to save power.
 * Turns off mobile data and Wi-Fi: When enabled, Flipendo can turn off mobile data and Wi-Fi connections when the screen is off, except for allowed apps.
 * Reduces screen brightness: Flipendo can dim the screen and disable the "Always-on Display" feature.
 * Restricts location usage: Location access for most apps will be restricted.
 * Delays syncing: Account and app data syncing will be delayed to conserve battery.

#### Main uses of Flipendo
 * Emergency situations: When the battery is low and you need the phone to stay on for an extended period, for example, during an emergency.
 * Long trips: When traveling and access to a charger is limited.
 * General power saving: If you want to significantly extend battery life in daily use.

### ArCore
ARCore is a platform developed by Google to build augmented reality (AR) applications. Simply put, ARCore enables Android devices to "understand" the world around them and place virtual objects in the real world through the camera.

#### Main functions of ARCore
 * Motion Tracking: ARCore tracks the position and orientation of the device as it moves, so virtual objects appear to stay in place in the real world.
 * Environmental Understanding: ARCore detects flat surfaces like floors and tables, allowing virtual objects to be placed on them realistically.
 * Light Estimation: ARCore estimates the lighting conditions in the environment, so virtual objects can be illuminated naturally and blend in with the real world.
 * Object Understanding: ARCore can recognize common objects in the real world, such as chairs, tables, and televisions.

#### Uses of ARCore
ARCore has many uses in various fields, including:
 * Entertainment: ARCore is used in popular AR games like Pokémon GO and other games that allow users to interact with virtual objects in the real world.
 * Shopping: ARCore allows users to "try on" products virtually before buying them, such as placing virtual furniture in their homes to see if it fits.
 * Education: ARCore can be used to create interactive and immersive learning experiences, such as displaying 3D models of human organs or exploring historical sites virtually.
 * Navigation: ARCore can be used to provide more intuitive and easy-to-understand AR directions, such as displaying virtual arrows in the real world to guide users to their destination.
 * Interior Design: ARCore allows users to visualize how furniture and decorations will look in their homes before purchasing them.

#### Examples of applications that use ARCore
 * Google Lens: Translates text, identifies objects, and provides information about objects in the real world.
 * Measure: Measures distances and dimensions of objects in the real world using the phone's camera.
 * Try Live: "Try on" makeup and accessories virtually.
 * IKEA Place: Place virtual IKEA furniture in your home.
With ARCore, developers can create innovative and engaging AR experiences in a variety of fields.


### Device Policy
Device Policy refers to a set of rules and settings applied to a device, such as a smartphone, tablet, or computer, to manage, secure, and control it.

#### Main functions of Device Policy
 * Security: Protects sensitive data by enforcing strong password requirements, device encryption, and access restrictions.
 * Management: Allows IT administrators to remotely manage devices, including installing and removing apps, configuring settings, and wiping data.
 * Compliance: Ensures devices adhere to industry standards and regulations, such as HIPAA or GDPR.

#### Uses of Device Policy
 * Corporate Environments: Device Policy is crucial in corporate environments to protect company data, ensure compliance with security policies, and manage employee devices.
 * Educational Institutions: Schools and universities can use Device Policy to restrict access to inappropriate content, manage app usage, and secure student data.
 * Personal Use: While more common in corporate settings, individuals can also use Device Policy to enhance the security of their devices, for example, by enforcing strong password requirements and device encryption.

#### Common Device Policy features
 * Password Management: Sets password complexity requirements, minimum length, and periodic updates.
 * Device Encryption: Encrypts data on the device to protect it from unauthorized access if the device is lost or stolen.
 * Application Restrictions: Blocks or allows specific applications on the device.
 * Remote Data Wipe:  Wipes data from the device remotely if it is lost or stolen.
 * VPN and Wi-Fi: Configures VPN and Wi-Fi settings for secure network access.
 * Device Restrictions: Restricts device features like camera, Bluetooth, or NFC.

### Settings Intelligence Google
SettingsIntelligenceGoogle is a component within the Android operating system developed by Google. It is responsible for providing intelligent and personalized features within the device's settings menu.

#### Main functions of SettingsIntelligenceGoogle
 * Provides setting recommendations: SettingsIntelligenceGoogle analyzes device usage patterns and user preferences to provide personalized setting recommendations.
 * Simplifies the settings menu: This component helps simplify the settings menu by displaying the most relevant options for the user at the top.
 * Improves user experience: SettingsIntelligenceGoogle aims to improve the user experience by making the settings menu easier to navigate and understand.

#### Uses of SettingsIntelligenceGoogle
 * Wi-Fi setting recommendations: For example, if you frequently connect to a particular Wi-Fi network, SettingsIntelligenceGoogle will recommend enabling auto-connect to that network.
 * Do Not Disturb mode recommendations: If you typically enable Do Not Disturb mode at certain hours, SettingsIntelligenceGoogle will recommend scheduling Do Not Disturb automatically.
 * Display setting personalization: SettingsIntelligenceGoogle can recommend screen brightness settings, font size, and dark mode based on your preferences.
 * Settings search: SettingsIntelligenceGoogle allows users to easily search for specific settings using keywords.

#### Benefits of SettingsIntelligenceGoogle
 * Improved user experience: A personalized and easy-to-navigate settings menu.
 * Efficiency: Users can quickly find and change settings.
 * Personalization: Device settings are tailored to individual needs and preferences.

