import AuthClient from './AuthClient'
import savePersonificationJWT from './localStorage/savePersonificationJWT'

/**
 * refreshJWT: async function that calls endpoint auth/refresh_jwt to refresh the personificated user JWT in the localStorage
 * @param {string} userEmail
 * @returns
 */
const refreshPersonificationJWT = async userEmail => {
  const response = await AuthClient.post('auth/refresh_jwt')
    .then(res => res.data)
    .catch(error => {
      throw error
    })

  const jwt = response?.jwt
  await savePersonificationJWT(userEmail, jwt)
  return jwt
}

export default refreshPersonificationJWT
