import React, { Component } from 'react'
import Overlay from '../Overlay'
import Close from '../Close'
import Box from '../Layout'
import Circle from '../Circle'
import { Absolute } from '../Position'

const makeRenderProps = ({ onRequestClose }) => ({
  Close: () => (
    <Absolute top="25px" right="25px">
      <Close onClick={onRequestClose} />
    </Absolute>
  ),
  Jewel: ({ children, bg }) => (
    <Box.row x mt="-60px">
      <Circle size="large" bg={bg}>
        {children}
      </Circle>
    </Box.row>
  ),
  ContentContainer: ({ children }) => (
    <Box
      bg="white"
      borderRadius="20px"
      w="100%"
      maxWidth="300px"
      m="0 auto"
      p={3}
    >
      {children}
    </Box>
  ),
  Container: ({ children, hasJewel }) => (
    <Box pt="20vh" w="100%" h="100%">
      {children}
    </Box>
  )
})

class Modal extends Component {
  render () {
    const { isOpen, popup = true, children } = this.props
    return isOpen ? (
      <Overlay popup={popup} isOpen>
        {children(makeRenderProps(this.props))}
      </Overlay>
    ) : null
  }
}

export default Modal
