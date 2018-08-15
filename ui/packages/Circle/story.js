import React from 'react'
import { css } from 'emotion'
import { storiesOf } from '@storybook/react'
import Circle from './index'
import Box from '../Layout'
import Text from '../Text'
import { CloseIcon } from '../Icons'

const Container = ({ children }) => (
  <div style={{ maxWidth: '300px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)
const Container2 = ({ children }) => (
  <div
    style={{ background: 'black', maxWidth: '300px', width: '100%', padding: '20px' }}
  >
    {children}
  </div>
)

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 129 129'
    height='25px'
    fill='white'
  >
    <g>
      <path
        d='m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z'
      />
    </g>
  </svg>
)
storiesOf('Circle', module).add('basic', () => (
  <div>
    <Box.row>
      <Container>
        <Circle size={50}>
          <ArrowIcon />
        </Circle>
        <Circle size={100}>
          M
        </Circle>
      </Container>
      <Container2>
        <Circle size={45}>
          <ArrowIcon />
        </Circle>
        <div style={{ height: '20px' }} />
        <Circle size={70}>
          Mikey is da bomb
        </Circle>
      </Container2>
    </Box.row>
    <Box>
      <Box.row>
        <Circle size='small'>
          <Text size={4}>S</Text>
        </Circle>
        <Circle size='medium'>
          <Text size={5}>M</Text>
        </Circle>
        <Circle bg='orange' size='large'>
          <Text size={6}>Lrg</Text>
        </Circle>
        <Circle size='giant'>
          <Text size={7}>Giant</Text>
        </Circle>
      </Box.row>
    </Box>
  </div>
))

storiesOf('Circle.Button', module).add('basic', () => (
  <Box>
    <Box.row>
      <Circle.Button
        css={css`opacity: .5; :hover { opacity: 1}; transition: .25s;`}
      >
        <Text size={5}>👌</Text>
      </Circle.Button>
      <Circle.Button.two size={68}>
        <Text size={5}>👌</Text>
      </Circle.Button.two>
      <Circle.Button.second size={58}>
        <Text size={5}>👌</Text>
      </Circle.Button.second>
      <Circle.Button.warn>
        <Text size={5}>👌</Text>
      </Circle.Button.warn>
    </Box.row>
  </Box>
)).add('icons', () => (
  <Box>
    <Box.row>
      <Circle.Button>
        <CloseIcon color='white' />
      </Circle.Button>
      <Circle.Button.two size={68}>
        <Text size={5}>👌</Text>
      </Circle.Button.two>
      <Circle.Button.second size={58}>
        <Text size={5}>👌</Text>
      </Circle.Button.second>
      <Circle.Button.warn>
        <CloseIcon color='white' />
      </Circle.Button.warn>
    </Box.row>
  </Box>
))
