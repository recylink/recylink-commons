import {ReactNode} from 'react'

export interface Material {
  category: string
  color: string
}

export interface MaterialPillInterface {
  material: Material
  style?: React.CSSProperties
  className?: string
  url?: string
  children?: ReactNode
}
