import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react'
import Number from './Number'

export default {
  title: 'Number',
  component: Number,
  parameters: {}
} as Meta

const Template: Story = () => {
  const [state, setValue] = useState<number>(3)

  const onChange = (change: number) => setValue(change)

  return (
    <>
      <Number
        label="Number Field example"
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
