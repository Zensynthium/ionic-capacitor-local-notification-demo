(function(){var t={1993:function(t){function e(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=function(){return[]},e.resolve=e,e.id=1993,t.exports=e},1875:function(t){function e(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=function(){return[]},e.resolve=e,e.id=1875,t.exports=e},3310:function(t,e,n){"use strict";var o=n(9963),i=n(6252);function a(t,e,n,o,a,c){const r=(0,i.up)("ion-router-outlet"),l=(0,i.up)("ion-app");return(0,i.wg)(),(0,i.j4)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r)])),_:1})}var c=n(9830),r=(0,i.aZ)({name:"App",components:{IonApp:c.dr,IonRouterOutlet:c.jP}}),l=n(3744);const s=(0,l.Z)(r,[["render",a]]);var u=s,d=n(1089);const f=(0,i.Uk)("Notification Testing"),m=(0,i.Uk)("Notification Testing");function p(t,e,n,o,a,c){const r=(0,i.up)("ion-title"),l=(0,i.up)("ion-toolbar"),s=(0,i.up)("ion-header"),u=(0,i.up)("LocalNotificationDemo"),d=(0,i.up)("PushNotificationDemo"),p=(0,i.up)("ion-content"),h=(0,i.up)("ion-page");return(0,i.wg)(),(0,i.j4)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{translucent:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[f])),_:1})])),_:1})])),_:1}),(0,i.Wm)(p,{fullscreen:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{collapse:"condense"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,{size:"large"},{default:(0,i.w5)((()=>[m])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u),(0,i.Wm)(d)])),_:1})])),_:1})}n(7686),n(4506);var h=n(3577);const g={class:"ion-padding"},v=(0,i._)("h1",null,"Notify Component",-1),w=(0,i._)("h2",null,"Create Notification",-1),N=(0,i.Uk)("Title: "),b=(0,i.Uk)("Body: "),y=(0,i.Uk)("Enable in Foreground: "),k=(0,i.Uk)("Add Notifications"),_=(0,i.Uk)("Remove All Notifications"),T=(0,i.Uk)("Start Notifications"),P=(0,i.Uk)("Cancel Notifications"),W=(0,i.Uk)("Cancel Notification ID:0"),A=(0,i._)("h2",null,"Notifications (Not Scheduled Yet)",-1),O=(0,i._)("h2",null,"Pending Notifications",-1);function I(t,e,n,o,a,c){const r=(0,i.up)("ion-item"),l=(0,i.up)("ion-label"),s=(0,i.up)("ion-input"),u=(0,i.up)("ion-datetime"),d=(0,i.up)("ion-toggle"),f=(0,i.up)("ion-button");return(0,i.wg)(),(0,i.iD)("div",g,[v,(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i._)("p",null,"Notify Permission: "+(0,h.zw)(t.permissionState.display),1)])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i._)("p",null,"Platform: "+(0,h.zw)(t.checkPlatform()),1)])),_:1}),w,(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[N])),_:1}),(0,i.Wm)(s,{name:"title",placeholder:"Title",modelValue:t.notificationToAdd.title,"onUpdate:modelValue":e[0]||(e[0]=e=>t.notificationToAdd.title=e)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[b])),_:1}),(0,i.Wm)(s,{name:"body",placeholder:"Body",modelValue:t.notificationToAdd.body,"onUpdate:modelValue":e[1]||(e[1]=e=>t.notificationToAdd.body=e)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{name:"date",modelValue:t.notificationToAdd.schedule.at,"onUpdate:modelValue":e[2]||(e[2]=e=>t.notificationToAdd.schedule.at=e)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[y])),_:1}),(0,i.Wm)(d,{name:"foreground",modelValue:t.notificationToAdd.foreground,"onUpdate:modelValue":e[3]||(e[3]=e=>t.notificationToAdd.foreground=e),checked:!0===t.notificationToAdd.foreground},null,8,["modelValue","checked"])])),_:1}),(0,i.Wm)(f,{class:"d-inline",color:"primary",onClick:e[4]||(e[4]=e=>t.addNotifications({...t.notificationToAdd}))},{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(f,{class:"d-line",color:"danger",onClick:e[5]||(e[5]=e=>t.removeAllNotifications())},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(f,{class:"d-inline",color:"primary",onClick:e[6]||(e[6]=e=>t.scheduleNotifications(t.options))},{default:(0,i.w5)((()=>[T])),_:1}),(0,i.Wm)(f,{class:"d-inline",color:"danger",onClick:e[7]||(e[7]=e=>t.cancelNotifications())},{default:(0,i.w5)((()=>[P])),_:1}),(0,i.Wm)(f,{class:"d-inline",color:"danger",onClick:e[8]||(e[8]=e=>t.cancelNotification(0))},{default:(0,i.w5)((()=>[W])),_:1}),A,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.options.notifications,(t=>((0,i.wg)(),(0,i.j4)(r,{key:t.id},{default:(0,i.w5)((()=>[(0,i.Uk)((0,h.zw)(t),1)])),_:2},1024)))),128)),O,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.pending.notifications,(t=>((0,i.wg)(),(0,i.j4)(r,{key:t.id},{default:(0,i.w5)((()=>[(0,i.Uk)((0,h.zw)(t),1)])),_:2},1024)))),128))])}var D=n(9895),V=n(3573),U=n(2262);function j(){const t=t=>{let e,n=t.getTimezoneOffset(),o=parseInt(Math.abs(n/60)),i=Math.abs(n%60);o<10&&(o="0"+o),i<10&&(i="0"+i),n<0?e="+"+o+":"+i:n>0?e="-"+o+":"+i:0==n&&(e="Z");let a,c=t.getDate(),r=t.getMonth()+1,l=t.getFullYear(),s=t.getHours(),u=t.getMinutes(),d=t.getSeconds();c=c<10?"0"+c:c,r=r<10?"0"+r:r,s=s<10?"0"+s:s,u=u<10?"0"+u:u,d=d<10?"0"+d:d,a=l+"-"+r+"-"+c+"T"+s+":"+u+":"+d;const f=a+e;return f};return{dateISOStringWithOffset:t}}function C(){const{dateISOStringWithOffset:t}=j(),e=()=>D.dV.getPlatform(),n=(t,e=!1)=>{c.Mn.create({message:t,position:"top",color:e?"danger":"primary",duration:2e3}).then((t=>t.present()))},o=(0,U.iH)(0),a=(0,U.qj)({id:o.value,title:"",body:"",schedule:{at:t(new Date((new Date).getTime()+6e4))},foreground:!0}),r=(0,U.iH)({display:""}),l=(0,U.qj)({notifications:[]}),s=(0,U.qj)({notifications:[]}),u=t=>{if(t.title&&t.body&&new Date(t.schedule.at).getTime()>(new Date).getTime()){const e={...t};e.schedule={...t.schedule},e.schedule.at=new Date(e.schedule.at),l.notifications.push(e),o.value+=1,a.id=o.value,n("Notification added!")}else n("Title, body, & date must be filled out, and the date must be at a time ahead of the present.",!0)},d=()=>{l.notifications.length?(n("All notifications removed."),l.notifications=[]):n("There are no notifications to remove.",!0)},f=async()=>{const t=await V.s.getPending();s.notifications=t.notifications},m=async t=>{await V.s.schedule(t),await f(),n("Notification scheduled!")},p=async t=>{t.notifications.length?(await V.s.schedule(t),await f(),n(`${t.notifications.length} notification${t.notifications.length>1?"s":""} scheduled!`),l.notifications=[]):n("There are no notifications to schedule.",!0)},h=async t=>{s.notifications.forEach((async e=>{e.id==t&&await V.s.cancel({notifications:[{id:t}]})})),await f()},g=async()=>{s.notifications.length?(await V.s.cancel(s),n(`${s.notifications.length} notification${s.notifications.length>1?"s":""} canceled!`),await f()):n("There are no notifications to cancel.",!0)};return(0,i.bv)((async()=>{r.value=await V.s.checkPermissions(),"prompt"!=r.value&&"prompt-with-rationale"!=r.value||(r.value=await V.s.requestPermissions()),await f(),V.s.addListener("localNotificationReceived",f),V.s.addListener("localNotifcationActionPerformed",f)})),(0,i.Ah)((async()=>{V.s.removeAllListeners()})),{checkPlatform:e,permissionState:r,options:l,notificationToAdd:a,pending:s,addNotifications:u,removeAllNotifications:d,scheduleNotifications:p,scheduleNotification:m,cancelNotifications:g,cancelNotification:h}}var S=(0,i.aZ)({name:"LocalNotifications",components:{IonItem:c.Ie,IonButton:c.YG,IonDatetime:c.x4,IonToggle:c.ho,IonInput:c.pK,IonLabel:c.Q$},setup(){const{checkPlatform:t,permissionState:e,options:n,notificationToAdd:o,pending:i,addNotifications:a,removeAllNotifications:c,scheduleNotifications:r,cancelNotifications:l,cancelNotification:s}=C();return{checkPlatform:t,permissionState:e,options:n,notificationToAdd:o,pending:i,addNotifications:a,removeAllNotifications:c,scheduleNotifications:r,cancelNotifications:l,cancelNotification:s}}});const L=(0,l.Z)(S,[["render",I]]);var E=L;const H={class:"ion-padding"},M=(0,i.Uk)("Send Push Notification");function R(t,e,n,o,a,c){const r=(0,i.up)("ion-label"),l=(0,i.up)("ion-item"),s=(0,i.up)("ion-button");return(0,i.wg)(),(0,i.iD)("div",H,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Registration Token: "+(0,h.zw)(o.registrationToken),1)])),_:1})])),_:1}),(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{onClick:e[0]||(e[0]=t=>o.sendPushNotification())},{default:(0,i.w5)((()=>[M])),_:1})])),_:1})])}var Z=n(773),x=n(9669),z=n.n(x);function q(){const t=(0,U.iH)(),e=async()=>{await Z.V.addListener("registration",(e=>{t.value=e.value,console.info("Registration token: ",e.value)})),await Z.V.addListener("registrationError",(t=>{console.error("Registration error: ",t.error)})),await Z.V.addListener("pushNotificationReceived",(t=>{console.log("Push notification received: ",JSON.stringify(t))})),await Z.V.addListener("pushNotificationActionPerformed",(t=>{console.log("Push notification action performed",t.actionId,t.inputValue)}))},n=async()=>{let t=await Z.V.checkPermissions();"prompt"===t.receive&&(t=await Z.V.requestPermissions()),t.receive,await Z.V.register()},o=async()=>{const t=await Z.V.getDeliveredNotifications();console.log("delivered notifications",JSON.stringify(t))},a=async()=>{const t={notification:{title:"Push Notification Test",body:"Hello from your native device!"}};z().post("https://localhost:3000/firebase/notification",t).then((t=>{console.log(t.data)})).catch((t=>{console.log(t)}))};return(0,i.bv)((async()=>{if("web"!=D.dV.getPlatform())try{await e(),await o(),await n()}catch(t){console.log(t)}})),{registrationToken:t,getDeliveredPushNotifications:o,sendPushNotification:a}}var F={name:"PushNotifications",componenets:{IonButton:c.YG,IonItem:c.Ie,IonLabel:c.Q$},setup(){const{registrationToken:t,getDeliveredPushNotifications:e,sendPushNotification:n}=q();return{registrationToken:t,sendPushNotification:n}}};const Y=(0,l.Z)(F,[["render",R]]);var $=Y,B=(0,i.aZ)({name:"HomePage",components:{IonContent:c.W2,IonHeader:c.Gu,IonPage:c._i,IonTitle:c.wd,IonToolbar:c.sr,LocalNotificationDemo:E,PushNotificationDemo:$}});const G=(0,l.Z)(B,[["render",p],["__scopeId","data-v-496da3e2"]]);var K=G;const J=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:K}],Q=(0,d.p7)({history:(0,d.PO)("/"),routes:J});var X=Q;n(8851),n(1292),n(1633),n(1045),n(6187),n(2299),n(3423),n(4687),n(9147),n(6250);const tt=(0,o.ri)(u).use(c.oX).use(X);X.isReady().then((()=>{tt.mount("#app")}))}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var c=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||c>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,a<c&&(c=a));if(r){t.splice(u--,1);var s=i();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{78:"affa0d39",168:"b1a373d7",338:"3d1105b4",515:"1ba79bbb",541:"b083b016",576:"3fa684be",581:"dee0a062",753:"444b6596",775:"503fd1e6",880:"eea3a451",990:"9da4dad5"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="notification-testing-i5vue:";n.l=function(o,i,a,c){if(t[o])t[o].push(i);else{var r,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+a),r.src=o),t[o]=[i];var f=function(e,n){r.onerror=r.onload=null,clearTimeout(m);var i=t[o];if(delete t[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(n,o){i=t[e]=[n,o]}));o.push(i[2]=a);var c=n.p+n.u(e),r=new Error,l=function(o){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",r.name="ChunkLoadError",r.type=a,r.request=c,i[1](r)}};n.l(c,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,c=o[0],r=o[1],l=o[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(e&&e(o);s<c.length;s++)a=c[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunknotification_testing_i5vue"]=self["webpackChunknotification_testing_i5vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3310)}));o=n.O(o)})();
//# sourceMappingURL=app.5b9e7afa.js.map