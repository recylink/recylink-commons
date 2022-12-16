import AuthClient from './AuthClient'
import logout from './logout'
import refreshJWT from './refreshJWT'
import refreshPersonificationJWT from './refreshPersonificationJWT'
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

import getPersonificationJWT from './localStorage/getPersonificationJWT'
import savePersonificationJWT from './localStorage/savePersonificationJWT'
import removePersonificationJWT from './localStorage/removePersonificationJWT'
import removeAllPersonificationJWTs from './localStorage/removeAllPersonificationJWTs'
import getPersonificationSession from './localStorage/getPersonificationSession'
import savePersonificationSession from './localStorage/savePersonificationSession'
import removePersonificationSession from './localStorage/removePersonificationSession'
import removeAllPersonificationSessions from './localStorage/removeAllPersonificationSessions'

export {
  AuthClient,
  logout,
  refreshJWT,
  refreshPersonificationJWT,
  clean,
  getJWT,
  saveJWT,
  removeJWT,
  getAdminJWT,
  saveAdminJWT,
  removeAdminJWT,
  getSession,
  saveSession,
  removeSession,
  getPersonificationJWT,
  savePersonificationJWT,
  removePersonificationJWT,
  removeAllPersonificationJWTs,
  getPersonificationSession,
  savePersonificationSession,
  removePersonificationSession,
  removeAllPersonificationSessions
}
