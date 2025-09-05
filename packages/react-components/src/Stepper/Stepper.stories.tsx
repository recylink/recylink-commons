import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Stepper from './Stepper'
import { StepperStep } from './StepperInterface'

const meta: Meta<typeof Stepper> = {
  title: 'RecylinkReactComponents/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 2 },
    },
    variant: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showStepNumbers: {
      control: { type: 'boolean' },
    },
    showSeparators: {
      control: { type: 'boolean' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
    activeColor: {
      control: { type: 'color' },
    },
    inactiveColor: {
      control: { type: 'color' },
    },
    separatorColor: {
      control: { type: 'color' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultSteps: StepperStep[] = [
  {
    id: 1,
    label: 'Step 1',
  },
  {
    id: 2,
    label: 'Step 2',
  },
  {
    id: 3,
    label: 'Step 3',
  },
]

const stepsWithDescriptions: StepperStep[] = [
  {
    id: 1,
    label: 'Step 1',
    description: 'Elige el tipo de residuo a procesar',
  },
  {
    id: 2,
    label: 'Step 2',
    description: 'Selecciona el transportista disponible',
  },
  {
    id: 3,
    label: 'Step 3',
    description: 'Programa la fecha y hora de la operación',
  },
]

const stepsWithDisabled: StepperStep[] = [
  {
    id: 1,
    label: 'Step 1',
  },
  {
    id: 2,
    label: 'Step 2',
    disabled: true,
  },
  {
    id: 3,
    label: 'Step 3',
  },
]

export const Default: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 0,
  },
}

export const SecondStep: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
  },
}

export const Completed: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 2,
  },
}

export const WithDescriptions: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
  },
}

export const WithStepNumbers: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
    showStepNumbers: true,
  },
}

export const WithoutSeparators: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
    showSeparators: false,
  },
}

export const Clickable: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)
    
    const handleStepClick = (stepIndex: number, step: StepperStep) => {
      if (!step.disabled) {
        setCurrentStep(stepIndex)
      }
    }
    
    return (
      <Stepper
        steps={stepsWithDisabled}
        currentStep={currentStep}
        clickable={true}
        onStepClick={handleStepClick}
      />
    )
  },
}

export const Vertical: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    variant: 'vertical',
  },
}

export const Small: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
    size: 'large',
  },
}

export const CustomColors: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
    activeColor: '#28a745',
    inactiveColor: '#6f42c1',
    separatorColor: '#fd7e14',
  },
}

export const WithDisabledSteps: Story = {
  args: {
    steps: stepsWithDisabled,
    currentStep: 0,
    clickable: true,
  },
}
