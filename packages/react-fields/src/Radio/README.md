# Radio Component

A flexible and accessible radio button component that supports both individual radio items and radio groups.

## Features

- ✅ Radio group management
- ✅ Individual radio items
- ✅ Horizontal and vertical layouts
- ✅ Multiple sizes (small, medium, large)
- ✅ Disabled states (group and individual items)
- ✅ Error message support
- ✅ Custom styling
- ✅ Accessibility features
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Dark mode support

## Basic Usage

### RadioGroup

```tsx
import {RadioGroup} from '@recylink/react-fields'

const options = [
  {value: 'option1', label: 'Option 1', description: 'First option'},
  {value: 'option2', label: 'Option 2', description: 'Second option'},
  {value: 'option3', label: 'Option 3', description: 'Third option'}
]

function MyComponent() {
  const [selectedValue, setSelectedValue] = useState('option1')

  return (
    <RadioGroup
      name="my-radio-group"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
    />
  )
}
```

### RadioItem (Individual)

```tsx
import {RadioItem} from '@recylink/react-fields'

function MyComponent() {
  const [selectedValue, setSelectedValue] = useState('option1')

  return (
    <RadioItem
      name="my-radio"
      value="option1"
      label="Option 1"
      description="This is option 1"
      checked={selectedValue === 'option1'}
      onChange={setSelectedValue}
    />
  )
}
```

## Props

### RadioGroup Props

| Prop                 | Type                                | Default      | Description                                        |
| -------------------- | ----------------------------------- | ------------ | -------------------------------------------------- |
| `name`               | `string`                            | **Required** | Name attribute for the radio group                 |
| `value`              | `string \| number`                  | `undefined`  | Currently selected value                           |
| `onChange`           | `(value: string \| number) => void` | **Required** | Callback when selection changes                    |
| `options`            | `RadioOption[]`                     | **Required** | Array of radio options                             |
| `direction`          | `'horizontal' \| 'vertical'`        | `'vertical'` | Layout direction                                   |
| `size`               | `'small' \| 'medium' \| 'large'`    | `'medium'`   | Component size                                     |
| `radioPosition`      | `'left' \| 'right'`                 | `'left'`     | Position of the radio button relative to the label |
| `disabled`           | `boolean`                           | `false`      | Disable entire group                               |
| `errorMessage`       | `string`                            | `undefined`  | Error message to display                           |
| `className`          | `string`                            | `undefined`  | Additional CSS class name                          |
| `style`              | `React.CSSProperties`               | `{}`         | Inline styles                                      |
| `containerClassName` | `string`                            | `undefined`  | Container CSS class name                           |
| `containerStyle`     | `React.CSSProperties`               | `{}`         | Container inline styles                            |

### RadioItem Props

| Prop            | Type                                | Default      | Description                          |
| --------------- | ----------------------------------- | ------------ | ------------------------------------ |
| `name`          | `string`                            | **Required** | Name attribute for the radio input   |
| `value`         | `string \| number`                  | **Required** | Value of the radio option            |
| `label`         | `string \| ReactNode`               | **Required** | Label text or custom element         |
| `description`   | `string \| ReactNode`               | `undefined`  | Optional description text or element |
| `checked`       | `boolean`                           | **Required** | Whether the radio is selected        |
| `disabled`      | `boolean`                           | `false`      | Disable this radio item              |
| `onChange`      | `(value: string \| number) => void` | **Required** | Callback when selected               |
| `size`          | `'small' \| 'medium' \| 'large'`    | `'medium'`   | Component size                       |
| `radioPosition` | `'left' \| 'right'`                 | `'left'`     | Position of the radio button         |
| `className`     | `string`                            | `undefined`  | Additional CSS class name            |
| `style`         | `React.CSSProperties`               | `{}`         | Inline styles                        |

## RadioOption Interface

```tsx
interface RadioOption {
  value: string | number
  label: string | ReactNode
  description?: string | ReactNode
  disabled?: boolean
}
```

## Examples

### Basic Radio Group

