import {removeJWT} from './localStorage/JWT'
import {getAdminJWT, removeAdminJWT} from './localStorage/adminJWT'
import {removeSession} from './localStorage/session'
import {removeAllPersonificationJWTs} from './localStorage/personificationJWT'
import {removeAllPersonificationSessions} from './localStorage/personificationSession'

const clean = async () => {
  await removeSession()
  await removeJWT()
  const adminJWT = getAdminJWT()
  if (adminJWT) {
    await removeAdminJWT()
    await removeAllPersonificationJWTs()
    await removeAllPersonificationSessions()
  }
  window.location.reload()
}

export default clean
