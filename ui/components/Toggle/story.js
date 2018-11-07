import React from 'react'
import { storiesOf } from '@storybook/react'
import Toggle from './index'
import Text from '../Text'

const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

storiesOf('Toggle', module).add('basic', () => (
  <Container>
    <Toggle />
    <Toggle offText="See Customers" onText="See Overview" />
    <Toggle
      offText={<Text size=".8em">Customer View</Text>}
      onText={<Text size="1em">Overview</Text>}
    />
  </Container>
))
