import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Icon from './Icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RecylinkReactComponents/Icon',
  component: Icon,
  tags: ['autodocs'],
  // argTypes: {
  //   library: {
  //     options: ['fi', 'fa'],
  //     control: {
  //       type: 'radio',
  //     }
  //   }
  // }
} as ComponentMeta<typeof Icon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const TestIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TestIcon.args = {
  library: 'fi',
  icon: 'FiEdit'
}

export const OnClickIcon = Template.bind({})
OnClickIcon.args = {
  library: 'fi',
  icon: 'FiX',
  onClick: () => alert('Clicked')
}