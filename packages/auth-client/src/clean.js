import saveJWT from './localStorage/saveJWT'
import saveAdminJWT from './localStorage/saveAdminJWT'
import getAdminJWT from './localStorage/getAdminJWT'

const clean = async () => {
  await saveJWT(null)
  const adminJWT = getAdminJWT()
  if (adminJWT) {
    await saveAdminJWT(null)
  }
  window.location.reload()
}

export default clean
