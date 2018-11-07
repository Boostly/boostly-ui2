import React from 'react'
import { css } from 'emotion'
import { ToggleState } from '../Toggle'
import { colors } from '../../settings'
import Box from '../Layout'

const CheckIcon = ({ size = 14, color = 'white' }) => (
  <svg
    width={size}
    height={size * 0.7857}
    viewBox="0 0 14 11"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill={color} fillRule="nonzero">
        <path
          d="M0.157894737,5.78947368 C0.0526315789,5.68421053 0,5.52631579 0,5.42105263 C0,5.31578947 0.0526315789,5.15789474 0.157894737,5.05263158 L0.894736842,4.31578947 C1.10526316,4.10526316 1.42105263,4.10526316 1.63157895,4.31578947 L1.68421053,4.36842105 L4.57894737,7.47368421 C4.68421053,7.57894737 4.84210526,7.57894737 4.94736842,7.47368421 L12,0.157894737 L12.0526316,0.157894737 C12.2631579,-0.0526315789 12.5789474,-0.0526315789 12.7894737,0.157894737 L13.5263158,0.894736842 C13.7368421,1.10526316 13.7368421,1.42105263 13.5263158,1.63157895 L5.10526316,10.3684211 C5,10.4736842 4.89473684,10.5263158 4.73684211,10.5263158 C4.57894737,10.5263158 4.47368421,10.4736842 4.36842105,10.3684211 L0.263157895,5.94736842 L0.157894737,5.78947368 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
)

const Checkbox = ({ onChange = () => ({}), checked }) => (
  <ToggleState onToggle={onChange} checked={checked}>
    {isChecked => (
      <Box.row
        x
        y
        css="cursor: pointer; transition: .25s"
        h="20px"
        w="20px"
        borderRadius={6}
        bg={isChecked ? colors.purple : 'white'}
        border={`solid 5px ${isChecked ? 'transparent' : colors.purple}`}
      >
        <CheckIcon />
      </Box.row>
    )}
  </ToggleState>
)

export default Checkbox
