import AuthClient from './AuthClient'
import clean from './clean'

/**
 * logout: async function that calls auth/logout endpoint, and removes all credentials from localStorage
 * @returns {void}
 */
const logout = async () => {
  await AuthClient.post('auth/logout')
    .then(res => res.data)
    .catch(error => {
      throw error
    })
  await clean()
}

export default logout
