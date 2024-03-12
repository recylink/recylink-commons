import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Tooltip from './Tooltip'

export default {
  title: 'RecylinkReactComponents/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color'
      }
    },
    textColor: {
      control: {
        type: 'color'
      }
    },
    borderColor: {
      control: {
        type: 'color'
      }
    },
    arrowColor: {
      control: {
        type: 'color'
      }
    },
    border: {
      control: {
        type: 'boolean'
      }
    },
    place: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'radio'
      }
    },
    
  }

} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args}>Fondo Azul</Tooltip>

export const TestTooltip = Template.bind({})
TestTooltip.args = {
  content: 'Tooltip content'
}

