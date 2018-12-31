const getters = {
  status: state => state.status,
  isAuthenticated: state => state.authenticated,
  user: state => state.user,
  referralLink: state => state.referralLink,
  apiError: state => state.apiError,
  apiMessage: state => state.apiMessage,
  account: state => state.account,
  accounts: state => state.accounts,
  bitcoinAccount: state => state.bitcoinAccount,
  bitcoinAccounts: state => state.bitcoinAccounts,
  passwordResetted: state => state.passwordResetted,
  referrals: state => state.referrals
}
export default getters
