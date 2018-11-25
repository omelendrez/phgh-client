import HTTP from './api'

export const addBitcoinAccount = account => {
  return new Promise((resolve, reject) => {
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
    HTTP.get(`bitcoin-account/${user.id}`)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
