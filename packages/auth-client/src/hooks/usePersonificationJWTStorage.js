import {useMemo, useState, useEffect} from 'react'
import unset from 'lodash/unset'
import {
  getAllPersonificationJWTs,
  getPersonificationJWT,
  savePersonificationJWT,
  removePersonificationJWT
} from '../localStorage/personificationJWT'

const usePersonificationJWTStorage = userEmail => {
  const [allJWTs, setJWTs] = useState(() => {
    try {
      return getAllPersonificationJWTs()
    } catch (error) {
      return {}
    }
  })

  useEffect(() => {
    function storageEventHandler(event) {
      if (event.key === 'recylink.personificationJWTcollection') {
        setJWTs(getAllPersonificationJWTs())
      }
    }
    window.addEventListener('storage', storageEventHandler)
    return () => {
      window.removeEventListener('storage', storageEventHandler)
    }
  }, [])

  const setJWT = (userEmailParam, JWTParam) => {
    try {
      if (JWTParam) {
        setJWTs({...allJWTs, [userEmailParam]: JWTParam})
        savePersonificationJWT(userEmailParam, JWTParam)
      } else {
        setJWTs(unset(allJWTs, userEmailParam))
        removePersonificationJWT(userEmailParam)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const JWTResult = useMemo(() => {
    if (userEmail) {
      return getPersonificationJWT(userEmail)
    }
    return allJWTs
  }, [allJWTs, userEmail])

  return [JWTResult, setJWT]
}

export default usePersonificationJWTStorage
