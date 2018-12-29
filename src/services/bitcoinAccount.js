import HTTP from './api'

export const addBitcoinAccount = account => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    HTTP.defaults.headers.common['Authorization'] = token
    HTTP.post('bitcoin-account', account)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const deleteBitcoinAccount = account => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    HTTP.defaults.headers.common['Authorization'] = token
    HTTP.delete(`bitcoin-account/${account.id}`)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getUserBitcoinAccounts = user => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    HTTP.defaults.headers.common['Authorization'] = token
    HTTP.get(`bitcoin-account/${user.id}`)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
