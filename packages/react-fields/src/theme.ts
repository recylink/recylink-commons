/**
 * Global Theme Configuration
 * This file contains the theme configuration for the Recylink Commons library
 */

export const theme = {
  fonts: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: 'Plus Jakarta Sans, sans-serif'
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem'
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  colors: {
    white: '#ffffff',
    blue: '#0069a6',
    'light-blue': '#56ccf2',
    red: '#f03a47',
    'alternative-red': '#eb5757',
    green: '#00b42d',
    'dark-green': '#00873a',
    'alternative-green': '#27ae60',
    yellow: '#f7d108',
    'light-yellow': '#f2994a',
    grey: '#e9e9eb',
    'dark-grey': '#94969e'
  }
} as const

export type Theme = typeof theme
export type FontFamily = keyof typeof theme.fonts
export type FontWeight = keyof typeof theme.fontWeights
export type FontSize = keyof typeof theme.fontSizes
export type LineHeight = keyof typeof theme.lineHeights
export type LetterSpacing = keyof typeof theme.letterSpacing
export type Color = keyof typeof theme.colors

/**
 * Utility function to get CSS custom properties for font configuration
 */
export const getFontCSSVariables = () => {
  return `
    :root {
      --font-primary: ${theme.fonts.primary};
      --font-secondary: ${theme.fonts.secondary};
      --font-weight-light: ${theme.fontWeights.light};
      --font-weight-normal: ${theme.fontWeights.normal};
      --font-weight-medium: ${theme.fontWeights.medium};
      --font-weight-semibold: ${theme.fontWeights.semibold};
      --font-weight-bold: ${theme.fontWeights.bold};
      --font-weight-extrabold: ${theme.fontWeights.extrabold};
    }
  `
}

/**
 * Utility function to apply global font styles
 */
export const applyGlobalFonts = () => {
  const style = document.createElement('style')
  style.textContent = `
    ${getFontCSSVariables()}
    
    * {
      font-family: var(--font-primary);
    }
    
    .font-secondary {
      font-family: var(--font-secondary);
    }
  `
  document.head.appendChild(style)
}

