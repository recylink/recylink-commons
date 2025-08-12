import {ReactNode} from 'react'

export interface StepperStep {
  id: string | number
  label: string
  description?: string
  disabled?: boolean
}

export interface StepperInterface {
  steps: StepperStep[]
  currentStep?: number
  onStepClick?: (stepIndex: number, step: StepperStep) => void
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
