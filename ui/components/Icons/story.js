import React from 'react'
import { storiesOf } from '@storybook/react'
import { colors } from '../../settings'
import {
  ArrowIcon,
  PaperAirplaneIcon,
  FanIcon,
  DollarIcon,
  RepeatIcon
} from './index'
import Box from '../Layout'
import Circle from '../Circle'

storiesOf('Icons', module).add('basic', () => (
  <Box>
    <Box.row p={1}>
      <ArrowIcon size={50} />
      <ArrowIcon direction='right' />
      <Circle>
        <ArrowIcon size={20} color='rgba(255,255,255,0.84)' />
      </Circle>
      <Circle>
        <ArrowIcon size={20} direction='right' color='rgba(255,255,255,0.84)' />
      </Circle>
    </Box.row>
    <Box.row>
      <PaperAirplaneIcon size={50} />
      <PaperAirplaneIcon color={colors.blue} />
      <Circle>
        <PaperAirplaneIcon center color='rgba(255,255,255,0.84)' />
      </Circle>
    </Box.row>
    <Box.row>
      <FanIcon size={50} />
      <FanIcon color={colors.blue} />
      <Circle>
        <FanIcon color='rgba(255,255,255,0.84)' />
      </Circle>
    </Box.row>
    <Box.row>
      <DollarIcon size={50} />
      <DollarIcon color={colors.blue} />
      <Circle>
        <DollarIcon color='rgba(255,255,255,0.84)' />
      </Circle>
    </Box.row>
    <Box.row>
      <RepeatIcon size={50} />
      <RepeatIcon color={colors.purple} />
      <Circle bg={colors.blue}>
        <RepeatIcon color='rgba(255,255,255,0.84)' />
      </Circle>
    </Box.row>
  </Box>
))
