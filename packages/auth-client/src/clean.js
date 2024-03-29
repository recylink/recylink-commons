import {removeJWT} from './localStorage/JWT'
import {removeCsrfToken} from './localStorage/csrfToken'
import {removeAdminJWT} from './localStorage/adminJWT'
import {removeSession} from './localStorage/session'
import {removeAllPersonificationJWTs} from './localStorage/personificationJWT'
import {removeAllPersonificationSessions} from './localStorage/personificationSession'

const clean = async () => {
  await removeSession()
  await removeJWT()
  await removeCsrfToken()
  await removeAdminJWT()
  await removeAllPersonificationJWTs()
  await removeAllPersonificationSessions()
  window.location.reload()
}

export default clean
