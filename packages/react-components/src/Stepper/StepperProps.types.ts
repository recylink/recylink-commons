import React from 'react'

export type StepperStepProps = {
  id: string | number
  label: string
  description?: string
  disabled?: boolean
}

export type StepperProps = {
  steps: StepperStepProps[]
  currentStep?: number
  onStepClick?: (stepIndex: number, step: StepperStepProps) => void
  className?: string
  style?: React.CSSProperties
  showStepNumbers?: boolean
  variant?: 'horizontal' | 'vertical'
  size?: 'small' | 'medium' | 'large'
  activeColor?: string
  inactiveColor?: string
  separatorColor?: string
  showSeparators?: boolean
  clickable?: boolean
}
