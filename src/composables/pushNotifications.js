import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

import { ref, onMounted } from 'vue';
import axios from 'axios';

export default function() {
  const registrationToken = ref()

  const addPushListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      registrationToken.value = token.value
      console.info('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    // TODO: Push Notifications aren't received if the app is open (at least on android) so they should probably be displayed in app for full coverage
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      // Notification Definition
      
        console.log('Push notification received: ', JSON.stringify(notification));
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }

  const registerPushNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      // throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
  }

  const getDeliveredPushNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', JSON.stringify(notificationList));
  }

  const sendPushNotification = async () => {
    // Push Notifications are sent by making POST Requests to the server, and then are sent out to all relevant devices from there

    // Notifications must be in the format or else silent notifications will be sent
    const pushNotification = {
      notification: {
        title: 'Push Notification Test',
        body: 'Hello from your native device!'
      }
    }

    axios.post('https://localhost:3000/firebase/notification', pushNotification).then(res => {
      console.log(res.data)
    }).catch(error => {
      console.log(error)
    })
  }

  onMounted(async () => {
    if (Capacitor.getPlatform() != 'web') {
      // Push Notifications don't work on web but there is a Push API for web
      // https://developer.mozilla.org/en-US/docs/Web/API/Push_API
      try {
        await addPushListeners()
        await getDeliveredPushNotifications()
        await registerPushNotifications()
      } catch(error) {
        console.log(error)
      }
    }
  })
  
  return {
    registrationToken,
    getDeliveredPushNotifications,
    sendPushNotification
  }
}