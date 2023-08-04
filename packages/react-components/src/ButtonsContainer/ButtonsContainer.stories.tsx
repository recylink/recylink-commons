import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Button from '../Button'
import ButtonsContainer from './ButtonsContainer'

export default {
  title: 'RecylinkReactComponents/ButtonsContainer',
  component: ButtonsContainer
} as ComponentMeta<typeof ButtonsContainer>

const Template: ComponentStory<typeof ButtonsContainer> = args => (
  <ButtonsContainer {...args}>
    <Button label="Button 1" primary type="button" use="function" />
    <Button label="Button 2" danger type="button" use="function" />
  </ButtonsContainer>
)

export const TestButtonContainer = Template.bind({})

export const TestButtonContainerRight = Template.bind({})
TestButtonContainerRight.args = {
  position: 'right'
}
