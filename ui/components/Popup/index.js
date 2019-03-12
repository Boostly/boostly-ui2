import React from 'react'
import pt from 'prop-types'
import { css, keyframes } from '@emotion/core'
import Box from '../Layout'

let popup = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0%);
  opacity: 1;
}
`

const Popup = ({ isOpen, children, height = '100%' }) =>
  isOpen ? (
    <Box
      bg="transparent"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      css={css`
        animation: ${popup} 0.25s;
      `}
      height={height}
    >
      {children}
    </Box>
  ) : null

Popup.propTypes = {
  isOpen: pt.bool,
  children: pt.node,
  height: pt.oneOf([pt.string, pt.number])
}

export default Popup
