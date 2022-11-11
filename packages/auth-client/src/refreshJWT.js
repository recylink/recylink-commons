import AuthClient from './AuthClient'
import saveJWT from './localStorage/saveJWT'

const refreshJWT = async () => {
  const response = await AuthClient.post('auth/refresh_jwt')
    .then(res => res.data)
    .catch(error => {
      throw error
    })

  const jwt = response?.jwt
  await saveJWT(jwt)
  return jwt
}

export default refreshJWT
