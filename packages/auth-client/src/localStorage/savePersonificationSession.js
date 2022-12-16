import set from 'lodash/set'
/**
 *
 * @param {string} userEmail
 * @param {object} session
 * @returns {void}
 */
const savePersonificationSession = (userEmail, session) => {
  try {
    const personificationSessionLocalStorage =
      JSON.parse(localStorage.getItem('recylink.personificationsessioncollection')) || {}

    set(personificationSessionLocalStorage, userEmail, session)

    localStorage.setItem(
      'recylink.personificationsessioncollection',
      JSON.stringify(personificationSessionLocalStorage, null, 2)
    )
  } catch (error) {}
}

export default savePersonificationSession
