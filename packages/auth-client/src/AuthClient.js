import axios from 'axios'
import baseURL from './baseURL'
import clean from './clean'
import {getJWT, saveJWT} from './localStorage/JWT'
import {getPersonificationJWT, savePersonificationJWT} from './localStorage/personificationJWT'
import {getPersonificationUserEmail} from './localStorage/personificationProfile'

const buildAuthorization = jwtPayload => `Bearer ${jwtPayload}`

const AuthClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

AuthClient.interceptors.request.use(config => {
  const userEmail = getPersonificationUserEmail()
  if (userEmail) {
    const customJWT = getPersonificationJWT(userEmail)
    config.headers.Authorization = customJWT ? buildAuthorization(customJWT) : ''
  } else {
    const jwtPayload = getJWT()
    config.headers.Authorization = jwtPayload ? buildAuthorization(jwtPayload) : ''
  }
  return config
})

AuthClient.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const {config} = error
    const status = error?.response?.status || 0
    const resBaseURL = error?.response?.config?.baseURL
    if (error.code === 'ERR_NETWORK') {
      await clean()
      return Promise.reject(error)
    }
    if (resBaseURL === baseURL) {
      if (status === 303 && !config._retry) {
        config._retry = true
        const userEmail = personificationProfile()

        await AuthClient.post('auth/refresh_jwt', {}, config)
          .then(res => {
            if (res.status === 201) {
              const newJWTPayload = res.data?.jwt
              if (userEmail) {
                savePersonificationJWT(userEmail, newJWTPayload)
              } else {
                saveJWT(newJWTPayload)
              }
              config.headers.Authorization = buildAuthorization(newJWTPayload)
              return AuthClient(config)
            }
          })
          .catch(error => {
            throw error
          })
      } else if (status === 401) {
        await clean()
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export default AuthClient
