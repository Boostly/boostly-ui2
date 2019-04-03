import React from 'react'
import { css } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Input, Textarea, Select } from './index'

const Container = ({ children }) => (
  <div style={{ maxWidth: '300px', width: '100%', padding: '20px' }}>
    {children}
  </div>
)

storiesOf('Input', module).add('basic', () => (
  <div>
    <Container>
      <Input size={50} />
      <Textarea />
      <Select>
        {[1, 1.5, 2, 2.5, 3].map((amount, i) => (
          <option value={amount} key={amount}>
            {amount} {amount > 1 ? 'Hours' : 'Hour'}
          </option>
        ))}
      </Select>
    </Container>
  </div>
))
