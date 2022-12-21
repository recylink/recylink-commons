import AuthClient from './AuthClient'
import logout from './logout'
import refreshJWT from './refreshJWT'
import clean from './clean'

import {saveJWT, getJWT, removeJWT} from './localStorage/JWT'
import {saveAdminJWT, getAdminJWT, removeAdminJWT} from './localStorage/adminJWT'
import {getSession, saveSession, removeSession} from './localStorage/session'

import {getPersonificationUserEmail} from './localStorage/getPersonificationUserEmail'
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

import usePersonificationSessionStorage from './hooks/usePersonificationSessionStorage'
import usePersonificationJWTStorage from './hooks/usePersonificationJWTStorage'

export {
  AuthClient,
  logout,
  refreshJWT,
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
  getPersonificationUserEmail,
  //
  savePersonificationJWT,
  getPersonificationJWT,
  getCurrentPersonificationJWT,
  getAllPersonificationJWTs,
  removePersonificationJWT,
  removeAllPersonificationJWTs,
  usePersonificationJWTStorage,
  //
  savePersonificationSession,
  getPersonificationSession,
  getCurrentPersonificationSession,
  getAllPersonificationSessions,
  removePersonificationSession,
  removeAllPersonificationSessions,
  usePersonificationSessionStorage
}
