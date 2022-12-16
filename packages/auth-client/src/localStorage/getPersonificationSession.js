import get from 'lodash/get'
/**
 *
 * @param {string} userEmail
 * @returns {object}
 */
const getPersonificationSession = userEmail => {
  try {
    const personificationSessionLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationsessioncollection')) || {}

    const personificationSession = get(personificationSessionLocalStorage, userEmail)

    return personificationSession
  } catch (e) {
    return null
  }
}

export default getPersonificationSession
