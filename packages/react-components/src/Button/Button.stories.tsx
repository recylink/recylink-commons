import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Button from './Button'

export default {
  title: 'RecylinkReactComponents/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const TestButton = Template.bind({})
TestButton.args = {
  label: 'Label',
  onClick: () => console.log('Clicked')
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
