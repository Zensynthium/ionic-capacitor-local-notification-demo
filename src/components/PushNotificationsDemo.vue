<template>
  <div class="ion-padding">
    <h1><u>Push Notification Component</u></h1>
    <ion-item>
      <!-- While you wouldn't want to give anyone your token for security purposes, this is useful for testing. -->
      <!-- Registration tokens are only on native devices, so there is none for web -->
      <!-- TODO: Remove this in production -->
      <ion-label>Registration Token: {{ registrationToken }}</ion-label>
      <!--  -->
    </ion-item>
    <h2>Location Information</h2>
    <ion-item class="d-flex flex-column">
      
      <ion-list v-for="(value, name) in currentLocation" :key="value">
        <ion-label class="d-block"> <b>{{ name }}:</b> {{ value }} </ion-label>
      </ion-list>
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
  IonList, 
} from '@ionic/vue';

export default {
  name: "PushNotifications",
  components: {
    IonButton, 
    IonItem,
    IonLabel,
    IonList,
  },
  setup() {
    // const currentPort = location.port
    const currentLocation = window.location
    console.log(currentLocation)

    const { registrationToken, getDeliveredPushNotifications, sendPushNotification } = nativePushNotifications()

    return { registrationToken, sendPushNotification, currentLocation }
  }
}
</script>

<style>
  .flex-column::part(native) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 20px;
  } 
</style>