import { fonts, colors } from '../../settings'
import make from '../../utils/make'

const api = [
  'space',
  'color',
  'borderRadius',
  'fontSize',
  'fontFamily',
  'fontWeight'
]

const css = `
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
`

const defaults = {
  fontSize: 0,
  fontFamily: fonts.h,
  px: 2,
  py: 1,
  mx: 1,
  color: 'white',
  bg: colors.purple,
  fontWeight: 'bold',
  borderRadius: 25
}

const Badge = make({
  api,
  css,
  defaults
})

Badge.displayName = 'Badge'

export const extend = {
  api,
  css,
  defaults
}

export default Badge
