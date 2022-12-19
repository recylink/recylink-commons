/**
 * @param {string} jwt
 * @returns {void}
 */
export const saveJWT = jwt => {
  try {
    localStorage.setItem('recylink.jwt', jwt)
  } catch (error) {}
}

/**
 *
 * @returns {string}
 */
export const getJWT = () => {
  try {
    return localStorage.getItem('recylink.jwt')
  } catch (e) {
    return null
  }
}

/**
 * @returns {void}
 */
export const removeJWT = () => localStorage.removeItem('recylink.jwt')
