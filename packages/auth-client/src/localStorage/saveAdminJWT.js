/**
 *
 * @param {string} jwt
 * @returns {void}
 */
const saveAdminJWT = jwt => {
  localStorage.setItem('recylink.jwt_admin', jwt)
}

export default saveAdminJWT
