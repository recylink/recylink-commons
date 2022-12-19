import get from 'lodash/get'
import unset from 'lodash/unset'
import {useMemo, useState} from 'react'

/**
 * @param {string} userEmail
 * @param {object} session
 * @returns {void}
 */
export const savePersonificationSession = (userEmail, session) => {
  try {
    const personificationSessionLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationsessioncollection')) || {}

    personificationSessionLocalStorage[userEmail] = session

    localStorage.setItem(
      'recylink.personificationsessioncollection',
      JSON.stringify(personificationSessionLocalStorage, null, 2)
    )

    return personificationSessionLocalStorage
  } catch (error) {}
}

/**
 * @param {string} userEmail
 * @returns {object}
 */
export const getPersonificationSession = userEmail => {
  try {
    const personificationSessionLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationsessioncollection')) || {}

    const personificationSession = get(personificationSessionLocalStorage, userEmail)

    return personificationSession
  } catch (e) {
    return null
  }
}

/**
 * @returns {object}
 */
export const getAllPersonificationSessions = () => {
  try {
    return JSON.parse(localStorage.getItem('recylink.personificationsessioncollection'))
  } catch (e) {
    return null
  }
}

/**
 * @param {string} userEmail
 * @returns {void}
 */
export const removePersonificationSession = userEmail => {
  try {
    const personificationSessionLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationsessioncollection')) || {}

    unset(personificationSessionLocalStorage, userEmail)

    localStorage.setItem(
      'recylink.personificationsessioncollection',
      JSON.stringify(personificationSessionLocalStorage, null, 2)
    )
  } catch (error) {}
}

/**
 * @returns {void}
 */
export const removeAllPersonificationSessions = () =>
  localStorage.removeItem('recylink.personificationsessioncollection')

export const usePersonificationSessionStorage = ({userEmail}) => {
  const [allSessions, setSessions] = useState(() => {
    try {
      return getAllPersonificationSessions()
    } catch (error) {
      return {}
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setSession = userEmailParam => {
    try {
      const newSessionCollection = savePersonificationSession(userEmailParam)
      setSessions(newSessionCollection)
    } catch (error) {
      console.log(error)
    }
  }

  const sessionResult = useMemo(() => {
    if (userEmail) {
      return getPersonificationSession(userEmail)
    }
    return getAllPersonificationSessions()
  }, [allSessions, userEmail])

  return [sessionResult, setSession]
}
