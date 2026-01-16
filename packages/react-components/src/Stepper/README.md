# Stepper Component

A flexible and customizable stepper component for displaying multi-step processes or workflows.

## Features

- ✅ Horizontal and vertical layouts
- ✅ Customizable colors and styling
- ✅ Step descriptions support
- ✅ Clickable steps (optional)
- ✅ Disabled steps support
- ✅ Step numbers (optional)
- ✅ Responsive design
- ✅ Dark mode support
- ✅ TypeScript support

## Basic Usage

```tsx
import {Stepper} from '@recylink/react-components'

const steps = [
  {id: 1, label: 'Select waste'},
  {id: 2, label: 'Select transporter'},
  {id: 3, label: 'Schedule operation'}
]

function MyComponent() {
  return <Stepper steps={steps} currentStep={0} />
}
```

## Props

| Prop              | Type                                             | Default        | Description                        |
| ----------------- | ------------------------------------------------ | -------------- | ---------------------------------- |
| `steps`           | `StepperStep[]`                                  | **Required**   | Array of step objects              |
| `currentStep`     | `number`                                         | `0`            | Index of the currently active step |
| `onStepClick`     | `(stepIndex: number, step: StepperStep) => void` | `undefined`    | Callback when a step is clicked    |
| `className`       | `string`                                         | `undefined`    | Additional CSS class name          |
| `style`           | `React.CSSProperties`                            | `{}`           | Inline styles                      |
| `showStepNumbers` | `boolean`                                        | `false`        | Show step numbers                  |
| `variant`         | `'horizontal' \| 'vertical'`                     | `'horizontal'` | Layout direction                   |
| `size`            | `'small' \| 'medium' \| 'large'`                 | `'medium'`     | Component size                     |
| `activeColor`     | `string`                                         | `'#007bff'`    | Color for active step              |
| `inactiveColor`   | `string`                                         | `'#6c757d'`    | Color for inactive steps           |
| `separatorColor`  | `string`                                         | `'#6c757d'`    | Color for separators               |
| `showSeparators`  | `boolean`                                        | `true`         | Show separators between steps      |
| `clickable`       | `boolean`                                        | `false`        | Make steps clickable               |

## StepperStep Interface

```tsx
interface StepperStep {
  id: string | number
  label: string
  description?: string
  disabled?: boolean
}
```

## Examples

### Basic Stepper

```tsx
<Stepper steps={steps} currentStep={1} />
```

### With Descriptions

```tsx
const stepsWithDescriptions = [
  {
    id: 1,
    label: 'Select waste',
    description: 'Choose the type of waste to process'
  },
  {
    id: 2,
    label: 'Select transporter',
    description: 'Select an available transporter'
  },
  {
    id: 3,
    label: 'Schedule operation',
    description: 'Schedule the date and time'
  }
]

<Stepper
  steps={stepsWithDescriptions}
  currentStep={1}
/>
```

### Clickable Steps

```tsx
const [currentStep, setCurrentStep] = useState(0)

const handleStepClick = (stepIndex: number, step: StepperStep) => {
  if (!step.disabled) {
    setCurrentStep(stepIndex)
  }
}

;<Stepper steps={steps} currentStep={currentStep} clickable={true} onStepClick={handleStepClick} />
```

### With Step Numbers

```tsx
<Stepper steps={steps} currentStep={1} showStepNumbers={true} />
```

### Custom Colors

```tsx
<Stepper
  steps={steps}
  currentStep={1}
  activeColor="#28a745"
  inactiveColor="#6f42c1"
  separatorColor="#fd7e14"
/>
```

### Vertical Layout

```tsx
<Stepper steps={steps} currentStep={1} variant="vertical" />
```

### Different Sizes

```tsx
<Stepper steps={steps} currentStep={1} size="small" />
<Stepper steps={steps} currentStep={1} size="medium" />
<Stepper steps={steps} currentStep={1} size="large" />
```

### With Disabled Steps

```tsx
const stepsWithDisabled = [
  { id: 1, label: 'Step 1' },
  { id: 2, label: 'Step 2', disabled: true },
  { id: 3, label: 'Step 3' }
]

<Stepper
  steps={stepsWithDisabled}
  currentStep={0}
  clickable={true}
/>
```

## Styling

The component uses CSS custom properties for colors, making it easy to customize:

```css
.recylink-stepper {
  --active-color: #007bff;
  --inactive-color: #6c757d;
  --separator-color: #6c757d;
}
```

## Accessibility

- The component is keyboard accessible
- Screen readers will announce the current step
- Disabled steps are properly marked with `aria-disabled`
- Clickable steps have proper focus indicators
