import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from './index'
import Box from '../Layout'

storiesOf('Avatar', module).add('default', () => (
  <Box>
    <Box.row>
      <Avatar.default />
      <Avatar.default bg='blue' />
      <Avatar.default bg='green' />
      <Avatar.default bg='yellow' />
    </Box.row>
  </Box>
)).add('single', () => (
  <Box>
    <Box.row>
      <Avatar.default size='giant' />
    </Box.row>
  </Box>
))
