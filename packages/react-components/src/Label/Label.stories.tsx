import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Label from './Label'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RecylinkReactComponents/Label',
  component: Label
} as ComponentMeta<typeof Label>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = args => <Label {...args} />

export const OptionalLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OptionalLabel.args = {
  label: 'Label example',
  isOptional: true
}

export const RequiredLabel = Template.bind({})
RequiredLabel.args = {
  label: 'This is required',
  isRequired: true
}

export const RequiredLabelModified = Template.bind({})
RequiredLabelModified.args = {
  label: 'Label Field',
  isRequired: true,
  isRequiredLabel: 'This is a required field!'
}

export const OptionalLabelModified = Template.bind({})
OptionalLabelModified.args = {
  label: 'Label Field',
  isOptional: true,
  isOptionalLabel: 'This is an optional field'
}
