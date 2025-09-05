import React from 'react'

export type ModalProps = {
  title?: string
  confirmText?: string
  confirmDisabled?: boolean
  confirmButtonClassName?:
    | 'recylink-button-primary'
    | 'recylink-button-danger'
    | 'recylink-button-disabled'
    | 'recylink-button-ghost'
    | 'recylink-button-link'
  onConfirm?: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => boolean | Promise<boolean> | void | Promise<void>
  cancelText?: string
  cancelDisabled?: boolean
  cancelButtonClassName?:
    | 'recylink-button-primary'
    | 'recylink-button-danger'
    | 'recylink-button-disabled'
    | 'recylink-button-ghost'
    | 'recylink-button-link'
  onCancel?: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => boolean | Promise<boolean> | void | Promise<void>
  contentClassName?: string
  disableOutsideClick?: boolean
  isOpen?: boolean
  handleModal?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void | Promise<void>
  setOpenModal?: (open: boolean) => void
  modalContent?: React.ReactNode
  setModalContent?: (...args: any[]) => any
  setModalProps?: (props: ModalProps) => void
  modalContainerClassName?: string
  buttonsContainerClassName?: string
  positionContainerButtons?: 'right' | 'space-between' | ''
}
