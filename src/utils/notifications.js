
export const requestPermission = () => {
  if (!('Notification' in window)) {
    return 'Notification API not supported!'
  }
  Notification.requestPermission((result) => {
    return result
  })
}

export const nonPersistentNotification = (msg) => {
  if (!('Notification' in window)) {
    return 'Notification API not supported!'
  }
  try {
    const notification = new Notification(msg)
    return notification
  } catch (err) {
    return 'Notification API error: ' + err
  }
}

export const persistentNotification = (msg) => {
  if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
    return 'Persistent Notification API not supported!'
  }
  try {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        reg.showNotification(msg)
      })
      .catch(err => 'Service Worker registration error: ' + err)
  } catch (err) {
    return 'Notification API error: ' + err
  }
}
