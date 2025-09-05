import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import RadioGroup from './RadioGroup'
import { RadioOption } from './RadioInterface'

const meta: Meta<typeof RadioGroup> = {
  title: 'RecylinkReactFields/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    radioPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions: RadioOption[] = [
  {
    value: 'option1',
    label: 'Option 1',
    description: 'This is the first option',
  },
  {
    value: 'option2',
    label: 'Option 2',
    description: 'This is the second option',
  },
  {
    value: 'option3',
    label: 'Option 3',
    description: 'This is the third option',
  },
]

const optionsWithImages: RadioOption[] = [
  {
    value: 'option1',
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="https://webcode.tools/img/ottawa.jpg" 
          alt="Option 1" 
          style={{ width: '24px', height: '24px', borderRadius: '4px' }}
        />
      </div>
    ),
  },
  {
    value: 'option2',
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div 
          style={{ 
            width: '24px', 
            height: '24px', 
            backgroundColor: '#10b981', 
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          2
        </div>
      </div>
    ),
  },
  {
    value: 'option3',
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ 
          padding: '4px 8px', 
          backgroundColor: '#f59e0b', 
          color: 'white', 
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          NEW
        </span>
      </div>
    ),
  },
]

const defaultOptionsWithoutDescription: RadioOption[] = [
  {
    value: 'option1',
    label: 'Option 1',
  },
  {
    value: 'option2',
    label: 'Option 2',
  },
  {
    value: 'option3',
    label: 'Option 3',
  },
]

const defaultOptionsWithRenderer: RadioOption[] = [
  {
    value: 'option1',
    label: <div>Option 1</div>,
  },
  {
    value: 'option2',
    label: <div>Option 2</div>,
  },
  {
    value: 'option3',
    label: <div>Option 3</div>,
  },
]

const optionsWithDisabled: RadioOption[] = [
  {
    value: 'option1',
    label: 'Option 1',
    description: 'This is the first option',
  },
  {
    value: 'option2',
    label: 'Option 2',
    description: 'This is the second option',
    disabled: true,
  },
  {
    value: 'option3',
    label: 'Option 3',
    description: 'This is the third option',
  },
]

export const Default: Story = {
  args: {
    name: 'default-radio',
    options: defaultOptions,
    value: 'option1',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const Vertical: Story = {
  args: {
    name: 'vertical-radio',
    options: defaultOptions,
    value: 'option2',
    direction: 'vertical',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const Horizontal: Story = {
  args: {
    name: 'horizontal-radio',
    options: defaultOptions,
    value: 'option3',
    direction: 'horizontal',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const RadioOnRight: Story = {
  args: {
    name: 'radio-right',
    options: defaultOptions,
    value: 'option1',
    radioPosition: 'right',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const RadioOnLeft: Story = {
  args: {
    name: 'radio-left',
    options: defaultOptions,
    value: 'option1',
    radioPosition: 'left',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const RadioOnRightHorizontal: Story = {
  args: {
    name: 'radio-right-horizontal',
    options: defaultOptions,
    value: 'option2',
    direction: 'horizontal',
    radioPosition: 'right',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const Small: Story = {
  args: {
    name: 'small-radio',
    options: defaultOptions,
    value: 'option1',
    size: 'small',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const Large: Story = {
  args: {
    name: 'large-radio',
    options: defaultOptions,
    value: 'option2',
    size: 'large',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const WithDisabledOptions: Story = {
  args: {
    name: 'disabled-radio',
    options: optionsWithDisabled,
    value: 'option1',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const WithImagesAndElements: Story = {
  args: {
    name: 'images-radio',
    options: optionsWithImages,
    value: 'option1',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const DisabledGroup: Story = {
  args: {
    name: 'disabled-group-radio',
    options: defaultOptions,
    value: 'option2',
    disabled: true,
    onChange: (value) => console.log('Selected:', value),
  },
}

export const WithError: Story = {
  args: {
    name: 'error-radio',
    options: defaultOptions,
    value: 'option1',
    errorMessage: 'Please select an option',
    onChange: (value) => console.log('Selected:', value),
  },
}

export const Interactive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('option1')
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Selected: {selectedValue}</h3>
        <RadioGroup
          name="interactive-radio"
          options={defaultOptions}
          value={selectedValue}
          onChange={(value) => setSelectedValue(value as string)}
        />
      </div>
    )
  },
}

export const WithoutDescription: Story = {
  args: {
    name: 'without-description-radio',
    options: defaultOptionsWithoutDescription,
    value: 'option1',
  },
}

export const WithRendererOption: Story = {
  args: {
    name: 'with-renderer-option-radio',
    options: defaultOptionsWithRenderer,
    value: 'option1',
  },
}

export const CustomStyling: Story = {
  args: {
    name: 'custom-radio',
    options: defaultOptions,
    value: 'option2',
    direction: 'horizontal',
    className: 'custom-radio-group',
    containerClassName: 'custom-radio-container',
    style: { border: '1px solid #e5e7eb', padding: '16px', borderRadius: '8px' },
    containerStyle: { backgroundColor: '#f9fafb' },
    onChange: (value) => console.log('Selected:', value),
  },
}
