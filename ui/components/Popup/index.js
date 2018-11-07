import React from 'react'
import { keyframes } from 'react-emotion'
import Box from '../Layout'

let popup = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0
}
100% {
  transform: translateY(0%);
  opacity: 1
}
`

const Popup = ({ isOpen, children, height = '100%' }) =>
  isOpen ? (
    <Box
      bg="transparent"
      position="absolute"
      top="0"
      left="0"
      w="100%"
      css={`
        animation: ${popup} 0.25s;
      `}
      height={height}
    >
      {children}
    </Box>
  ) : null

export default Popup
