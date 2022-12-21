import {useMemo, useState, useEffect} from 'react'
import unset from 'lodash/unset'
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
    function storageEventHandler(event) {
      if (event.key === 'recylink.personificationsessioncollection') {
        setSessions(getAllPersonificationSessions())
      }
    }
    window.addEventListener('storage', storageEventHandler)
    return () => {
      window.removeEventListener('storage', storageEventHandler)
    }
  }, [])

  const setSession = (userEmailParam, sessionParam) => {
    try {
      if (sessionParam) {
        setSessions({...allSessions, [userEmailParam]: sessionParam})
        savePersonificationSession(userEmailParam, sessionParam)
      } else {
        setSessions(unset(allSessions, userEmailParam))
        removePersonificationSession(userEmailParam)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const sessionResult = useMemo(() => {
    if (userEmail) {
      return getPersonificationSession(userEmail)
    }
    return allSessions
  }, [allSessions, userEmail])

  return [sessionResult, setSession]
}

export default usePersonificationSessionStorage
