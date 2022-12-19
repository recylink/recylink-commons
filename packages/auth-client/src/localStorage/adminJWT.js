/**
 * @param {string} jwt
 * @returns {void}
 */
export const saveAdminJWT = jwt => {
  try {
    localStorage.setItem('recylink.jwt_admin', jwt)
  } catch (error) {}
}

/**
 * @returns {string}
 */
export const getAdminJWT = () => {
  try {
    return localStorage.getItem('recylink.jwt_admin')
  } catch (e) {
    return null
  }
}

/**
 * @returns {void}
 */
export const removeAdminJWT = () => localStorage.removeItem('recylink.jwt_admin')
