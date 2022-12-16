/**
 *
 * @param {string} jwt
 * @returns {void}
 */
const saveJWT = jwt => {
  localStorage.setItem('recylink.jwt', jwt)
}

export default saveJWT
