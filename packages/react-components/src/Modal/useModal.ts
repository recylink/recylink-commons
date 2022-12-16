import {useContext} from 'react'
import {ModalContext} from './modalContext'
import {ModalContextInterface} from './ModalContextInterface'

const useModal = () => {
  const {handleModal, isOpen, setModalContent}: ModalContextInterface = useContext(ModalContext)

  return {handleModal, isOpen, setModalContent}
}

export default useModal
