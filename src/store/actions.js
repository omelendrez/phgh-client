import { login, signup, confirmEmail } from '@/services'

const handleError = err => {
  return err.response.data || {
    data: { error: 'There is a problem trying to connect to backend server' }
  }
}

const actions = {
  async login ({ commit }, user) {
    commit('start_request')
    login(user)
      .then(resp => {
        const { token, user, message } = resp.data
        localStorage.setItem('token', token)
        commit('auth_success', { token, user, message })
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
        const { user, message } = resp.data
        commit('user_create_success', { user, message })
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
        const { user, message } = resp.data
        commit('user_confirm_success', { user, message })
      })
      .catch(err => {
        handleError(err)
        commit('request_error', handleError(err))
      })
  }

}

export default actions
