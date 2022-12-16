import AuthClient from './AuthClient'
import logout from './logout'
import refreshJWT from './refreshJWT'
import clean from './clean'

import getJWT from './localStorage/getJWT'
import saveJWT from './localStorage/saveJWT'
import removeJWT from './localStorage/removeJWT'

import getAdminJWT from './localStorage/getAdminJWT'
import saveAdminJWT from './localStorage/saveAdminJWT'
import removeAdminJWT from './localStorage/removeAdminJWT'

import getSession from './localStorage/getSession'
import saveSession from './localStorage/saveSession'
import removeSession from './localStorage/removeSession'

export {
  AuthClient,
  logout,
  refreshJWT,
  clean,
  getJWT,
  saveJWT,
  removeJWT,
  getAdminJWT,
  saveAdminJWT,
  removeAdminJWT,
  getSession,
  saveSession,
  removeSession
}
