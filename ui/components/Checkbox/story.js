import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

class Test extends Component {
  state = {
    checked: true
  }
  onChange = value => {
    this.setState({
      checked: value
    })
  }
  render = () => {
    return <Checkbox checked={this.state.checked} onChange={this.onChange} />
  }
}

storiesOf('Checkbox', module).add('basic', () => (
  <Container>
    <Test />
  </Container>
))
