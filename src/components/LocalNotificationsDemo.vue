<template>
  <div class="ion-padding">
    <h1><u>Local Notification Component</u></h1>
    <ion-item>
      <p>Notify Permission: {{ permissionState.display }}</p>
    </ion-item>
    <ion-item>
      <p>Platform: {{ checkPlatform() }}</p>
    </ion-item>

    <h2>Create Notification</h2>
    <ion-item>
      <ion-label>Title: </ion-label>
      <ion-input name="localTitle" placeholder="Title" v-model="localNotificationToAdd.title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Body: </ion-label>
      <ion-input name="localBody" placeholder="Body" v-model="localNotificationToAdd.body"></ion-input>
    </ion-item>

    <ion-item>
      <!-- <ion-label>Date/Time</ion-label> -->
      <ion-datetime name="date" v-model="localNotificationToAdd.schedule.at"></ion-datetime>
    </ion-item>
    
    <ion-item>
      <ion-label>Enable in Foreground: </ion-label>
      <ion-toggle name="foreground" v-model="localNotificationToAdd.foreground" :checked="localNotificationToAdd.foreground === true"></ion-toggle>
    </ion-item>
    <!-- <ion-input name="iconColor" :value="localNotificationToAdd.iconColor"></ion-input> -->
    <!-- Creates a shallow copy not have reactivity transferred -->
    <ion-button class="d-inline" color="primary" @click="addNotifications({ ...localNotificationToAdd})">Add Notifications</ion-button>
    <ion-button class="d-line" color="danger" @click="removeAllNotifications()">Remove All Notifications</ion-button>
    <ion-button class="d-inline" color="primary" @click="scheduleNotifications(options)">Start Notifications</ion-button>
    <ion-button class="d-inline" color="danger" @click="cancelNotifications()">Cancel Notifications</ion-button>
    <ion-button class="d-inline" color="danger" @click="cancelNotification(0)">Cancel Notification ID:0</ion-button>
    
    <h2>Notifications (Not Scheduled Yet)</h2>
    <ion-item :key="notification.id" v-for="notification in options.notifications">
      {{ notification }}
    </ion-item>

    <h2>Pending Notifications</h2>
    <ion-item :key="pending.id" v-for="pending in pending.notifications">
      {{ pending }}
    </ion-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { 
  IonItem, 
  IonButton, 
  IonDatetime, 
  IonToggle,
  IonInput,
  IonLabel,
} from '@ionic/vue';

import nativeLocalNotifications from '@/composables/localNotifications'

export default defineComponent({
  name: "LocalNotifications",
  components: {
    IonItem,
    IonButton,
    IonDatetime,
    IonToggle,
    IonInput,
    IonLabel,
  },
  setup(){
    const { 
      checkPlatform,
      permissionState,
      options,
      localNotificationToAdd,
      pending,
      addNotifications,
      removeAllNotifications,
      scheduleNotifications,
      cancelNotifications,
      cancelNotification
    } = nativeLocalNotifications()

    return {
      checkPlatform,
      permissionState,
      options,
      localNotificationToAdd,
      pending,
      addNotifications,
      removeAllNotifications,
      scheduleNotifications,
      cancelNotifications,
      cancelNotification
    }
  }
})
</script>

<style>
.d-inline {
  display: inline-block;
}

.d-block {
  display: block;
}

h2 {
  font-size: 20px;
} 
</style>