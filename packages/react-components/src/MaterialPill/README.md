# MaterialPill Component

A flexible and accessible pill component for displaying material categories with automatic contrast color calculation.

## Features

- ✅ Automatic contrast color calculation
- ✅ Link support with URL prop
- ✅ Custom styling and className support
- ✅ Multiple size variants
- ✅ Hover effects and animations
- ✅ Accessibility features
- ✅ Responsive design
- ✅ Dark mode support
- ✅ TypeScript support

## Basic Usage

```tsx
import {MaterialPill} from '@recylink/react-components'

const material = {
  category: 'Plástico',
  color: '#3b82f6'
}

function MyComponent() {
  return <MaterialPill material={material} />
}
```

## Props

| Prop        | Type                  | Default      | Description                             |
| ----------- | --------------------- | ------------ | --------------------------------------- |
| `material`  | `Material`            | **Required** | Material object with category and color |
| `style`     | `React.CSSProperties` | `{}`         | Inline styles                           |
| `className` | `string`              | `''`         | Additional CSS class name               |
| `url`       | `string`              | `undefined`  | URL for link functionality              |
| `children`  | `ReactNode`           | `undefined`  | Additional content to render            |

## Material Interface

```tsx
interface Material {
  category: string
  color: string
}
```

## Examples

### Basic MaterialPill

```tsx
<MaterialPill
  material={{
    category: 'Plástico',
    color: '#3b82f6'
  }}
/>
```

### With Link

```tsx
<MaterialPill
  material={{
    category: 'Papel',
    color: '#10b981'
  }}
  url="/materials/paper"
/>
```

### Custom Styling

```tsx
<MaterialPill
  material={{
    category: 'Metal',
    color: '#f59e0b'
  }}
  style={{
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    border: '2px solid #ffffff'
  }}
  className="custom-material-pill"
/>
```

### Different Sizes

```tsx
<MaterialPill
  material={{
    category: 'Vidrio',
    color: '#8b5cf6'
  }}
  className="recylink-material-pill-small"
/>

<MaterialPill
  material={{
    category: 'Orgánico',
    color: '#059669'
  }}
  className="recylink-material-pill-large"
/>
```

### With Children

```tsx
<MaterialPill
  material={{
    category: 'Electrónicos',
    color: '#dc2626'
  }}>
  <span style={{marginLeft: '8px', fontSize: '10px'}}>✓</span>
</MaterialPill>
```

### Multiple Materials

```tsx
const materials = [
  {category: 'Plástico', color: '#3b82f6'},
  {category: 'Papel', color: '#10b981'},
  {category: 'Metal', color: '#f59e0b'},
  {category: 'Vidrio', color: '#8b5cf6'}
]

function MaterialList() {
  return (
    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
      {materials.map((material, index) => (
        <MaterialPill key={index} material={material} />
      ))}
    </div>
  )
}
```

## Styling

The component uses CSS custom properties and supports custom styling:

```css
.recylink-material-pill {
  --pill-padding: 4px 12px;
  --pill-border-radius: 16px;
  --pill-font-size: 12px;
  --pill-font-weight: 500;
}
```

### Size Classes

- `.recylink-material-pill-small` - Smaller size
- `.recylink-material-pill-large` - Larger size

### State Classes

- `.recylink-material-pill-disabled` - Disabled state
- `.recylink-material-pill-link` - Link styling

## Accessibility

The MaterialPill component includes several accessibility features:

- **Proper contrast**: Automatic contrast color calculation
- **Focus indicators**: Clear focus styles for keyboard navigation
- **Semantic HTML**: Uses appropriate HTML elements
- **Screen reader support**: Proper labeling and descriptions

## Contrast Calculation

The component automatically calculates the appropriate text color based on the background color:

```tsx
const getContrastColor = (backgroundColor: string): string => {
  const hex = backgroundColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#000000' : '#ffffff'
}
```

## Migration from Legacy Component

If you're migrating from the legacy MaterialPill component, here's how to update your code:

### Before (Legacy)

```tsx
import MaterialPill from 'App/components/MaterialPill'
;<MaterialPill material={{category: 'Plástico', color: '#3b82f6'}} url="/materials/plastic" />
```

### After (New)

```tsx
import {MaterialPill} from '@recylink/react-components'
;<MaterialPill material={{category: 'Plástico', color: '#3b82f6'}} url="/materials/plastic" />
```

The main changes are:

- Import from the new package
- Same props structure
- Enhanced styling and accessibility
- Better TypeScript support
