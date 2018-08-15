import React from 'react'
import { css } from 'emotion'
import { CloseIcon } from '../Icons'

const Close = ({ size, color = 'rgba(255, 255, 255, 0.84)' }) => (
  <CloseIcon
    style={':hover {cursor: pointer;transform: scale(1.1);}'}
    color={color}
  />
)

export default Close
