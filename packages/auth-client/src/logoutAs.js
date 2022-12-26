import AuthClient from './AuthClient'
import {getPersonificationUserEmail} from './localStorage/personificationProfile'
import {removePersonificationJWT} from './localStorage/personificationJWT'
import {removePersonificationSession} from './localStorage/personificationSession'

/**
 * logout: async function that calls auth/depersonification_user endpoint, and removes all user credentials from localStorage
 * @returns {void}
 */
const logoutAs = async () => {
  const userEmail = getPersonificationUserEmail()
  if (!userEmail) {
    return
  }

  await AuthClient.post('auth/depersonification_user', new URLSearchParams({userEmail}))
    .then(res => res.data)
    .catch(error => {
      throw error
    })
  await removePersonificationJWT(userEmail)
  await removePersonificationSession(userEmail)
  window.location.reload()
}

export default logoutAs
