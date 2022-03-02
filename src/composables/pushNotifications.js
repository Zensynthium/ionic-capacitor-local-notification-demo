import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

import { ref, onMounted } from 'vue';
import axios from 'axios';
// import { Http } from '@capacitor-community/http';

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
    
    const nativeOriginUrl = ref('')

    if (Capacitor.getPlatform() == 'android') {
      nativeOriginUrl.value = 'http://localhost'
    } else if (Capacitor.getPlatform() == 'ios') {
      nativeOriginUrl.value = 'capacitor://localhost'
    } else if (Capacitor.getPlatform() == 'web') {
      if (process.env.NODE_ENV === 'production') {
      // nativeOriginUrl.value = process.env.VUE_APP_CLIENT_URL
      } else {
        // Default port is 8080
        nativeOriginUrl.value = `http://localhost:${location.port}`
      }
    }
 
    console.log('Origin: ' + nativeOriginUrl.value)

    // Access-Control-Allow-Origin is mandatory as this is a "Complex" request. This must match the "origin" in the CorsOptions in the backend, or it will fail the preflight.
    const headerOptions = {
      headers: { "Access-Control-Allow-Origin": nativeOriginUrl.value }
    }

    const proxyUrl = 'https://zen-proxy.herokuapp.com/'
    const apiUrl = 'https://push-notification-test-server.herokuapp.com'
    
    const payload = {
      registrationToken: registrationToken.value, 
      message: pushNotification
    }

    axios.post(`${proxyUrl}/${apiUrl}/firebase/notification`, payload, headerOptions).then(res => {
      console.log(res.data)
    }).catch(error => {
      console.log(error)
    })

    // Example of a POST request. Note: data
    // can be passed as a raw JS Object (must be JSON serializable)
    // const options = {
    //   url: `${apiUrl}/firebase/notification`,
    //   headers: { "Access-Control-Allow-Origin": nativeOriginUrl.value },
    //   data: { 
    //     registrationToken: registrationToken.value, 
    //     message: pushNotification
    //   },
    // }
  
    // const response = await Http.post(options);

    // console.log(response)
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