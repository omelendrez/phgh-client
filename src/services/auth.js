import HTTP from './api'

export const login = (user) => {
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
