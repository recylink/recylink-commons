import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import MaterialPill from './MaterialPill'
import { Material } from './MaterialPillInterface'

const meta: Meta<typeof MaterialPill> = {
  title: 'RecylinkReactComponents/MaterialPill',
  component: MaterialPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    url: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleMaterials: Material[] = [
  {
    category: 'Plástico',
    color: '#3b82f6'
  },
  {
    category: 'Papel',
    color: '#10b981'
  },
  {
    category: 'Metal',
    color: '#f59e0b'
  },
  {
    category: 'Vidrio',
    color: '#8b5cf6'
  },
  {
    category: 'Orgánico',
    color: '#059669'
  },
  {
    category: 'Electrónicos',
    color: '#dc2626'
  }
]

export const Default: Story = {
  args: {
    material: sampleMaterials[0],
  },
}

export const AllMaterials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {sampleMaterials.map((material, index) => (
        <MaterialPill key={index} material={material} />
      ))}
    </div>
  ),
}

export const WithLink: Story = {
  args: {
    material: sampleMaterials[0],
    url: '/materials/plastic',
  },
}

export const CustomStyling: Story = {
  args: {
    material: sampleMaterials[1],
    style: { 
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      border: '2px solid #ffffff'
    },
    className: 'custom-material-pill',
  },
}

export const SmallSize: Story = {
  args: {
    material: sampleMaterials[2],
    className: 'recylink-material-pill-small',
  },
}

export const LargeSize: Story = {
  args: {
    material: sampleMaterials[3],
    className: 'recylink-material-pill-large',
  },
}

export const WithChildren: Story = {
  args: {
    material: sampleMaterials[4],
    children: (
      <span style={{ marginLeft: '8px', fontSize: '10px' }}>
        ✓
      </span>
    ),
  },
}

export const DarkBackgrounds: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      flexWrap: 'wrap',
      padding: '20px',
      backgroundColor: '#1f2937',
      borderRadius: '8px'
    }}>
      {sampleMaterials.map((material, index) => (
        <MaterialPill key={index} material={material} />
      ))}
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [selectedMaterial, setSelectedMaterial] = React.useState<Material>(sampleMaterials[0])
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {sampleMaterials.map((material, index) => (
            <MaterialPill 
              key={index} 
              material={material}
              url="#"
              onClick={() => setSelectedMaterial(material)}
              style={{ 
                cursor: 'pointer',
                opacity: selectedMaterial.category === material.category ? 1 : 0.6
              }}
            />
          ))}
        </div>
        <p>Selected: {selectedMaterial.category}</p>
      </div>
    )
  },
}
