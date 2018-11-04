const getters = {
  status: state => state.status,
  isAuthenticated: state => state.authenticated,
  user: state => state.user,
  apiError: state => state.apiError,
  apiMessage: state => state.apiMessage
}

export default getters
