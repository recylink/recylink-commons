import get from 'lodash/get'
import unset from 'lodash/unset'
import {getPersonificationUserEmail} from './personificationProfile'

/**
 * @param {string} userEmail
 * @param {object} session
 * @returns {void}
 */
export const savePersonificationSession = (userEmail, session) => {
  try {
    if (!userEmail) {
      throw new Error('userEmail required')
    }
    if (!session) {
      throw new Error('session required')
    }

    const personificationSessionLocalStorage = getAllPersonificationSessions()

    personificationSessionLocalStorage[userEmail] = session

    localStorage.setItem(
      'recylink.personificationsessioncollection',
      JSON.stringify(personificationSessionLocalStorage, null, 2)
    )

    return personificationSessionLocalStorage
  } catch (error) {
    console.log(error)
  }
}

/**
 * @param {string} userEmail
 * @returns {object}
 */
export const getPersonificationSession = userEmail => {
  if (!userEmail) {
    return null
  }
  try {
    const personificationSessionLocalStorage = getAllPersonificationSessions()

    const personificationSession = get(personificationSessionLocalStorage, userEmail)

    if (!personificationSession) {
      return null
    }

    return personificationSession
  } catch (e) {
    return null
  }
}

/**
 *
 * @returns {string}
 */
export const getCurrentPersonificationSession = () => {
  try {
    const userEmail = getPersonificationUserEmail()

    if (!userEmail) {
      return null
    }

    const personificationSessionLocalStorage = getAllPersonificationSessions()

    const personificationSession = get(personificationSessionLocalStorage, userEmail)

    if (!personificationSession) {
      return null
    }

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
    return JSON.parse(localStorage.getItem('recylink.personificationsessioncollection')) || {}
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
    const personificationSessionLocalStorage = getAllPersonificationSessions()

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
