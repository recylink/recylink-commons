import React from 'react'
import getSession from '../localStorage/getSession'
import SessionContext from './SessionContext'

const SessionProvider = props => {
  const session = getSession() || {}

  return <SessionContext.Provider value={session}>{props.children}</SessionContext.Provider>
}

return SessionProvider
