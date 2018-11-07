import React from 'react'
import { keyframes } from 'react-emotion'
import sys from 'system-components/emotion'
import { colors } from '../../settings'
import Box from '../Layout'
import Circle from '../Circle'
import Astronaut from './Astronaut'

export const Avatar = sys(
  { is: 'img', size: 48, borderRadius: '99999px' },
  { display: 'inline-block' },
  'space',
  'color',
  'size'
)

Avatar.displayName = 'Avatar'

const float = keyframes`
  50% {
    transform: translate3d(0, 2px, 0);
  }
`

const sizeUpAstro = (Avatar.default = ({ bg = 'purple', size = 'large' }) => (
  <Circle
    size={size}
    css={`
      overflow: hidden;
    `}
    bg={colors[bg] || bg}
  >
    <Box
      mb={
        { small: '-8px', medium: '-15px', large: '-25px', giant: '-50px' }[size]
      }
      css={`
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
))

Avatar.default.displayName = 'DefaultAvatar'

export default Avatar
