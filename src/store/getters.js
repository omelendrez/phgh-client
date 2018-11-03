const getters = {
  status: state => state.status,
  isAuthenticated: state => state.authenticated,
  authStatus: state => state.status,
  user: state => state.user,
  apiError: state => state.apiError,
  apiMessage: state => state.apiMessage
}

export default getters
