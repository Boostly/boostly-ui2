import React from 'react'
import pt from 'prop-types'
import { css, keyframes } from '@emotion/core'
import make from '../../utils/make'
import { colors } from '../../settings'
import Box from '../Layout'
import Circle from '../Circle'
import Astronaut from './Astronaut'

const Avatar = make({
  baseTag: 'img',
  api: ['space', 'color', 'size'],
  css: `
    display: inline-block;
    border-radius: 9999999px;
  `,
  defaults: {
    width: 48,
    height: 48
  }
})

Avatar.displayName = 'Avatar'

const float = keyframes`
  50% {
    transform: translate3d(0, 2px, 0);
  }
`

Avatar.default = ({ bg = 'purple', size = 'large' }) => (
  <Circle
    size={size}
    css={css`
      overflow: hidden;
    `}
    bg={colors[bg] || bg}
  >
    <Box
      mb={
        { small: '-8px', medium: '-15px', large: '-25px', giant: '-50px' }[size]
      }
      css={css`
        animation: ${float} 3.5s ease infinite;
        animation-delay: ${Math.floor(Math.random() * 3 + 1)}s;
      `}
    >
      <Astronaut
        size={
          {
            small: 25,
            medium: 40,
            large: 60,
            giant: 110
          }[size]
        }
      />
    </Box>
  </Circle>
)

Avatar.default.propTypes = {
  bg: pt.string,
  size: pt.oneOf(['small', 'medium', 'large', 'giant'])
}

Avatar.default.displayName = 'DefaultAvatar'

export default Avatar
