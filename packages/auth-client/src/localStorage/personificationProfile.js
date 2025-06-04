import {getPersonificationSession} from './personificationSession'
import {getPersonificationJWT} from './personificationJWT'
import {useEffect, useState} from 'react'

export const getPersonificationUserEmail = () => {
  const params = new URLSearchParams(window.location.search)
  return params.get('persn_email')?.replace(' ', '+')
}

export const usePersonificationUserEmail = () => {
  const [state, setState] = useState()
  const userEmail = getPersonificationUserEmail()

  useEffect(() => {
    if (userEmail) {
      setState(userEmail)
    } else {
      setState(null)
    }
  }, [userEmail])

  return state
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
