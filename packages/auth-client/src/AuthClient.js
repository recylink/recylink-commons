import axios from 'axios'
import baseURL from './baseURL'
import clean from './clean'
import logout from './logout'
import {getJWT, saveJWT} from './localStorage/JWT'
import {getPersonificationJWT, savePersonificationJWT} from './localStorage/personificationJWT'
import {
  getPersonificationUserEmail,
  isPersonificationActive
} from './localStorage/personificationProfile'
import logoutAs from './logoutAs'

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
    const {config, statusCode} = error
    const resBaseURL = error?.response?.config?.baseURL
    if (error.code === 'ERR_NETWORK') {
      await clean()
      return Promise.reject(error)
    }
    if (resBaseURL === baseURL) {
      if (statusCode === 303 && !config._retry) {
        config._retry = true
        const userEmail = getPersonificationUserEmail()

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
      } else if (
        statusCode === 401 ||
        (statusCode === 403 && error?.response?.data?.info?.internalCode === 'kickOut')
      ) {
        const isPersonificating = isPersonificationActive()
        if (isPersonificating) {
          await logoutAs()
        } else {
          await logout()
        }
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export default AuthClient
