import {Meta, StoryObj} from '@storybook/react'
import Number from './Number'

const meta: Meta<typeof Number> = {
  component: Number,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Number>;


export const Default: Story = {
  args: {
    label:"Number Field example",
        placeholder: "Placeholder example",
        value: null,
        onChange: (e: any) => console.log(e),

  },
};
