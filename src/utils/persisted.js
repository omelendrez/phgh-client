export const saveTab = (tab) => {
  let error = 0
  const localStorage = window.localStorage
  error = !localStorage ? 1 : 0
  if (!error) {
    localStorage.setItem('currentTab', tab)
  }
}

export const getTab = () => {
  let error = 0
  const localStorage = window.localStorage
  error = !localStorage ? 1 : 0
  if (!error) {
    return localStorage.getItem('currentTab') || 0
  }
}

export function sendVibration () {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
  navigator.vibrate([500, 300, 100])
}
