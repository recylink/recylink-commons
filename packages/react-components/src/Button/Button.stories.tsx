import React from 'react'
import {Story, ComponentMeta} from '@storybook/react'
import Button from './Button'
import ButtonPropTypes from './ButtonPropTypes'
import {InferProps} from 'prop-types'
import { ButtonInterface } from './ButtonInterface'

// type ButtonPropsInterface = InferProps<typeof ButtonPropTypes>

export default {
  title: 'RecylinkReactComponents/Button',
  component: Button,
  tags: ['autodocs'],
} as ComponentMeta<typeof Button>

const Template: Story<ButtonInterface> = args => <Button {...args} />

export const TestButton = Template.bind({})
TestButton.args = {
  label: 'Label',
  onClick: () => console.log('Clicked'),
  type: 'button',
  use: 'function'
}

export const TestPrimaryButton = Template.bind({})
TestPrimaryButton.args = {
  label: 'Label',
  primary: true,
  onClick: () => console.log('Clicked')
}

export const IconButton = Template.bind({})
IconButton.args = {
  type: 'icon',
  iconLibrary: 'fi',
  iconName: 'FiX',
  onClick: () => console.log('Clicked')
}

export const HrefButton = Template.bind({})
HrefButton.args = {
  use: 'href',
  href: 'https://recylink.com',
  label: 'Href Button'
}

export const TooltipButton = Template.bind({})
TooltipButton.args = {
  label: 'Button with Tooltip',
  tooltip: 'Tooltip Text'
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  label: 'Disabled Button',
  disabled: true
}

export const LoadingButton = Template.bind({}) 
LoadingButton.args = {
  label: 'Loading Button',
  loading: true
}

export const DisabledOnlyTextButton = Template.bind({})
DisabledOnlyTextButton.args = {
  label: 'Disabled Button',
  disabled: true,
  onlyText: true
}