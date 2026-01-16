import React from 'react'

export type SuspenseLoadingProps = {
  children: React.ReactNode
  className?: string
  fallback?: React.ReactNode
  onRender?: () => void
}
