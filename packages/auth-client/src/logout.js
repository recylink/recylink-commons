import AuthClient from './AuthClient'
import clean from './clean'

const logout = async () => {
  await AuthClient.post('auth/logout')
    .then(res => res.data)
    .catch(error => {
      throw error
    })
  await clean()
}

export default logout
