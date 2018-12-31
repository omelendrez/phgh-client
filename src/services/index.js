import {
  login,
  signup,
  confirmEmail,
  forgotPassword,
  resetPassword
} from './auth'
import { addAccount, deleteAccount, getUserAccounts } from './account'
import {
  addBitcoinAccount,
  deleteBitcoinAccount,
  getUserBitcoinAccounts
} from './bitcoinAccount'
import { getReferrals } from './referral'

export {
  login,
  signup,
  forgotPassword,
  resetPassword,
  confirmEmail,
  addAccount,
  deleteAccount,
  getUserAccounts,
  addBitcoinAccount,
  deleteBitcoinAccount,
  getUserBitcoinAccounts,
  getReferrals
}
