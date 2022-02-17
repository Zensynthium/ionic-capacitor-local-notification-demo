<template>
  <div class="ion-padding">
    <h1>Notify Component</h1>
    <ion-item>
      <p>Notify Permission: {{ permissionState.display }}</p>
    </ion-item>
    <ion-item>
      <p>Platform: {{ checkPlatform() }}</p>
    </ion-item>

    <h2>Create Notification</h2>
    <ion-item>
      <ion-label>Title: </ion-label>
      <ion-input name="title" placeholder="Title" v-model="notificationToAdd.title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Body: </ion-label>
      <ion-input name="body" placeholder="Body" v-model="notificationToAdd.body"></ion-input>
    </ion-item>

    <ion-item>
      <!-- <ion-label>Date/Time</ion-label> -->
      <ion-datetime name="date" v-model="notificationToAdd.schedule.at"></ion-datetime>
    </ion-item>
    
    <ion-item>
      <ion-label>Enable in Foreground: </ion-label>
      <ion-toggle name="foreground" v-model="notificationToAdd.foreground" :checked="notificationToAdd.foreground === true"></ion-toggle>
    </ion-item>
    <!-- <ion-input name="iconColor" :value="notificationToAdd.iconColor"></ion-input> -->
    <!-- Creates a shallow copy not have reactivity transferred -->
    <ion-button class="d-inline" color="primary" @click="addNotifications({ ...notificationToAdd})">Add Notifications</ion-button>
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

import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications'
import { onMounted, reactive, ref, defineComponent, watch, onUnmounted } from 'vue';

import ISO8601DateWithTimeZone from '@/composables/ISO8601DateWithTimeZone'

import { 
  IonItem, 
  IonButton, 
  IonDatetime, 
  IonToggle,
  IonInput,
  IonLabel,
  toastController,
} from '@ionic/vue';

export default defineComponent({
  name: "NotificationDemo",
  components: {
    IonItem,
    IonButton,
    IonDatetime,
    IonToggle,
    IonInput,
    IonLabel,
  },
  setup(){
    // toISOString() gives the ISO time in UTC only, which causes the ion-datetime to show date that isn't localized and for most situations incorrect. This function corrects this.
    // Neccessary for using Capacitor's Local Notification Plugin with Ion-Datetime component
    const { dateISOStringWithOffset } = ISO8601DateWithTimeZone()

    const checkPlatform = () => {
      return Capacitor.getPlatform()
    }

    const handleToast = (message, isError = false) => {
      toastController
        .create({
          message: message,
          position: "top",
          color: isError ? "danger" : "primary",
          duration: 2000,
        })
        .then((t) => t.present());
    };

    const dynamicId = ref(0)

    // Choose all the fields relevant to the type of notifications desired.
    // https://capacitorjs.com/docs/apis/local-notifications#localnotificationschema
    const notificationToAdd = reactive({
      id: dynamicId.value,
      title: '',
      body: '',
      schedule: {
        // Current Date + 1 Minute
        at: dateISOStringWithOffset(new Date(new Date().getTime() + 60000))
      },
      foreground: true,
      // extra: {}
      // iconColor: '#0000FF'
    })

    const permissionState = ref({"display": ""})

    const options = reactive({ 
      notifications: []
    })

    const pending = reactive({
      notifications: []
    })

    const addNotifications = (notification) => {
      if (notification.title && notification.body && new Date(notification.schedule.at).getTime() > new Date().getTime()) {
        // Creating Shallow Copies as assignment by reference (the default behavior of object assignment) will break everything
        const newNotification = { ...notification }
        newNotification.schedule = { ...notification.schedule }

        // Converting back to Date object from ISO String as the scheduling function requires this
        newNotification.schedule.at = new Date(newNotification.schedule.at)
        options.notifications.push(newNotification)

        dynamicId.value += 1
        notificationToAdd.id = dynamicId.value

        handleToast('Notification added!')
      } else {
        handleToast('Title, body, & date must be filled out, and the date must be at a time ahead of the present.', true)
      }
    }

    const removeAllNotifications = () => {
      if (options.notifications.length) {
        handleToast(`All notifications removed.`)
        options.notifications = []
      } else {
        handleToast('There are no notifications to remove.', true)
      }
    }

    const updatePending = async () => {
      // Update Pending
      const currentPending = await LocalNotifications.getPending()
      pending.notifications = currentPending.notifications
      console.log('update pending called!')
    }

    const scheduleNotifications = async (notifOptions) => {
      if (notifOptions.notifications.length) {
        await LocalNotifications.schedule(notifOptions)
        await updatePending()

        handleToast(`${notifOptions.notifications.length} notification${notifOptions.notifications.length > 1 ? 's' : ''} scheduled!`)
        options.notifications = []
      } else {
        handleToast('There are no notifications to schedule.', true)
      }
    }

    const cancelNotification = async id => {
      // await updatePending()

      pending.notifications.forEach(async notif => {
        if (notif.id == id) {
          await LocalNotifications.cancel({ notifications: [{id: id}] })
        }
      })

      await updatePending()
    }

    const cancelNotifications = async () => {
      // await updatePending()

      if (pending.notifications.length) {
        await LocalNotifications.cancel(pending)
        handleToast(`${pending.notifications.length} notification${pending.notifications.length > 1 ? 's' : ''} canceled!`)

        await updatePending()
      } else {
        handleToast(`There are no notifications to cancel.`, true)
      }
    }



    onMounted(async () => {
      permissionState.value = await LocalNotifications.checkPermissions();

      if (permissionState.value == 'prompt' || permissionState.value == 'prompt-with-rationale') {
        // This doesn't seem to trigger on web (or atleast with Chromium based browsers), may be a mobile only feature.
        permissionState.value = await LocalNotifications.requestPermissions()
      }

      // Updates Pending on Notification Execution or Alteration (Though not adding/scheduling & deletion)
      LocalNotifications.addListener('localNotificationReceived', updatePending)
      LocalNotifications.addListener('localNotifcationActionPerformed', updatePending)
    })

    onUnmounted(async () => {
      LocalNotifications.removeAllListeners()
    })

    return { 
      checkPlatform, 
      permissionState, 
      options,
      notificationToAdd, 
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
</style>