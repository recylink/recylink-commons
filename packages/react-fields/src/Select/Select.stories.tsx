import {Meta, StoryObj} from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;


export const Default: Story = {
  args: {
    label: "Select Field example",
        options: [
          {value: '1', label: 'Option 1'},
          {value: '2', label: 'Option 2'},
          {value: '3', label: 'Option 3'}
        ],
        value: null,
        onChange: (e: any) => console.log(e)
  },
};
