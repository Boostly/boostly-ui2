import React from 'react'
import styled from 'react-emotion'
import { size } from 'styled-system'
import Badge from '../Badge'
import {
  applyVariants as applyButtonVariants,
  base as baseButtonStyle,
  psuedo
} from '../Button'

const nameToSize = { small: 32, medium: 48, large: 80, giant: 150 }
const sizing = p => {
  const size = nameToSize[p.size] || p.size || 48
  return { width: size, height: size }
}
const Circle = styled(Badge)`
  text-align: center;
  border-radius: 99999px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${size}
  ${sizing}
`

Circle.displayName = 'Circle'

let _CB = styled(Circle)`
  ${baseButtonStyle}
  ${psuedo}
  ${applyButtonVariants}
`

Circle.Button = props => <_CB {...props} variant='primary' size='medium' />
Circle.Button.two = props => (
  <_CB {...props} variant='primary2' size='medium' />
)
Circle.Button.second = props => (
  <_CB {...props} variant='second' size='medium' />
)
Circle.Button.warn = props => <_CB {...props} variant='warn' size='medium' />

export default Circle
