<template>
  <div class="ion-padding">
    <ion-item>
      <!-- While you wouldn't want to give anyone your token for security purposes, this is useful for testing. -->
      <!-- TODO: Remove this -->
      <ion-label>Registration Token: {{ registrationToken }}</ion-label>
      <!--  -->
    </ion-item>
    
    <ion-item>
      <ion-button @click="sendPushNotification()">Send Push Notification</ion-button>
    </ion-item>
  </div>
</template>

<script>
import nativePushNotifications from '@/composables/pushNotifications'

import { 
  IonButton, 
  IonItem,
  IonLabel, 
} from '@ionic/vue';

export default {
  name: "PushNotifications",
  componenets: {
    IonButton, 
    IonItem,
    IonLabel,
  },
  setup() {
    const { registrationToken, getDeliveredPushNotifications, sendPushNotification } = nativePushNotifications()

    return { registrationToken, sendPushNotification }
  }
}
</script>

<style>

</style>