import {useContext} from 'react'
import {ModalContext} from './modalContext'
import {ModalContextInterface} from './ModalContextInterface'

const useModal = () => {
  const {handleModal}: ModalContextInterface = useContext(ModalContext)

  return handleModal
}

export default useModal
