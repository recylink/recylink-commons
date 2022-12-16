import getAdminJWT from './localStorage/getAdminJWT'
import removeJWT from './localStorage/removeJWT'
import removeAdminJWT from './localStorage/removeAdminJWT'
import removeSession from './localStorage/removeSession'

const clean = async () => {
  await removeSession()
  await removeJWT()
  const adminJWT = getAdminJWT()
  if (adminJWT) {
    await removeAdminJWT()
  }
  window.location.reload()
}

export default clean
