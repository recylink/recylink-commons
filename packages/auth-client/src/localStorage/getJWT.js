const getJWT = () => {
  try {
    return localStorage.getItem('recylink.jwt')
  } catch (e) {
    return null
  }
}

export default getJWT
