const state = {
  authenticated: false,
  token: localStorage.getItem('token') || null,
  user: null,
  referralLink: null,
  status: null,
  apiError: null,
  apiMessage: null,
  account: null,
  accounts: [],
  bitcoinAccount: null,
  bitcoinAccounts: [],
  passwordResetted: null
}
export default state
