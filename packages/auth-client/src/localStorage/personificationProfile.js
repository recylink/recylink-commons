import {getPersonificationSession} from './personificationSession'
import {getPersonificationJWT} from './personificationJWT'

export const getPersonificationUserEmail = () => {
  let params = new URL(document.location).searchParams
  return params.get('persn_email')?.replace(' ', '+')
}

export const isPersonificationActive = () => {
  const userEmail = getPersonificationUserEmail()

  if (!userEmail) {
    return false
  }

  const session = getPersonificationSession(userEmail)
  const jwt = getPersonificationJWT(userEmail)

  if (!session && !jwt) {
    return false
  }

  return true
}
