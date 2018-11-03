const state = {
  authenticated: false,
  token: localStorage.getItem('token') || null,
  user: null,
  status: null,
  apiError: null,
  apiMessage: null
}
export default state
