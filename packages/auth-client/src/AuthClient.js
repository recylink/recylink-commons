import axios from 'axios'
import baseURL from './baseURL'
import clean from './clean'
import getJWT from './localStorage/getJWT'
import saveJWT from './localStorage/saveJWT'

const buildAuthorization = jwtPayload => `Bearer ${jwtPayload}`

const AuthClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

AuthClient.interceptors.request.use(config => {
  const jwtPayload = getJWT()
  config.headers.Authorization = jwtPayload ? buildAuthorization(jwtPayload) : ''
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
        await AuthClient.post('auth/refresh_jwt')
          .then(res => {
            if (res.status === 201) {
              const newJWTPayload = res.data?.jwt
              saveJWT(newJWTPayload)
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
