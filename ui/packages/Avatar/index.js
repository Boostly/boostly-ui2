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
    transform: translate3d(0, 1px, 0);
  }
`
Avatar.default = ({ bg = 'purple' }) => (
  <Circle size='large' css={`overflow: hidden;`} bg={colors[bg]}>
    <Box
      mb='-25px'
      css={`
        animation: ${float} 3s ease infinite;
        animation-delay: ${Math.floor(Math.random() * 3 + 1)}s;
      `}
    ><Astronaut /></Box>
  </Circle>
)

Avatar.default.displayName = 'DefaultAvatar'

export default Avatar
