import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '300px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

const NumBox = ({ num, color }) => (
  <Box
    p={2}
    h={35}
    maxWidth={35}
    color={color}
    border={`solid 1px ${color}`}
    bg="white"
  >
    {num}
  </Box>
)
storiesOf('Layout', module)
  .add('box', () => (
    <Container>
      <Box is="li" color="green" p={2} bg="red">
        I'm a 2em li!
      </Box>
    </Container>
  ))
  .add('row', () => (
    <Container>
      <Box.row x p={2} bg="darkorchid">
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row p={2} my={1} bg="darkorchid" wrap>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
        <NumBox num={3} color="red" />
        <NumBox num={4} color="orange" />
        <NumBox num={5} color="purple" />
        <NumBox num={6} color="purple" />
        <NumBox num={7} color="purple" />
        <NumBox num={8} color="purple" />
        <NumBox num={9} color="purple" />
        <NumBox num={10} color="purple" />
        <NumBox num={11} color="purple" />
      </Box.row>
      <Box.row x p={2} my={1} bg="darkorchid" wrap="reverse">
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
        <NumBox num={3} color="red" />
        <NumBox num={4} color="orange" />
        <NumBox num={5} color="purple" />
        <NumBox num={6} color="purple" />
        <NumBox num={7} color="purple" />
        <NumBox num={8} color="purple" />
        <NumBox num={9} color="purple" />
        <NumBox num={10} color="purple" />
        <NumBox num={11} color="purple" />
      </Box.row>
      <Box.row space="between" my={1} p={2} bg="darkorchid">
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row space="around" my={1} p={2} bg="darkorchid">
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row space="evenly" my={1} p={2} bg="darkorchid">
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row x my={1} p={2} bg="darkorchid" reverse>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row x y my={1} p={2} bg="darkorchid" h={100} reverse>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row x="end" y my={1} p={2} bg="darkorchid" h={100} reverse>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row x="end" y="end" my={1} p={2} bg="darkorchid" h={100} reverse>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row x="end" y="end" my={1} p={2} bg="darkorchid" h={100}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
      <Box.row x="end" my={1} p={2} bg="darkorchid" h={100}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.row>
    </Container>
  ))
  .add('col', () => (
    <Container>
      <Box.col is="li" my={1} bg="darkorchid" p={2} h={120}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.col>
      <Box.col x is="li" my={1} bg="darkorchid" p={2} h={120}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.col>
      <Box.col x y is="li" my={1} bg="darkorchid" p={2} h={120}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.col>
      <Box.col x="end" y="end" is="li" my={1} bg="darkorchid" p={2} h={120}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
      </Box.col>
      <Box.col wrap my={1} bg="darkorchid" p={2} h={120}>
        <NumBox num={1} color="red" />
        <NumBox num={2} color="green" />
        <NumBox num={3} color="orange" />
        <NumBox num={4} color="yellow" />
      </Box.col>
    </Container>
  ))
