import { injectGlobal } from 'emotion'
import WebFont from 'webfontloader'
import { baseFontSize } from '../settings'

WebFont.load({
  google: { families: ['Work+Sans:400,700', 'Righteous', 'sans-serif'] }
})

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html { font-size: ${baseFontSize}px }
  body { margin: 0; }
`
