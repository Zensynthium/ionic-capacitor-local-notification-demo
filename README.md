# Ionic Capacitor Local/Push Notification Demo
This is a repository that showcases how to use the Local Notification & Push Notification Plugin from Capacitor to schedule notifications for mobile. It can still be tested on web, but it seems the notifications only trigger for mobile, so this should be paired with a web based notification system for full cross-platform coverage if that's what you're seeking.

https://developer.mozilla.org/en-US/docs/Web/API/Push_API

The main code is hosted in the composables folder with localNotfication.js/pushNotification.js being the main files, and ISO8201DateWithTimeZone.js supporting the localNotifications.js for compatibility with the ion-datetime component. It was set up to be modular as to easily integrate with any project.

https://capacitorjs.com/docs/apis/local-notifications

### Push Notifications
When using Ionic/Capacitor, the default origins are capacitor://localhost (iOS) or http://localhost (Android). Because of that when making API requests to https servers that don't have relaxed CORS (Cross Origin Resource Sharing) the request will always fail. To get around this, the setup uses 2 servers. One server is a proxy server (utilizing the cors-anywhere node.js library) that forwards the request to the server that creates the push notifications. The proxy server is whitelisted on the push notifiation server so the request gets through (whitelisting localhost doesn't work and allowing all origins '*' and/or null origins increases your attack surface dramatically, which is bad for security reasons).

See https://ionicframework.com/docs/troubleshooting/cors for more information on CORS in relation to Ionic/Capacitor

https://www.npmjs.com/package/cors-anywhere

https://capacitorjs.com/docs/apis/push-notifications
### Proxy Server Setup

### Push Notification Server Setup

