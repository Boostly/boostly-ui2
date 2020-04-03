import make from '../../utils/make'
import { colors, fonts } from '../../settings'
import { opacity, pxToEm } from '../../utils'

export const base = `
  cursor: pointer;
  border: none;
  position: relative;
  outline: none;
`
export const psuedo = `
  ':before,:after': {
    content: " ";
    position: absolute;
    z-index: -2;
    transition: all 250ms ease-out;
  }
`
const main = `
  font-family: ${fonts.h};
  color: #fff;
  transition: 0.25s;
  font-size: 1em;
  height: ${pxToEm(42)};
  width: 100%;
  border-radius: ${pxToEm(25)};
  letter-spacing: 0.2;
  ${psuedo}
`

const addDepth = hex => {
  let shadow = opacity(hex, 0.3)
  let inset = opacity(colors.midnight, 0.1)
  return {
    boxShadow: `0 2px 4px ${shadow}, 0 0 40px ${inset} inset`,
    ':before': {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: pxToEm(25),
    },
    ':hover': {
      boxShadow: `0 3px 4px ${shadow}, 0 0 40px ${inset} inset`,
      transform: 'translateY(-1px)',
      ':before': { boxShadow: `0 15px 10px -10px ${shadow}` },
    },
    ':focus': { boxShadow: `0 0px 4px ${shadow}, 0 0 40px ${inset} inset` },
  }
}

const variants = {
  primary: { backgroundColor: colors.purple, ...addDepth(colors.purple) },
  primary2: { backgroundColor: colors.blue, ...addDepth(colors.blue) },
  second: {
    backgroundColor: 'white',
    color: opacity(colors.dusk, 0.84),
    ...addDepth(colors.dusk),
  },
  clean: {
    backgroundColor: colors.midnight,
    ...addDepth(colors.lilac),
  },
  warn: { backgroundColor: colors.red, ...addDepth(colors.red) },
}

export const applyVariants = props => ({ ...variants[props.variant] })

let _Button = make({
  api: [applyVariants],
  baseTag: 'button',
  css: `
    ${base}
    ${main}
  `,
  blacklist: ['variant'],
})

let Button = make({
  extend: _Button,
  defaults: {
    variant: 'primary',
  },
})

Button.two = make({
  extend: _Button,
  defaults: {
    variant: 'primary2',
  },
})
Button.two.displayName = 'ButtonTwo'

Button.second = make({
  extend: _Button,
  defaults: {
    variant: 'second',
  },
})
Button.second.displayName = 'ButtonSecond'

Button.warn = make({
  extend: _Button,
  defaults: {
    variant: 'warn',
  },
})
Button.warn.displayName = 'ButtonWarn'

export default Button
