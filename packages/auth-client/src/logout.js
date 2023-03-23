import AuthClient from './AuthClient'
import {getCsrfToken} from './localStorage/csrfToken'
import clean from './clean'

/**
 * logout: async function that calls auth/logout endpoint, and removes all credentials from localStorage
 * @returns {void}
 */
const logout = async () => {
  await AuthClient.post('auth/logout', {}, {headers: {'X-CSRF-TOKEN': getCsrfToken()}}) //Usar este endpoint requiere adjuntar el Header de CSRF para validar la cookie
    .then(res => res.data)
    .catch(error => {
      throw error
    })
  await clean()
}

export default logout
