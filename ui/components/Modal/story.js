import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from './index'
import Circle from '../Circle'
import Box from '../Layout'
import Text from '../Text'

storiesOf('Modal', module).add('basic', () => (
  <Box>
    <Modal isOpen>
      {({ Close, Jewel, Container, ContentContainer }) => (
        <Container>
          <Close />
          <ContentContainer>
            <Jewel>
              <Text size={5}>😘</Text>
            </Jewel>
            <Box w="50px" h="50px" bg="red">
              hi
            </Box>
          </ContentContainer>
        </Container>
      )}
    </Modal>
  </Box>
))
