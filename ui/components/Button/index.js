import React from 'react'
import sys from '@rebass/components/emotion'
import { colors, fonts } from '../../settings'
import { opacity, pxToEm } from '../../utils'

export const base = {
  cursor: 'pointer',
  border: 'none',
  position: 'relative',
  outline: 'none'
}

export const psuedo = {
  ':before,:after': {
    content: '" "',
    position: 'absolute',
    zIndex: -2,
    transition: 'all 250ms ease-out'
  }
}
const main = {
  fontFamily: fonts.h,
  color: '#fff',
  transition: '.25s',
  fontSize: '1em',
  height: pxToEm(42),
  width: '100%',
  borderRadius: pxToEm(25),
  letterSpacing: 0.2,
  ...psuedo
}

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
      borderRadius: pxToEm(25)
    },
    ':hover': {
      boxShadow: `0 3px 4px ${shadow}, 0 0 40px ${inset} inset`,
      transform: 'translateY(-1px)',
      ':before': { boxShadow: `0 15px 10px -10px ${shadow}` }
    },
    ':focus': { boxShadow: `0 0px 4px ${shadow}, 0 0 40px ${inset} inset` }
  }
}

const variants = {
  primary: { backgroundColor: colors.purple, ...addDepth(colors.purple) },
  primary2: { backgroundColor: colors.blue, ...addDepth(colors.blue) },
  second: {
    backgroundColor: 'white',
    color: opacity(colors.dusk, 0.84),
    ...addDepth(colors.dusk)
  },
  warn: { backgroundColor: colors.red, ...addDepth(colors.red) }
}

export const applyVariants = props => ({ ...variants[props.variant] })

let _Button = sys(
  { extend: sys({ is: 'button', blacklist: ['variant'] }) },
  { ...base, ...main },
  applyVariants
)

let Button = props => <_Button {...props} variant="primary" />
Button.two = props => <_Button {...props} variant="primary2" />
Button.second = props => <_Button {...props} variant="second" />
Button.warn = props => <_Button {...props} variant="warn" />

export default Button
