import {
  login,
  signup,
  confirmEmail,
  forgotPassword,
  resetPassword,
  addAccount,
  deleteAccount,
  getUserAccounts,
  addBitcoinAccount,
  deleteBitcoinAccount,
  getUserBitcoinAccounts
} from '@/services'

import { sendVibration } from '@/utils/notifications'

const handleError = err => {
  console.log(err)
  sendVibration()
  let error = {
    success: false,
    error: 'There is a problem trying to connect to backend server'
  }
  if (err.response && err.response.data) error = err.response.data
  return error
}

const actions = {
  async login({ commit }, user) {
    commit('start_request')
    login(user)
      .then(resp => {
        const { token } = resp.data
        localStorage.setItem('token', token)
        commit('auth_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
        localStorage.removeItem('token')
      })
  },
  logout({ commit }) {
    commit('logout')
    localStorage.removeItem('token')
  },
  async forgotPassword({ commit }, user) {
    commit('start_request')
    forgotPassword(user)
      .then(resp => {
        const { message } = resp.data
        commit('forgot_password_success', { message })
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async signup({ commit }, user) {
    commit('start_request')
    signup(user)
      .then(resp => {
        commit('user_create_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async confirmEmail({ commit }, uid) {
    commit('start_request')
    confirmEmail(uid)
      .then(resp => {
        commit('user_confirm_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async addAccount({ commit }, account) {
    commit('start_request')
    addAccount(account)
      .then(resp => {
        commit('account_create_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async loadUserAccounts({ commit }, user) {
    commit('start_request')
    getUserAccounts(user)
      .then(resp => {
        commit('accounts_list_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async deleteAccount({ commit }, account) {
    commit('start_request')
    deleteAccount(account)
      .then(resp => {
        commit('account_delete_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async resetPassword({ commit }, data) {
    commit('start_request')
    resetPassword(data)
      .then(resp => {
        commit('reset_password_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async addBitcoinAccount({ commit }, account) {
    commit('start_request')
    addBitcoinAccount(account)
      .then(resp => {
        commit('bitcoin_account_create_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async loadUserBitcoinAccounts({ commit }, user) {
    commit('start_request')
    getUserBitcoinAccounts(user)
      .then(resp => {
        commit('bitcoin_accounts_list_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  },
  async deleteBitcoinAccount({ commit }, account) {
    commit('start_request')
    deleteBitcoinAccount(account)
      .then(resp => {
        commit('bitcoin_account_delete_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  }
}

export default actions
