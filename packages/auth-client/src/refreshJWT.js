import AuthClient from './AuthClient'
import {saveJWT} from './localStorage/JWT'

/**
 * refreshJWT: async function that calls endpoint auth/refresh_jwt to refresh the user JWT in the localStorage
 * @param {string} userEmail
 * @returns {string} jwt
 */
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
