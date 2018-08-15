import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

storiesOf('Text', module).add('basic', () => (
  <Container>
    {
      [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ].map(size => (
        <Text size={size}>Text {size}</Text>
      ))
    }
    <div />
    {[ 0, 1, 2, 3, 4, 5, 6, 7, 8 ].map(size => (
      <Text.title size={size}>
          Title {size}
      </Text.title>
      ))}
    <div />
    <Text.p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text.p>
  </Container>
)).add('basic2', () => (
  <Container>
    <Text.p lineHeight='1.5' mt={2} frog='you' color='black' weight='bold'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text.p>
  </Container>
))
