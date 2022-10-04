// import { app }  from '../../../../configs/config';

// import { getMessaging, getToken } from "firebase/messaging";

// const messaging = getMessaging(app)

// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission()
//     .then((permission) => {
//       if (permission === 'granted') {
//         console.log('Notification permission granted.')

//         getToken(messaging, { vapidKey: 'BJKR_IdpTyb0lkv08PT4R7LI3_pIcdzqyzNYcw5kHNR1aqobjBh_dDgxTnYj7yxaR_705YWZxAM6dcgO3MgDnlE' })
//           .then((currToken) => {
//             if (currToken) {
//               console.log('current Token : ', currToken)
//             } else {
//               console.log('cant get token')
//             }
//           });
//       } else {
//         console.log('permission denied')
//       }
//     });
// }

// requestPermission()

// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   Customize notification here
//   self.addEventListener('push', function (event) {
//     console.log('Received a push message', event);

//     var title = 'Yay a message.';
//     var body = 'We have received a push message.';
//     var icon = 'YOUR_ICON';
//     var tag = 'simple-push-demo-notification-tag';
//     var data = {
//       doge: {
//         wow: 'such amaze notification data'
//       }
//     };

//     event.waitUntil(
//       self.registration.showNotification(title, {
//         body: body,
//         icon: icon,
//         tag: tag,
//         data: data
//       })
//     );
//   });
// })