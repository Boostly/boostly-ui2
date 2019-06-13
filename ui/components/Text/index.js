import make from '../../utils/make'
import { fonts } from '../../settings'
import { pxToEm } from '../../utils'

const num = n => typeof n === 'number' && !isNaN(n)
const px = n => (num(n) ? n + 'px' : n)
const scale = [12, 14, 16, 20, 24, 32, 48, 64, 72].map(num => pxToEm(num))
const size = p => {
  let fontSize = scale[p.size]
  fontSize = fontSize || px(p.size)
  return {
    fontSize,
  }
}

const api = ['space', 'fontFamily', 'lineHeight', 'color', 'textAlign']
const blacklist = ['size', 'family', 'weight']

const Base = make({
  api: [
    ...api,
    size,
    p => ({ fontWeight: p.weight }),
    p => ({ fontFamily: p.family }),
  ],
  defaults: {
    m: 0,
  },
  blacklist,
})

const sizeToH = ['h6', 'h6', 'h6', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1']
let Text = make({
  extend: Base,
  defaults: {
    is: 'span',
    family: fonts.text,
  },
})
Text.displayName = 'Title'

Text.title = make({
  extend: Base,
  api: [
    p => ({
      is: num(p.size) ? sizeToH[p.size] : 'span',
    }),
  ],
  defaults: {
    family: fonts.h,
  },
})
Text.title.displayName = 'Title'
export const Title = Text.title

Text.p = make({
  extend: Base,
  defaults: {
    is: 'p',
    family: fonts.text,
  },
})
Text.title.displayName = 'P'
export const P = Text.p

export default Text
