import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import IconsContainer from './IconsContainer'
import Icon from '../Icon/Icon'

export default {
  title: 'RecylinkReactComponents/IconsContainer',
  component: IconsContainer,
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
      }
    }
  }
} as ComponentMeta<typeof IconsContainer>

const Template: ComponentStory<typeof IconsContainer> = args => (
    <IconsContainer {...args}>
        <Icon library="fi" icon="FiEdit" />
        <Icon library="fi" icon="FiX" />
    </IconsContainer>
    
)
export const TestIconContainer = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TestIconContainer.args = {
  position: 'left'
}
