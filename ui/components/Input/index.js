import make from '../../utils/make'
import { colors as clr, fonts } from '../../settings'
import {
  pxToEm,
  lightening as l,
  opacity,
  createPlaceholderStyles
} from '../../utils'

const api = ['space', 'color', 'fontSize', 'fontFamily']

const base = `
width: 100%;
border-radius: ${pxToEm(25)};
transition: 0.25s;
text-indent: ${pxToEm(10)};
border: solid 1px ${l(clr.darkBase, 80)};
`

const input = `
height: ${pxToEm(40)};
`
const defaults = {
  fontSize: 14,
  fontFamily: fonts.text,
  px: 2,
  py: 1,
  mx: 1,
  color: clr.midnight,
  bg: '#F7F9FA',
  fontWeight: 'bold'
}

const applyBorder = props => ({
  ':focus': {
    outline: `none`,
    backgroundColor: clr.lightBase,
    boxShadow: `0px 1px 5px ${opacity(clr.purple, 0.2)}`
  }
})

const applyPlaceholderStyles = props => ({
  '::-webkit-input-placeholder': { opacity: 0.5 },
  '::-moz-placeholder': { opacity: 0.5 },
  ':-ms-input-placeholder': { opacity: 0.5 },
  ':-moz-placeholder': { opacity: 0.5 }
})

export const Input = make({
  baseTag: 'input',
  api: [...api, applyBorder, applyPlaceholderStyles],
  css: `${base} ${input}`,
  defaults
})

export const Textarea = make({
  baseTag: 'textarea',
  api: [...api, applyBorder, applyPlaceholderStyles],
  css: `${base} resize: vertical; height: ${pxToEm(100)};`,
  defaults: {
    ...defaults,
    py: 3
  }
})

export const Select = make({
  baseTag: 'select',
  api: [...api, applyBorder, applyPlaceholderStyles],
  css: `${base} height: ${pxToEm(45)};`,
  defaults
})
