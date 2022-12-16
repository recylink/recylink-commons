/**
 *
 * @returns {object}
 */
const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem('recylink.session')) || {}
  } catch (e) {
    return {}
  }
}

export default getSession
