import axios from 'axios'
import get from 'lodash/get'
import baseURL from './baseURL'
import clean from './clean'
import {getJWT, saveJWT} from './localStorage/JWT'
import {getCsrfToken} from './localStorage/csrfToken'
import {getPersonificationCsrfToken} from './localStorage/personificationCsrfToken'
import {
  getPersonificationJWT,
  removePersonificationJWT,
  savePersonificationJWT
} from './localStorage/personificationJWT'
import {
  getPersonificationUserEmail,
  isPersonificationActive
} from './localStorage/personificationProfile'
import {
  getPersonificationSession,
  removePersonificationSession
} from './localStorage/personificationSession'
import {getSession} from './localStorage/session'
import logout from './logout'
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
  const nonce = new Date().getTime()

  if (userEmail) {
    const customJWT = getPersonificationJWT(userEmail)
    const personificationSession = getPersonificationSession(userEmail)

    config.headers.Authorization = customJWT ? buildAuthorization(customJWT) : ''
    config.headers['X-ORION-NONCE'] = nonce
    config.headers['X-ORION-PUBLICKEY'] = personificationSession
      ? personificationSession.publicKey
      : ''
  } else {
    const jwtPayload = getJWT()
    const session = getSession()

    config.headers.Authorization = jwtPayload ? buildAuthorization(jwtPayload) : ''
    config.headers['X-ORION-NONCE'] = nonce
    config.headers['X-ORION-PUBLICKEY'] = session ? session.publicKey : ''
  }
  return config
})

AuthClient.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error.code === 'ERR_NETWORK' || error.code === 'ERR_BAD_RESPONSE') {
      await clean()
      return Promise.reject(error)
    }

    const {config} = error

    const statusCode = get(error, 'response.data.status', error.response.status)
    const resBaseURL = error?.response?.config?.baseURL
    const url = error?.response?.config?.url
    if (resBaseURL === baseURL) {
      if (statusCode === 303 && !config._retry) {
        config._retry = true

        //El CSRF a usar dependerá de si estamos personificando
        //Usar este endpoint requiere del uso del CSRF
        const userEmail = getPersonificationUserEmail()
        if (userEmail) {
          config.headers['X-CSRF-TOKEN'] = getPersonificationCsrfToken(userEmail)
        } else {
          config.headers['X-CSRF-TOKEN'] = getCsrfToken()
        }

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
        //Si retorna un 401 o un 403 con un internal code especifico de "kickOut"; iniciamos la lógica para expulsar al cliente del sistema
        statusCode === 401 ||
        (statusCode === 403 &&
          (error?.response?.data?.info?.internalCode === 'kickOut' ||
            error?.response?.data?.instruction === 'kickOut')) ||
        (statusCode === 503 &&
          (error?.response?.data?.info?.internalCode === 'kickOut' ||
            error?.response?.data?.instruction === 'kickOut'))
      ) {
        const isPersonificating = isPersonificationActive()
        if (isPersonificating) {
          //Si es un cliente que esta personificando
          if (url !== 'auth/depersonification_user') {
            await logoutAs()
          } else {
            const userEmail = getPersonificationUserEmail()

            await removePersonificationJWT(userEmail)
            await removePersonificationSession(userEmail)
          }
        } else {
          //Si es un cliente normal
          if (url !== 'auth/logout') {
            //Para prevenir bucle, donde el propio endpoint "auth/logout" no puede llevar a estas condiciones
            await logout()
          } else {
            await clean()
          }
        }

        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export default AuthClient
