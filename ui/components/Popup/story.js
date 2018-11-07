import React from 'react'
import { storiesOf } from '@storybook/react'
import Popup from './index'
import Avatar from '../Avatar'

storiesOf('Popup', module).add('basic', () => (
  <div>
    <Popup isOpen>
      <Avatar.default size="giant" />
    </Popup>
  </div>
))
