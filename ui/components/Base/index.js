import sys from '@rebass/components/emotion'

const getWidth = n => (!num(n) || n > 1 ? px(n) : n * 100 + '%')
const num = n => typeof n === 'number' && !isNaN(n)
const px = n => (num(n) ? n + 'px' : n)
const Base = sys(
  {
    extend: sys({ blacklist: ['w', 'h', 'x', 'y', 'wrap', 'reverse', 'space'] })
  },
  props => ({ height: px(props.h) }),
  props => ({ width: getWidth(props.w) }),
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
)

export default Base
