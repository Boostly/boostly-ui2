import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from './index'
import { css } from '@emotion/core'

const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

storiesOf('Badge', module).add('basic', () => (
  <Container>
    <Badge
      css={css`
        text-align: center;
        border-radius: 99999px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      Mikey
    </Badge>
    <Badge bg="blue">Blue Mikey</Badge>
  </Container>
))
