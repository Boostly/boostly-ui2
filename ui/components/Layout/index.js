import make from '../../utils/make'

const getWidth = n => (!num(n) || n > 1 ? px(n) : n * 100 + '%')
const num = n => typeof n === 'number' && !isNaN(n)
const px = n => (num(n) ? n + 'px' : n)

const api = [
  props => ({ height: px(props.h) }),
  props => ({ width: getWidth(props.w) }),
  props => ({ cursor: props.cursor }),
  // core
  'space',
  'width',
  'fontSize',
  'color',
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
]

const justifyLogic = key => p =>
  p[key] && { justifyContent: p[key] === 'end' ? 'flex-end' : 'center' }

const alignLogic = key => p =>
  p[key] && {
    alignItems:
      p[key] === 'end' ? 'flex-end' : p.x === 'stretch' ? 'stretch' : 'center'
  }

const row = {
  x: justifyLogic('x'),
  y: alignLogic('y'),
  space: p => p.space && { justifyContent: `space-${p.space}` },
  reverse: p => p.reverse && { flexDirection: 'row-reverse' }
}

const col = {
  x: alignLogic('x'),
  y: justifyLogic('y'),
  space: p => p.space && { justifyContent: `space-${p.space}` },
  reverse: p => p.reverse && { flexDirection: 'column-reverse' }
}

const wrap = p =>
  p.wrap && { flexWrap: p.wrap === 'reverse' ? 'wrap-reverse' : 'wrap' }

const blacklist = ['w', 'h', 'x', 'y', 'reverse', 'wrap', 'space']
let Box = make({
  api,
  blacklist
})

export const Row = make({
  api: [...api, row.x, row.y, row.space, row.reverse, wrap],
  css: `display: flex;`,
  blacklist
})

Box.row = Row
Box.row.displayName = 'Row'

export const Col = make({
  api: [...api, col.x, col.y, col.space, col.reverse, wrap],
  css: `display: flex; flex-direction: column;`,
  blacklist
})

Box.col = Col
Box.col.displayName = 'Column'

export default Box
