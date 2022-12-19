import AuthClient from './AuthClient'
import logout from './logout'
import refreshJWT from './refreshJWT'
import refreshPersonificationJWT from './refreshPersonificationJWT'
import clean from './clean'

import {saveJWT, getJWT, removeJWT} from './localStorage/JWT'
import {saveAdminJWT, getAdminJWT, removeAdminJWT} from './localStorage/adminJWT'
import {getSession, saveSession, removeSession} from './localStorage/session'
import {
  savePersonificationJWT,
  getPersonificationJWT,
  getAllPersonificationJWTs,
  removePersonificationJWT,
  removeAllPersonificationJWTs
} from './localStorage/personificationJWT'
import {
  savePersonificationSession,
  getPersonificationSession,
  getAllPersonificationSessions,
  removePersonificationSession,
  removeAllPersonificationSessions,
  usePersonificationSessionStorage
} from './localStorage/personificationSession'

export {
  AuthClient,
  logout,
  refreshJWT,
  refreshPersonificationJWT,
  clean,
  //
  getJWT,
  saveJWT,
  removeJWT,
  //
  getAdminJWT,
  saveAdminJWT,
  removeAdminJWT,
  //
  getSession,
  saveSession,
  removeSession,
  //
  savePersonificationJWT,
  getPersonificationJWT,
  getAllPersonificationJWTs,
  removePersonificationJWT,
  removeAllPersonificationJWTs,
  //
  savePersonificationSession,
  getPersonificationSession,
  getAllPersonificationSessions,
  removePersonificationSession,
  removeAllPersonificationSessions,
  usePersonificationSessionStorage
}
