import get from 'lodash/get'
/**
 *
 * @param {string} userEmail
 * @returns {string}
 */
const getPersonificationJWT = userEmail => {
  try {
    const personificationJWTLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationjwtcollection')) || {}

    const personificationJWT = get(personificationJWTLocalStorage, userEmail)

    return personificationJWT
  } catch (e) {
    return null
  }
}

export default getPersonificationJWT
