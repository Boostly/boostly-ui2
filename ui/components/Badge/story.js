import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

storiesOf('Badge', module).add('basic', () => (
  <Container>
    <Badge>Mikey</Badge>
  </Container>
))
