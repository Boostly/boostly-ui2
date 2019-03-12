import make from '../../utils/make'
import Badge from '../Badge'
import {
  applyVariants as applyButtonVariants,
  base as baseButtonStyle,
  psuedo
} from '../Button'

const nameToSize = { small: 32, medium: 48, large: 80, giant: 150 }
const sizing = p => {
  const size = nameToSize[p.size] || p.size || 48
  return { width: size, height: size }
}

const Circle = make({
  extend: Badge,
  api: ['size', sizing],
  css: `
    text-align: center;
    border-radius: 99999px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  defaults: {
    px: 0,
    py: 0
  }
})

Circle.displayName = 'Circle'

let _CB = make({
  api: [applyButtonVariants],
  extend: Circle,
  css: `
    ${baseButtonStyle}
    ${psuedo}
  `,
  defaults: {
    size: 'medium'
  }
})

Circle.Button = make({
  extend: _CB,
  defaults: {
    variant: 'primary'
  }
})
Circle.Button.displayName = 'CircleButton'

Circle.Button.two = make({
  extend: _CB,
  defaults: {
    variant: 'primary2'
  }
})
Circle.Button.two.displayName = 'CircleButtonTwo'

Circle.Button.second = make({
  extend: _CB,
  defaults: {
    variant: 'second'
  }
})
Circle.Button.second.displayName = 'CircleButtonSecond'

Circle.Button.warn = make({
  extend: _CB,
  defaults: {
    variant: 'warn'
  }
})
Circle.Button.warn.displayName = 'CircleButtonWarn'

export default Circle
