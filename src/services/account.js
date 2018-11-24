import HTTP from './api'

export const addAccount = account => {
  return new Promise((resolve, reject) => {
    HTTP.post('account', account)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const deleteAccount = account => {
  return new Promise((resolve, reject) => {
    HTTP.delete(`account/${account.id}`)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getUserAccounts = user => {
  return new Promise((resolve, reject) => {
    HTTP.get(`account/${user.id}`)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
