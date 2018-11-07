import sys from 'system-components/emotion'
import { fonts, colors } from '../../settings'

export const Badge = sys(
  {
    fontSize: 0,
    fontFamily: fonts.h,
    px: 2,
    py: 1,
    mx: 1,
    color: 'white',
    bg: colors.purple,
    fontWeight: 'bold',
    borderRadius: 25
  },
  {
    WebkitFontSmoothing: 'antialiased',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
)

Badge.displayName = 'Badge'

export default Badge
