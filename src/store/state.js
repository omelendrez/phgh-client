const state = {
  authenticated: false,
  token: localStorage.getItem('token') || null,
  user: {
    first: null,
    last: null
  },
  status: null,
  apiError: null,
  apiMessage: null
}
export default state
