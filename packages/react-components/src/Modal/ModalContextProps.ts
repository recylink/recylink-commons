import React from 'react'
import {ModalProps} from './ModalProps'

export type ModalContextProps = {
  isOpen?: boolean
  setOpenModal?: (open: boolean) => void
  handleModal?: (content: React.ReactNode, props: ModalProps) => void
  modalContent?: React.ReactNode
  setModalContent?: (content: React.ReactNode) => void
  setModalProps?: (props: ModalProps) => void
}
