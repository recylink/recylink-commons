import set from 'lodash/set'
/**
 *
 * @param {string} userEmail
 * @param {string} jwt
 * @returns {void}
 */
const savePersonificationJWT = (userEmail, jwt) => {
  try {
    const personificationJWTLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationjwtcollection')) || {}

    set(personificationJWTLocalStorage, userEmail, jwt)

    localStorage.setItem(
      'recylink.personificationjwtcollection',
      JSON.stringify(personificationJWTLocalStorage, null, 2)
    )
  } catch (error) {}
}

export default savePersonificationJWT
