/**
 * @returns {void}
 */
const removeAllPersonificationJWTs = () => {
  localStorage.removeItem('recylink.personificationjwtcollection')
}

export default removeAllPersonificationJWTs
