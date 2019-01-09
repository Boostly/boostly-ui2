import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

const Uncontrolled = props => {
  const [checked, toggle] = React.useState(false)
  return <Checkbox checked={checked} onChange={toggle} />
}

const Controlled = props => {
  const [checked, toggle] = React.useState(false)
  return (
    <div onClick={() => toggle(!checked)}>
      <Checkbox checked={checked} />
      <div>Label</div>
    </div>
  )
}

storiesOf('Checkbox', module).add('basic', () => (
  <Container>
    <Uncontrolled />
    <Controlled />
  </Container>
))
