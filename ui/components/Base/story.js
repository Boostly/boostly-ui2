import React from 'react'
import { storiesOf } from '@storybook/react'
import Base from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '300px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

storiesOf('Base', module).add('general', () => (
  <Container>
    <Base is='li' fontSize='2em'>I'm a 2em li!</Base>
    <Base is='h2' color='blue' bg='red'>I'm a blue h2 with red bg</Base>
    <Base bg='orange' p={2} width={1 / 2} h='150px' color='white'>
      Hola
    </Base>
    <Base
      is='img'
      h='80px'
      src='https://78.media.tumblr.com/c9aabea6b3dc5c75639fde3c93183fc0/tumblr_n2552wjYVG1rp6axuo1_500.gif'
    />
  </Container>
))
