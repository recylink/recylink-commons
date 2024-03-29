import AuthClient from './AuthClient'
import logout from './logout'
import logoutAs from './logoutAs'
import refreshJWT from './refreshJWT'
import clean from './clean'

import {saveJWT, getJWT, removeJWT} from './localStorage/JWT'
import {saveCsrfToken, getCsrfToken, removeCsrfToken} from './localStorage/csrfToken'
import {saveAdminJWT, getAdminJWT, removeAdminJWT} from './localStorage/adminJWT'
import {getSession, saveSession, removeSession} from './localStorage/session'

import {
  getPersonificationUserEmail,
  isPersonificationActive
} from './localStorage/personificationProfile'
import {
  savePersonificationJWT,
  getPersonificationJWT,
  getCurrentPersonificationJWT,
  getAllPersonificationJWTs,
  removePersonificationJWT,
  removeAllPersonificationJWTs
} from './localStorage/personificationJWT'
import {
  savePersonificationSession,
  getPersonificationSession,
  getCurrentPersonificationSession,
  getAllPersonificationSessions,
  removePersonificationSession,
  removeAllPersonificationSessions
} from './localStorage/personificationSession'
import {
  savePersonificationCsrfToken,
  getCurrentPersonificationCsrfToken,
  getPersonificationCsrfToken
} from './localStorage/personificationCsrfToken'

import usePersonificationSessionStorage from './hooks/usePersonificationSessionStorage'
import usePersonificationJWTStorage from './hooks/usePersonificationJWTStorage'

export {
  AuthClient,
  logout,
  logoutAs,
  refreshJWT,
  clean,
  //
  getJWT,
  saveJWT,
  removeJWT,
  //
  getCsrfToken,
  saveCsrfToken,
  removeCsrfToken,
  //
  getAdminJWT,
  saveAdminJWT,
  removeAdminJWT,
  //
  getSession,
  saveSession,
  removeSession,
  //
  getPersonificationUserEmail,
  isPersonificationActive,
  //
  savePersonificationJWT,
  getPersonificationJWT,
  getCurrentPersonificationJWT,
  getAllPersonificationJWTs,
  removePersonificationJWT,
  removeAllPersonificationJWTs,
  usePersonificationJWTStorage,
  //
  savePersonificationCsrfToken,
  getCurrentPersonificationCsrfToken,
  getPersonificationCsrfToken,
  //
  savePersonificationSession,
  getPersonificationSession,
  getCurrentPersonificationSession,
  getAllPersonificationSessions,
  removePersonificationSession,
  removeAllPersonificationSessions,
  usePersonificationSessionStorage
}
