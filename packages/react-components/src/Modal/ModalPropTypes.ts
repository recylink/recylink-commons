import PropTypes from 'prop-types'

export default {
  title: PropTypes.string,
  confirmText: PropTypes.string,
  confirmDisabled: PropTypes.bool,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  cancelDisabled: PropTypes.bool,
  onCancel: PropTypes.func,
  contentClassName: PropTypes.string,
  className: PropTypes.string,

  disabled: PropTypes.bool,
  buttonType: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonIconLibrary: PropTypes.string,
  buttonIconName: PropTypes.string,

  isOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  setOpenModal: PropTypes.func.isRequired,
  modalContent: PropTypes.any,
  setModalContent: PropTypes.func.isRequired,
  setModalProps: PropTypes.func
}
