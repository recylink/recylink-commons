import get from 'lodash/get'
import {getPersonificationUserEmail} from './personificationProfile'

export const getAllPersonificationCsrfTokens = () => {
  try {
    return JSON.parse(localStorage.getItem('recylink.personificationcsrftokencollection')) || {}
  } catch (e) {
    return null
  }
}

/**
 * @param {string} userEmail
 * @param {string} csrfToken
 * @returns {void}
 */
export const savePersonificationCsrfToken = (userEmail, csrfToken) => {
  try {
    if (!userEmail) {
      throw new Error('userEmail required')
    }
    if (!csrfToken) {
      throw new Error('csrfToken required')
    }

    const personificationJCsrfTokenLocalStorage = getAllPersonificationCsrfTokens()

    personificationJCsrfTokenLocalStorage[userEmail] = csrfToken

    localStorage.setItem(
      'recylink.personificationcsrftokencollection',
      JSON.stringify(personificationJCsrfTokenLocalStorage, null, 2)
    )
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {string} userEmail
 * @returns {string}
 */
export const getPersonificationCsrfToken = userEmail => {
  if (!userEmail) {
    return null
  }
  try {
    const personificationJCsrfTokenLocalStorage = getAllPersonificationCsrfTokens()

    const personificationCsrfToken = get(personificationJCsrfTokenLocalStorage, userEmail)

    if (!personificationCsrfToken) {
      return null
    }

    return personificationCsrfToken
  } catch (e) {
    return null
  }
}

/**
 *
 * @returns {string}
 */
export const getCurrentPersonificationCsrfToken = () => {
  try {
    const userEmail = getPersonificationUserEmail()

    if (!userEmail) {
      return null
    }

    const personificationJCsrfTokenLocalStorage = getAllPersonificationCsrfTokens()

    const personificationCsrfToken = get(personificationJCsrfTokenLocalStorage, userEmail)

    if (!personificationCsrfToken) {
      return null
    }

    return personificationCsrfToken
  } catch (e) {
    return null
  }
}
