import HTTP from './api'

export const login = user => {
  return new Promise((resolve, reject) => {
    HTTP.post('participants/login', user)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const signup = user => {
  return new Promise((resolve, reject) => {
    HTTP.post('participants', user)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const forgotPassword = user => {
  return new Promise((resolve, reject) => {
    HTTP.post('participants/forgot-password', user)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const confirmEmail = uid => {
  return new Promise((resolve, reject) => {
    HTTP.post('participants/confirm', { uid: uid })
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const resetPassword = data => {
  return new Promise((resolve, reject) => {
    HTTP.post('participants/reset-password', data)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
