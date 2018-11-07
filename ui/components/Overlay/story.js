import React from 'react'
import { storiesOf } from '@storybook/react'
import Overlay from './index'
import Box from '../Layout'
import Avatar from '../Avatar'

storiesOf('Overlay', module).add('w/ popup', () => (
  <Box bg="red">
    <Box.row x y>
      <Avatar.default size="giant" />
    </Box.row>
    <Overlay popup isOpen>
      <Avatar.default size="small" />
    </Overlay>
  </Box>
))
