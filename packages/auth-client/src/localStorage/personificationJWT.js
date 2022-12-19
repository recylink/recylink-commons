import get from 'lodash/get'
import unset from 'lodash/unset'

/**
 * @param {string} userEmail
 * @param {string} jwt
 * @returns {void}
 */
export const savePersonificationJWT = (userEmail, jwt) => {
  try {
    const personificationJWTLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationjwtcollection')) || {}

    personificationJWTLocalStorage[userEmail] = jwt

    localStorage.setItem(
      'recylink.personificationjwtcollection',
      JSON.stringify(personificationJWTLocalStorage, null, 2)
    )
  } catch (error) {}
}

/**
 *
 * @param {string} userEmail
 * @returns {string}
 */
export const getPersonificationJWT = userEmail => {
  try {
    const personificationJWTLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationjwtcollection')) || {}

    const personificationJWT = get(personificationJWTLocalStorage, userEmail)

    return personificationJWT
  } catch (e) {
    return null
  }
}

export const getAllPersonificationJWTs = () => {
  try {
    return JSON.parse(localStorage.getItem('recylink.personificationjwtcollection'))
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
    const personificationJWTLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationjwtcollection')) || {}

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
