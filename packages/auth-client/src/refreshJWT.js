import AuthClient from './AuthClient'
import {saveJWT} from './localStorage/JWT'
import {savePersonificationJWT} from './localStorage/personificationJWT'
import {getPersonificationUserEmail} from './localStorage/personificationProfile'

/**
 * refreshJWT: async function that calls endpoint auth/refresh_jwt to refresh the user JWT in the localStorage
 * @param {string} userEmail
 * @returns {string} jwt
 */
const refreshJWT = async () => {
  const userEmail = getPersonificationUserEmail()
  const body = {}

  if (userEmail) {
    body['userEmail'] = userEmail
  }
  const response = await AuthClient.post('auth/refresh_jwt', new URLSearchParams(body))
    .then(res => res.data)
    .catch(error => {
      throw error
    })

  const jwt = response?.jwt
  if (userEmail) {
    await savePersonificationJWT(userEmail, jwt)
  } else {
    await saveJWT(jwt)
  }

  return jwt
}

export default refreshJWT
