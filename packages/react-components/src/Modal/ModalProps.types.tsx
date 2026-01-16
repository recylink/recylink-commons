import React from 'react'

export type ModalProps = {
  title?: string | React.ReactNode
  content?: React.ReactNode
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
  disableOutsideClick?: boolean

  children?: React.ReactNode

  primary?: boolean
  danger?: boolean
  outline?: boolean
  disabled?: boolean
  link?: boolean
  label?: string | React.ReactNode
  iconLibrary?: 'li'
  iconName?: string

  style?: React.CSSProperties
  buttonStyle?: React.CSSProperties
  buttonContainerClassName?: string
  buttonClassName?: string
  buttonType?: 'button' | 'icon'
  buttonIconLibrary?: 'fi' | 'md'
  buttonIconName?: string
  buttonLabel?: string
  buttonIcon?: React.ReactNode

  className?: string
  contentClassName?: string
  modalContainerClassName?: string
  buttonsContainerClassName?: string
  positionContainerButtons?: 'left' | 'right' | 'space-between'

  isOpen?: boolean
  handleModal?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void | Promise<void>
  setOpenModal?: (open: boolean) => void
  modalContent?: React.ReactNode
  setModalContent?: (content: React.ReactNode) => void
  setModalProps?: (props: ModalProps) => void
}

export type ModalContextProps = {
  isOpen?: boolean
  setOpenModal?: (open: boolean) => void
  handleModal?: (content: React.ReactNode, props: ModalProps) => void | Promise<void>
  modalContent?: React.ReactNode
  setModalContent?: (content: React.ReactNode) => void
  setModalProps?: (props: ModalProps) => void
}
