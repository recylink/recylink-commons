const saveSession = session => {
  localStorage.setItem('recylink.session', JSON.stringify(session, null, 2))
}

export default saveSession
