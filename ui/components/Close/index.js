import React from 'react'
import pt from 'prop-types'
import { css } from '@emotion/core'
import { CloseIcon } from '../Icons'

const style = css`
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
const Close = ({ onClick, size, color = 'rgba(255, 255, 255, 0.84)' }) => (
  <div onClick={onClick}>
    <CloseIcon style={style} color={color} size={size} />
  </div>
)

Close.propTypes = {
  onClick: pt.func.isRequired,
  color: pt.string,
  size: pt.oneOf([pt.string, pt.number])
}

export default Close
