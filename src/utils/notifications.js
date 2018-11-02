
export const requestPermission = () => {
  if (!('Notification' in window)) {
    return 'Notification API not supported!'
  }
  Notification.requestPermission((result) => {
    return result
  })
}

export const nonPersistentNotification = (options) => {
  if (!('Notification' in window)) {
    return 'Notification API not supported!'
  }
  try {
    const notification = new Notification('FITTOC', options)
    return notification
  } catch (err) {
    return 'Notification API error: ' + err
  }
}

export const persistentNotification = (options) => {
  if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
    return 'Persistent Notification API not supported!'
  }
  try {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        reg.showNotification('FITTOC', options)
      })
      .catch(err => 'Service Worker registration error: ' + err)
  } catch (err) {
    return 'Notification API error: ' + err
  }
}
