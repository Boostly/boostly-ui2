import make from '../../utils/make'

export const Position = make({
  api: [
    'position',
    'space',
    'color',
    'zIndex',
    'top',
    'right',
    'bottom',
    'left'
  ]
})

Position.displayName = 'Position'

export const Relative = make({
  extend: Position,
  defaults: {
    position: 'relative'
  }
})
Relative.displayName = 'Relative'

export const Absolute = make({
  extend: Position,
  defaults: {
    position: 'absolute'
  }
})
Absolute.displayName = 'Absolute'

export const Fixed = make({
  extend: Position,
  defaults: {
    position: 'fixed'
  }
})
Fixed.displayName = 'Fixed'

export const Sticky = make({
  extend: Position,
  defaults: {
    position: 'sticky'
  }
})
Sticky.displayName = 'Sticky'

export default Position
