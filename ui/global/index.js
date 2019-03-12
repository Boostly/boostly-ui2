import React, { useEffect } from 'react'
import { injectGlobal } from '@emotion/core'
import { baseFontSize } from '../settings'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html { font-size: ${baseFontSize}px }
  body { margin: 0; }
`

export const LoadFont = () => {
  useEffect(() => {
    const WebFont = require('webfontloader')
    WebFont.load({
      google: { families: ['Work+Sans:400,700', 'Righteous', 'sans-serif'] }
    })
  })
  return <div />
}
