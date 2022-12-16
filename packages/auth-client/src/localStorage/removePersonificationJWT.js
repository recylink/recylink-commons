import unset from 'lodash/unset'
/**
 * @param {string} userEmail
 * @returns {void}
 */
const removePersonificationJWT = userEmail => {
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

export default removePersonificationJWT
