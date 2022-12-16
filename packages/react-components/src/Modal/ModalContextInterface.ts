export interface ModalContextInterface {
  isOpen: boolean
  setOpenModal: (...args: any[]) => any
  handleModal: (...args: any[]) => any
  modalContent: any
  setModalContent: (...args: any[]) => any
}
