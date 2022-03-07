import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';

import { toastController } from '@ionic/vue';

import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

export default function() {
  const handleToast = (message, isError = false, inAppNotification = false) => {
    toastController
      .create({
        message: message,
        position: "top",
        color: isError ? "danger" : inAppNotification ? "light" : "primary",
        duration: 2000,
      })
      .then((t) => t.present());
  };

  const registrationToken = ref()

  const pushNotificationToAdd = reactive({
    title: '',
    body: '',
  })

  const addPushListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      registrationToken.value = token.value
      console.info('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', async notification => {
      // Notification Definition
      
      console.log('Push notification received: ', JSON.stringify(notification));

      // Push notifications when in the foreground don't get triggered, so they must be handled by in-app logic. Local Notifications on android also don't have a display, so we create one.
      if (Capacitor.getPlatform() == 'android') {
        handleToast(`${notification.title}${notification.title && notification.body ? ' - ' : ''}${notification.body}`, false, true)
      }

      // TODO: Come up with a alphanumeric -> numeric conversion with no possible collisions
      // Converting an alphanumeric into a numeric. There are possible collisions here, but they're quite unlikely. 
      // In the event of a collision, another notification may be overwritten. 
      const convertedId = notification.id.split('').reduce((prev, next) => prev + next.charCodeAt(0))

      await LocalNotifications.schedule({
        notifications: [{
          id: convertedId,
          title: notification.title,
          body: notification.body,
          foreground: true,
        }]
      })
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

  const sendPushNotification = (notificationToSend) => {
    // Push Notifications are sent by making POST Requests to the server, and then are sent out to all relevant devices from there
    
      const nativeOriginUrl = ref('')

      if (Capacitor.getPlatform() == 'android') {
        nativeOriginUrl.value = 'http://localhost'
      } else if (Capacitor.getPlatform() == 'ios') {
        nativeOriginUrl.value = 'capacitor://localhost'
      } else if (Capacitor.getPlatform() == 'web') {
        // If this gives an issue, replace with environment variable/hard code a value
        nativeOriginUrl.value = window.location.origin
      }

      const proxyUrl = process.env.VUE_APP_PROXY_URL
      const apiUrl = process.env.VUE_APP_API_URL
      
      console.log('notificationToSend: ' + JSON.stringify(notificationToSend))

      const pushTitle = notificationToSend.title
      const pushBody = notificationToSend.body

      // Notifications must be in the format or else silent notifications will be sent
      const pushNotification = {  
        notification: {
          title: pushTitle,
          body: pushBody,
        }
      }

      const payload = {
        registrationToken: registrationToken.value, 
        message: pushNotification
      }

      // Access-Control-Allow-Origin is mandatory as this is a "Complex" request. This must match the "origin" in the CorsOptions in the backend, or it will fail the preflight.
      const headerOptions = {
        headers: { "Access-Control-Allow-Origin": nativeOriginUrl.value }
      }

      axios.post(`${proxyUrl}/${apiUrl}/firebase/notification`, payload, headerOptions).then(res => {
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
    pushNotificationToAdd,
    getDeliveredPushNotifications,
    sendPushNotification
  }
}