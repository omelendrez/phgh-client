const state = {
  authenticated: false,
  token: localStorage.getItem('token') || null,
  user: null,
  status: null,
  apiError: null,
  apiMessage: null,
  account: null,
  accounts: []
}
export default state
