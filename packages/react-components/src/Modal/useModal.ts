import {useContext} from 'react'

import {ModalContext} from './modalContext'
import {ModalContextProps} from './ModalProps.types'

const useModal = () => {
  const {handleModal, isOpen, setModalContent, setOpenModal, setModalProps}: ModalContextProps =
    useContext(ModalContext)

  return {handleModal, isOpen, setModalContent, setOpenModal, setModalProps}
}

export default useModal
