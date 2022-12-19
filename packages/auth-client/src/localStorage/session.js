/**
 * @param {object} session
 * @returns {void}
 */
export const saveSession = session => {
  try {
    localStorage.setItem('recylink.session', JSON.stringify(session, null, 2))
  } catch (error) {}
}

/**
 * @returns {object}
 */
export const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem('recylink.session')) || {}
  } catch (e) {
    return {}
  }
}

/**
 * @returns {void}
 */
export const removeSession = () => localStorage.removeItem('recylink.session')
