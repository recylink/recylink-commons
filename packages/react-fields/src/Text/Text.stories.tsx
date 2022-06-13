import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react'
import Text from './Text'

export default {
  title: 'Text',
  component: Text,
  parameters: {}
} as Meta

const Template: Story = () => {
  const [state, setValue] = useState<string>('')

  const onChange = (change: string) => setValue(change)

  return (
    <>
      <Text
        label="Text Field example"
        placeholder="Placeholder example"
        value={state}
        onChange={e => onChange(e)}
      />
      value: {state}
    </>
  )
}

export const Default: Story = Template.bind({})
// Default.parameters = {}
