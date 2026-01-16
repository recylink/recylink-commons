import React, {FC, useMemo} from 'react'

import Button from '../Button'
import ViewportSuspenseLoading from '../ViewportSuspenseLoading'

import {ModalProps} from './ModalProps.types'
import useModal from './useModal'

const ShowModal: FC<ModalProps> = props => {
  const {handleModal} = useModal()

  const getClassName = useMemo(() => {
    const className: string[] = []
    if (props.className) {
      className.push(props.className)
    }
    return className.join(' ')
  }, [props.className])

  const submit = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    try {
      await props.onConfirm(e)
      return
    } catch (error) {
      console.error(error)
    }
  }

  const renderContent = () => (
    <ViewportSuspenseLoading>
      <div className={props.contentClassName} style={{...props.style, ...{width: '100%'}}}>
        {props.content}
      </div>
    </ViewportSuspenseLoading>
  )

  const open = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (props.children) {
      e.stopPropagation()
    }
    handleModal(renderContent(), {
      title: props.title,
      onConfirm: async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => await submit(e),
      confirmText: props.confirmText || 'Guardar',
      confirmDisabled: props.confirmDisabled,
      disableOutsideClick: props.disableOutsideClick
    })
  }

  const renderButton = () => (
    <Button
      use="function"
      primary={props.primary}
      danger={props.danger}
      onClick={open}
      style={props.buttonStyle}
      disabled={props.disabled}
      link={props.link}
      label={props.label}
      type={props.buttonType}
      iconName={props.buttonIconName}
      iconLibrary={props.buttonIconLibrary}
      className={props.buttonClassName}
    />
  )

  return props.children ? (
    <div onClick={open} className={getClassName}>
      {props.children}
    </div>
  ) : (
    renderButton()
  )
}

export default ShowModal
