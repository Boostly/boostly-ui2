import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'
import Box from '../Layout'

const Container = ({ children }) => (
  <div style={{ maxWidth: '300px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)
const Container2 = ({ children }) => (
  <div
    style={{
      background: 'black',
      maxWidth: '300px',
      width: '100%',
      padding: '20px',
    }}
  >
    {children}
  </div>
)

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 129 129'
    enableBackground='new 0 0 129 129'
  >
    <g>
      <path d='m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z' />
    </g>
  </svg>
)

storiesOf('Button', module).add('primary', () => (
  <Box.row>
    <Container>
      <Button>Save Changes</Button>
      <div style={{ height: '20px' }} />
      <Button.two>Load Moar</Button.two>
      <div style={{ height: '20px' }} />
      <Button.second>Cancel</Button.second>
      <div style={{ height: '20px' }} />
      <Button variant='clean'>Hokie Pokie</Button>
      <div style={{ height: '20px' }} />
      <Button.warn>Delete Account</Button.warn>
    </Container>
    <Container2>
      <Button icon='arrow'>Save Changes</Button>
      <div style={{ height: '20px' }} />
      <Button.two>Load Moar</Button.two>
      <div style={{ height: '20px' }} />
      <Button.second>Cancel</Button.second>
      <div style={{ height: '20px' }} />
      <Button variant='clean'>Hokie Pokie</Button>
      <div style={{ height: '20px' }} />
      <Button.warn>Delete Account</Button.warn>
    </Container2>
  </Box.row>
))
