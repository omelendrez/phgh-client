import { login, signup, confirmEmail } from '@/services'
import { sendVibration } from '@/utils/notifications'

const handleError = err => {
  sendVibration()
  let error = {
    success: false,
    error: 'There is a problem trying to connect to backend server'
  }
  if (err.response && err.response.data) error = err.response.data
  return error
}

const actions = {
  async login ({ commit }, user) {
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
  logout ({ commit }) {
    commit('logout')
    localStorage.removeItem('token')
  },
  async signup ({ commit }, user) {
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
  async confirmEmail ({ commit }, uid) {
    commit('start_request')
    confirmEmail(uid)
      .then(resp => {
        commit('user_confirm_success', resp.data)
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  }
}

export default actions
