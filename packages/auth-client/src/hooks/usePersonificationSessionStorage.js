import {useMemo, useState, useEffect} from 'react'

import {
  getAllPersonificationSessions,
  getPersonificationSession,
  savePersonificationSession,
  removePersonificationSession
} from '../localStorage/personificationSession'

const usePersonificationSessionStorage = userEmail => {
  const [allSessions, setSessions] = useState(() => {
    try {
      return getAllPersonificationSessions()
    } catch (error) {
      return {}
    }
  })

  useEffect(() => {
    const storageEventHandler = event => setSessions(getAllPersonificationSessions())

    window.addEventListener('recylink.personificationsessioncollection', storageEventHandler)
    return () => {
      window.removeEventListener('recylink.personificationsessioncollection', storageEventHandler)
    }
  }, [])

  const setSession = (userEmailParam, sessionParam) => {
    try {
      if (sessionParam) {
        savePersonificationSession(userEmailParam, sessionParam)
        window.dispatchEvent(new CustomEvent('recylink.personificationsessioncollection'))
      } else {
        removePersonificationSession(userEmailParam)
        window.dispatchEvent(new CustomEvent('recylink.personificationsessioncollection'))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const sessionResult = useMemo(() => {
    if (userEmail) {
      return getPersonificationSession(userEmail) || null
    }
    return allSessions
  }, [allSessions, userEmail])

  return [sessionResult, setSession]
}

export default usePersonificationSessionStorage
