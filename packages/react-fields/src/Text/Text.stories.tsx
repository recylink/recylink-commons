import {Meta, StoryObj} from '@storybook/react'
import Text from './Text'

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;


export const Default: Story = {
  args: {
    label: "Text Field example",
        placeholder: "Placeholder example",
        value: '',
        onChange: (e: any) => console.log(e)
  },
};
