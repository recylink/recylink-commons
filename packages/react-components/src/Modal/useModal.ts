import {useContext} from 'react'
import {ModalContext} from './modalContext'
import {ModalContextInterface} from './ModalContextInterface'

const useModal = () => {
  const {handleModal, isOpen, setModalContent, setOpenModal, setModalProps}: ModalContextInterface = useContext(ModalContext)

  return {handleModal, isOpen, setModalContent, setOpenModal, setModalProps}
}

export default useModal
