/**
 * @param {string} csrf_token
 * @returns {void}
 */
export const saveCsrfToken = csrf_token => {
  try {
    localStorage.setItem('recylink.csrf_token', csrf_token)
  } catch (error) {}
}

/**
 *
 * @returns {string}
 */
export const getCsrfToken = () => {
  try {
    return localStorage.getItem('recylink.csrf_token')
  } catch (e) {
    return null
  }
}

/**
 * @returns {void}
 */
export const removeCsrfToken = () => localStorage.removeItem('recylink.csrf_token')
