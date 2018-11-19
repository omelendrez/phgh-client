const mutations = {
  start_request(state) {
    state.status = 'loading'
    state.apiError = null
    state.apiMessage = null
  },
  request_error(state, error) {
    state.status = 'error'
    state.apiError = error
  },
  auth_success(state, { token, user, message }) {
    state.status = 'success'
    state.token = token
    state.user = user
    state.authenticated = true
  },
  logout(state) {
    state.status = ''
    state.token = ''
    state.user = null
    state.apiMessage = 'You have loged out'
    state.authenticated = false
  },
  user_create_success(state, { user, message }) {
    state.status = 'success'
    state.user = user
    state.apiMessage = message
  },
  user_confirm_success(state, { user, message }) {
    state.status = 'success'
    state.user = user
    state.apiMessage = message
  },
  account_create_success(state, { account, message }) {
    state.status = 'success'
    state.account = account
    state.apiMessage = message
  },
  accounts_list_success(state, { accounts }) {
    state.status = 'success'
    state.accounts = accounts
  }
}

export default mutations
