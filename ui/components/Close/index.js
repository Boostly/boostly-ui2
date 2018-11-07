import React from 'react'
import { css } from 'emotion'
import { CloseIcon } from '../Icons'

const Close = ({ onClick, size, color = 'rgba(255, 255, 255, 0.84)' }) => (
  <div onClick={onClick}>
    <CloseIcon
      style={':hover {cursor: pointer;transform: scale(1.1);}'}
      color={color}
    />
  </div>
)

export default Close
