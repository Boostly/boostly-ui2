import React, { useState } from 'react'
import Badge from '../Badge'
import Box from '../Layout'

const Icon = () => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M28.9749633,6.63582285 L17.9003587,17.7104275 C17.3960874,18.2146988 17.3960874,19.032284 17.9003587,19.5365552 C18.4046299,20.0408264 19.2222151,20.0408264 19.7264863,19.5365552 L30.3492182,8.91382332 C31.4060451,11.049768 32,13.4555212 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C17.877881,0 19.6802015,0.323513151 21.3542683,0.917846359 L8.70032493,13.5717897 C8.1960537,14.0760609 8.1960537,14.8936461 8.70032493,15.3979174 C9.20459615,15.9021886 10.0221814,15.9021886 10.5264526,15.3979174 L23.862492,2.06187798 C24.4969198,2.42052872 25.1044234,2.82124353 25.6812154,3.26023504 L9.10732263,19.8341278 C8.60305141,20.338399 8.60305141,21.1559842 9.10732263,21.6602554 C9.61159386,22.1645267 10.4291791,22.1645267 10.9334503,21.6602554 L27.6066905,4.98701523 C28.098297,5.50495495 28.5556011,6.05577059 28.9749633,6.63582285 Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
)

export const ToggleState = ({ children, checked, onToggle }) => {
  const [isOn, update] = useState(checked)

  const toggle = () => {
    const _isOn = !isOn
    update(_isOn)
    onToggle(_isOn)
  }

  return (
    <div onClick={toggle} style={{ display: 'inline-block' }}>
      {children(isOn)}
    </div>
  )
}

const Toggle = ({ onToggle, onText = 'On', offText = 'Off' }) => (
  <ToggleState onToggle={onToggle}>
    {isOn => (
      <Badge>
        <Box.row
          y
          cursor="pointer"
          space="between"
          reverse={isOn}
          h="40px"
          w="150px"
          pr={isOn ? 0 : 2}
          pl={isOn ? 2 : 0}
          fontSize="1.4em"
          css={`
            user-select: none;
          `}
        >
          <Icon />
          {isOn ? onText : offText}
        </Box.row>
      </Badge>
    )}
  </ToggleState>
)

export default Toggle
