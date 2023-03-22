import AuthClient from './AuthClient'
import {saveJWT} from './localStorage/JWT'
import {savePersonificationJWT} from './localStorage/personificationJWT'
import {getPersonificationUserEmail} from './localStorage/personificationProfile'
// import {getCsrfToken} from './localStorage/csrfToken'
import {getPersonificationCsrfToken} from './localStorage/personificationCsrfToken'

/**
 * refreshJWT: async function that calls endpoint auth/refresh_jwt to refresh the user JWT in the localStorage
 * @param {string} userEmail
 * @returns {string} jwt
 */
const refreshJWT = async () => {
  const userEmail = getPersonificationUserEmail()
  const body = {}
  // const headers = {
  //   'X-CSRF-TOKEN': getCsrfToken()
  // }

  if (userEmail) {
    body['userEmail'] = userEmail
    headers['X-CSRF-TOKEN'] = getPersonificationCsrfToken(userEmail)
  }
  const response = await AuthClient.post(
    //Usar este endpoint requiere adjuntar el valor de CSRF. El CSRF a usar dependerá si estamos personificando
    'auth/refresh_jwt',
    new URLSearchParams(body)
    // {headers}
  )
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
