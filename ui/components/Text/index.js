import React from 'react'
import { style } from 'styled-system'
import { fonts } from '../../settings'
import { pxToEm } from '../../utils'
import sys from '@rebass/components/emotion'

const num = n => typeof n === 'number' && !isNaN(n)
const px = n => (num(n) ? n + 'px' : n)
const size = style({
  prop: 'size',
  cssProperty: 'font-size',
  key: 'fontSizes',
  transformValue: px,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72].map(num => pxToEm(num))
})

const apis = ['space', 'fontFamily', 'lineHeight', 'color', 'textAlign']
const blacklist = ['size', 'family', 'weight']

const Base = sys(
  { m: 0, extend: sys({ blacklist }) },
  p => ({ fontWeight: p.weight }),
  p => ({ fontFamily: p.family }),
  size,
  ...apis
)

const sizeToH = ['h6', 'h6', 'h6', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1']
let Text = props => <Base {...props} is="span" family={fonts.text} />

Text.displayName = 'Title'

Text.title = props => (
  <Base
    {...props}
    extend={num(props.size) ? sizeToH[props.size] : 'span'}
    family={fonts.h}
  />
)

Text.title.displayName = 'Title'

Text.p = props => <Base {...props} is="p" family={fonts.text} />

Text.title.displayName = 'P'

export default Text
