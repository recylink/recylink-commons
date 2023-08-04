import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import useModal from './useModal'
import ViewportSuspenseLoading from '../ViewportSuspenseLoading'
import Button from '../Button'

function ShowModal(props) {
  const {handleModal} = useModal()

  const getClassName = useMemo(() => {
    let className: string[] = []
    if (props.className) {
      className.push(props.className)
    }
    return className.join(' ')
  }, [props.className])

  const submit = async () => {
    try {
      await props.confirm()
      return
    } catch (error) {}
  }

  const renderContent = () => (
    <ViewportSuspenseLoading>
      <div className={props.contentClassName} style={{...props.style, ...{width: '100%'}}}>
        {props.content}
      </div>
    </ViewportSuspenseLoading>
  )

  const open = e => {
    props.children && e.stopPropagation()
    handleModal(renderContent(), {
      title: props.title,
      onConfirm: async () => await submit(),
      confirmText: props.confirmText,
      confirmDisabled: props.confirmDisabled
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
ShowModal.propTypes = {
  showModal: PropTypes.func,
  label: PropTypes.node,
  title: PropTypes.node,
  confirmText: PropTypes.node,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  link: PropTypes.bool,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  content: PropTypes.node,
  confirm: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  confirmDisabled: PropTypes.bool,
  cancelDisabled: PropTypes.bool,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  bottomLeft: PropTypes.node,

  buttonType: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonIconLibrary: PropTypes.string,
  buttonIconName: PropTypes.string
}
ShowModal.defaultProps = {
  confirmText: 'Guardar',
  buttonStyle: {},
  onSuccess: () => {},
  confirm: () => {},
  style: {},
  buttonType: 'button',
  buttonIconLibrary: 'fi'
}
export default ShowModal
