const getAdminJWT = () => {
  try {
    return localStorage.getItem('recylink.jwt_admin')
  } catch (e) {
    return null
  }
}

export default getAdminJWT
