import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Tooltip from './Tooltip'

export default {
  title: 'RecylinkReactComponents/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args}>Fondo Azul</Tooltip>

export const TestTooltip = Template.bind({})
TestTooltip.args = {
  content: 'Tooltip content',
  backgroundColor: '#0078c8'
}
