import React from 'react'

export type ViewportSuspenseLoadingProps = {
  children: React.ReactNode
  className?: string
  fallback?: React.ReactNode
  onRender?: () => void
  onView?: () => void
}
