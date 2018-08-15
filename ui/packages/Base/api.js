import { style } from 'styled-system'
const num = n => typeof n === 'number' && !isNaN(n)
const px = n => num(n) ? n + 'px' : n
const h = style({ prop: 'h', cssProperty: 'height', transformValue: px })
// const w = style({ prop: 'w', cssProperty: 'width', transformValue: px })
const whiteListedStyles = [
  // core
  'space',
  'width',
  'fontSize',
  'textColor',
  'bgColor',
  // typography
  'textAlign',
  // layout
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'size',
  'ratio',
  'verticalAlign',
  // borders
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borders',
  'borderColor',
  'borderRadius',
  // misc
  'boxShadow',
  'opacity',
  'background',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left'
].map(key => require('styled-system')[key])

export default [ h, ...whiteListedStyles ]
