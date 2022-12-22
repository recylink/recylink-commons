import {useMemo, useState, useEffect} from 'react'

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
    const storageEventHandler = event => setJWTs(getAllPersonificationJWTs())

    window.addEventListener('recylink.personificationjwtcollection', storageEventHandler)
    return () => {
      window.removeEventListener('recylink.personificationjwtcollection', storageEventHandler)
    }
  }, [])

  const setJWT = (userEmailParam, JWTParam) => {
    try {
      if (JWTParam) {
        savePersonificationJWT(userEmailParam, JWTParam)
        window.dispatchEvent(new CustomEvent('recylink.personificationjwtcollection'))
      } else {
        removePersonificationJWT(userEmailParam)
        window.dispatchEvent(new CustomEvent('recylink.personificationjwtcollection'))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const JWTResult = useMemo(() => {
    if (userEmail) {
      return getPersonificationJWT(userEmail) || null
    }
    return allJWTs
  }, [allJWTs, userEmail])

  return [JWTResult, setJWT]
}

export default usePersonificationJWTStorage
