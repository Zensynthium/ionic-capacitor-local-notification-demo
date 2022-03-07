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

    <h2>Create Notification</h2>
    <ion-item>
      <ion-label>Title: </ion-label>
      <ion-input name="pushTitle" placeholder="Title" v-model="pushNotificationToAdd.title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Body: </ion-label>
      <ion-input name="pushBody" placeholder="Body" v-model="pushNotificationToAdd.body"></ion-input>
    </ion-item>

    <!-- Location information for verifying origin information on android/ios. This was for testing and can be deleted -->
    <!-- <h2>Location Information</h2>
    <ion-item class="d-flex flex-column">
      
      <ion-list v-for="(value, name) in currentLocation" :key="value">
        <ion-label class="d-block"> <b>{{ name }}:</b> {{ value }} </ion-label>
      </ion-list>
    </ion-item> -->

    <ion-button @click="sendPushNotification({ ...pushNotificationToAdd })">Send Push Notification</ion-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { 
  IonButton, 
  IonItem,
  IonLabel,
  // IonList, 
} from '@ionic/vue';

import nativePushNotifications from '@/composables/pushNotifications'

export default defineComponent({
  name: "PushNotifications",
  components: {
    IonButton, 
    IonItem,
    IonLabel,
    // IonList,
  },
  setup() {
    // const currentLocation = window.location
    // console.log(JSON.stringify(currentLocation))

    const { 
      registrationToken, 
      pushNotificationToAdd, 
      getDeliveredPushNotifications, 
      sendPushNotification 
    } = nativePushNotifications()

    return { 
      registrationToken, 
      pushNotificationToAdd,
      getDeliveredPushNotifications,
      sendPushNotification, 
      // currentLocation,
    }
  }
})
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