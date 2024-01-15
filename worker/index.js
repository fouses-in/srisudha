self.__WB_DISABLE_DEV_LOGS = true
self.addEventListener('push', function (event) {
  console.log('events new', event)
  let data = {
    title: 'hello',
    content: 'something new happened',
    openUrl: '/bookings',
  }

  console.log(event.data.text())
  if (event.data.text()) {
    data = JSON.parse(event.data.text())
  }
  var options = {
    body: data.content,
    icon: '/icons/icon-64*64.png',
    badge: '/icons/icon-64*64.png',
    data: {
      url: data.openUrl,
    },
  }
  event.waitUntil(self.registration.showNotification(data.title, options))
})

self.addEventListener('notificationclick', function (e) {
  e.notification.close()

  // Get all the Window clients
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientsArr) => {
      console.log('clients arr', clientsArr)
      // If a Window tab matching the targeted URL already exists, focus that;
      const hadWindowToFocus = clientsArr.some((windowClient) => {
        windowClient
          ? (windowClient.focus(),
            windowClient.navigate(e.notification.data.url),
            true)
          : false
      })
      console.log('haswindowtofocus', hadWindowToFocus)
      // Otherwise, open a new tab to the applicable URL and focus it.
      if (!hadWindowToFocus)
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null))
    })
  )
})

// self.addEventListener("notificationclick", function (e) {
//   e.notification.close();
//   // Get all the Window clients
//   e.waitUntil(
//     clients.matchAll({ type: "window" }).then((clientsArr) => {
//       // If a Window tab matching the targeted URL already exists, focus that;
//       const hadWindowToFocus = clientsArr.some((windowClient) =>
//         windowClient.url === e.notification.data.url
//           ? (windowClient.focus(), true)
//           : false
//       );
//       // Otherwise, open a new tab to the applicable URL and focus it.
//       if (!hadWindowToFocus)
//         clients
//           .openWindow(e.notification.data.url)
//           .then((windowClient) => (windowClient ? windowClient.focus() : null));
//     })
//   );
// });
