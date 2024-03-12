import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import useModal from './useModal'
import Modal from './Modal'
import Button from '../Button'
import {ModalProvider} from './modalContext'

export default {
  title: 'RecylinkReactComponents/Modal',
  component: Modal,
  decorators: [
    Story => (<>
    <div id="modal-root"></div>
      <ModalProvider>
        <Story />
      </ModalProvider>
    </>
        
    )
  ]
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Example = () => {
  const {handleModal} = useModal()
  return (
    <Button
          primary
          type="button"
          use="function"
          label="Open Modal"
          onClick={() =>
            handleModal(
              <div>
                <h1>Modal Content</h1>
                <p>Modal Content</p>
              </div>,
              {confirmText: 'Confirmar',
              onConfirm: () => alert('Confirmado'),
              cancelText: 'Cancelar'}
            )
          }
        />
  )
}