```tsx
<RadioGroup
  name="basic-radio"
  options={[
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'}
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

### Horizontal Layout

```tsx
<RadioGroup
  name="horizontal-radio"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  direction="horizontal"
/>
```

### Radio Position

```tsx
// Radio button to the left of the label (default)
<RadioGroup
  name="radio-left"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  radioPosition="left"
/>

// Radio button to the right of the label
<RadioGroup
  name="radio-right"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  radioPosition="right"
/>

// Horizontal layout with radio button to the right of the label
<RadioGroup
  name="radio-right-horizontal"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  direction="horizontal"
  radioPosition="right"
/>
```

### With Descriptions

```tsx
<RadioGroup
  name="descriptions-radio"
  options={[
    {
      value: 'basic',
      label: 'Basic Plan',
      description: 'Perfect for small teams'
    },
    {
      value: 'pro',
      label: 'Pro Plan',
      description: 'Best for growing businesses'
    },
    {
      value: 'enterprise',
      label: 'Enterprise Plan',
      description: 'For large organizations'
    }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

### Different Sizes

```tsx
<RadioGroup
  name="small-radio"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  size="small"
/>

<RadioGroup
  name="large-radio"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  size="large"
/>
```

### With Disabled Options

```tsx
<RadioGroup
  name="disabled-radio"
  options={[
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2', disabled: true},
    {value: 'option3', label: 'Option 3'}
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

### With Images and Custom Elements

```tsx
<RadioGroup
  name="images-radio"
  options={[
    {
      value: 'option1',
      label: (
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <img
            src="/path/to/image.png"
            alt="Option 1"
            style={{width: '24px', height: '24px', borderRadius: '4px'}}
          />
          <span>Option with Image</span>
        </div>
      ),
      description: 'This option includes an image'
    },
    {
      value: 'option2',
      label: (
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
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
            }}>
            2
          </div>
          <span>Option with Custom Div</span>
        </div>
      ),
      description: 'This option includes a custom div element'
    },
    {
      value: 'option3',
      label: (
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span
            style={{
              padding: '4px 8px',
              backgroundColor: '#f59e0b',
              color: 'white',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
            NEW
          </span>
          <span>Option with Badge</span>
        </div>
      ),
      description: 'This option includes a badge element'
    }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

### With Error Message

```tsx
<RadioGroup
  name="error-radio"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  errorMessage="Please select an option"
/>
```

### Disabled Group

```tsx
<RadioGroup
  name="disabled-group"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  disabled={true}
/>
```

### Custom Styling

```tsx
<RadioGroup
  name="custom-radio"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  className="my-custom-class"
  containerClassName="my-container-class"
  style={{border: '1px solid #ccc', padding: '16px'}}
  containerStyle={{backgroundColor: '#f5f5f5'}}
/>
```

## Accessibility

The Radio component includes several accessibility features:

- **Proper ARIA attributes**: Each radio input has appropriate `aria-*` attributes
- **Keyboard navigation**: Full keyboard support for navigation and selection
- **Focus management**: Clear focus indicators and proper focus handling
- **Screen reader support**: Proper labeling and descriptions for screen readers
- **Semantic HTML**: Uses proper HTML structure with `<input type="radio">` elements

## Styling

The component uses CSS custom properties for easy theming:

```css
.recylink-radio-item-custom {
  --radio-border-color: #d1d5db;
  --radio-checked-color: #007bff;
  --radio-disabled-color: #e5e7eb;
}
```

## Migration from Legacy Radio

If you're migrating from the legacy Radio component, here's how to update your code:

### Before (Legacy)

```tsx
<Radio
  value={selectedValue}
  onChange={setSelectedValue}
  options={[
    {option: 'option1', label: 'Option 1'},
    {option: 'option2', label: 'Option 2'}
  ]}
/>
```

### After (New)

```tsx
<RadioGroup
  name="my-radio-group"
  value={selectedValue}
  onChange={setSelectedValue}
  options={[
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'}
  ]}
/>
```

The main changes are:

- Use `RadioGroup` instead of `Radio`
- Add a `name` prop (required)
- Change `option` to `value` in the options array
- The component structure is more semantic and accessible
