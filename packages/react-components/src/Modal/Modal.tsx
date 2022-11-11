import React, {useContext, useRef} from 'react'
import {InferProps} from 'prop-types'
import ReactDOM from 'react-dom'
import {useOutsideClick} from '@recylink/react-hooks'
import Button from '../Button'
import ButtonsContainer from '../ButtonsContainer'
import SuspenseLoading from '../SuspenseLoading'
import ModalPropTypes from './ModalPropTypes'

import './styles.css'

const Modal = (props: InferProps<typeof ModalPropTypes>) => {
  const {handleModal, showModal, modalContent}: InferProps<typeof ModalPropTypes> = props

  const wrapperRef = useRef<HTMLDivElement>(null)

  useOutsideClick(wrapperRef, () => handleModal?.())

  const onClickConfirm = async e => {
    e.preventDefault()
    if (props.onConfirm) {
      await props.onConfirm()
    }
    handleModal?.()
  }

  const onClickCancel = async e => {
    e.preventDefault()
    if (props.onCancel) {
      await props.onCancel()
    }
    handleModal?.()
  }

  const confirmButton = () => (
    <Button
      primary
      type="button"
      use="function"
      label={props.confirmText}
      onClick={async e => await onClickConfirm(e)}
    />
  )

  const cancelButton = () => {
    if (!props.cancelText) {
      return null
    }
    return (
      <Button
        danger
        type="button"
        use="function"
        label={props.cancelText}
        onClick={async e => await onClickCancel(e)}
      />
    )
  }

  const renderButtons = () => (
    <ButtonsContainer position="right">
      {cancelButton()}
      {confirmButton()}
    </ButtonsContainer>
  )

  if (showModal) {
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="modal" ref={wrapperRef}>
          <div className="modal-content">
            <SuspenseLoading>{modalContent}</SuspenseLoading>
          </div>
          {renderButtons()}
        </div>
      </div>,
      document.querySelector('#modal-root')
    )
  } else return null
}

Modal.propTypes = ModalPropTypes
Modal.defaultProps = {confirmText: 'Aceptar'}
export default Modal
