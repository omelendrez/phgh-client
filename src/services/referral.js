import HTTP from './api'

export const getReferrals = user => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    HTTP.defaults.headers.common['Authorization'] = token
    HTTP.get(`referral/${user.id}`)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
