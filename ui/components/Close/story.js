import React from 'react'
import { storiesOf } from '@storybook/react'
import Close from './index'
import Box from '../Layout'

storiesOf('Close', module).add('basic', () => (
  <Box.row bg="black" p={1}>
    <Close onClick={() => alert('howdy')} />
  </Box.row>
))
