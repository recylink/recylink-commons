import unset from 'lodash/unset'
/**
 * @param {string} userEmail
 * @returns {void}
 */
const removePersonificationSession = userEmail => {
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

export default removePersonificationSession
