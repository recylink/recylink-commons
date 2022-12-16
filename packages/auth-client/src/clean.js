import getAdminJWT from './localStorage/getAdminJWT'
import removeJWT from './localStorage/removeJWT'
import removeAdminJWT from './localStorage/removeAdminJWT'
import removeSession from './localStorage/removeSession'
import removeAllPersonificationJWTs from './localStorage/removeAllPersonificationJWTs'
import removeAllPersonificationSessions from './localStorage/removeAllPersonificationSessions'

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
