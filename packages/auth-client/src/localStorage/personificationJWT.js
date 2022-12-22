import get from 'lodash/get'
import unset from 'lodash/unset'
import {getPersonificationUserEmail} from './personificationProfile'

/**
 * @param {string} userEmail
 * @param {string} jwt
 * @returns {void}
 */
export const savePersonificationJWT = (userEmail, jwt) => {
  try {
    if (!userEmail) {
      throw new Error('userEmail required')
    }
    if (!jwt) {
      throw new Error('jwt required')
    }

    const personificationJWTLocalStorage = getAllPersonificationJWTs()

    personificationJWTLocalStorage[userEmail] = jwt

    localStorage.setItem(
      'recylink.personificationjwtcollection',
      JSON.stringify(personificationJWTLocalStorage, null, 2)
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
export const getPersonificationJWT = userEmail => {
  if (!userEmail) {
    return null
  }
  try {
    const personificationJWTLocalStorage = getAllPersonificationJWTs()

    const personificationJWT = get(personificationJWTLocalStorage, userEmail)

    if (!personificationJWT) {
      return null
    }

    return personificationJWT
  } catch (e) {
    return null
  }
}

/**
 *
 * @returns {string}
 */
export const getCurrentPersonificationJWT = () => {
  try {
    const userEmail = getPersonificationUserEmail()

    if (!userEmail) {
      return null
    }

    const personificationJWTLocalStorage = getAllPersonificationJWTs()

    const personificationJWT = get(personificationJWTLocalStorage, userEmail)

    if (!personificationJWT) {
      return null
    }

    return personificationJWT
  } catch (e) {
    return null
  }
}

export const getAllPersonificationJWTs = () => {
  try {
    return JSON.parse(localStorage.getItem('recylink.personificationjwtcollection')) || {}
  } catch (e) {
    return null
  }
}

/**
 * @param {string} userEmail
 * @returns {void}
 */
export const removePersonificationJWT = userEmail => {
  try {
    const personificationJWTLocalStorage = getAllPersonificationJWTs()

    unset(personificationJWTLocalStorage, userEmail)

    localStorage.setItem(
      'recylink.personificationjwtcollection',
      JSON.stringify(personificationJWTLocalStorage, null, 2)
    )
  } catch (error) {}
}

/**
 * @returns {void}
 */
export const removeAllPersonificationJWTs = () =>
  localStorage.removeItem('recylink.personificationjwtcollection')
