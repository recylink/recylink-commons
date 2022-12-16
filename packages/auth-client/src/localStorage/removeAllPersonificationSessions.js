/**
 * @returns {void}
 */
const removeAllPersonificationSessions = () => {
  localStorage.removeItem('recylink.personificationsessioncollection')
}

export default removeAllPersonificationSessions
