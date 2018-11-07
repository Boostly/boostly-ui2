import React, { Component } from 'react'
import DOM from 'react-dom'
import pt from 'prop-types'
import styled, { css } from 'react-emotion'
import { opacity } from '../../utils'
import { colors } from '../../settings'
import Popup from '../Popup'

const common = css`
  background: ${opacity(colors.purple, 0.5)};
  border-radius: 50px 50px 0 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const fixed = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
class Overlay extends Component {
  static propTypes = {
    popup: pt.bool,
    isOpen: pt.bool,
    selector: pt.string
  }
  glassFilterEffect = css`
    filter: blur(5px);
  `
  portalTargetNode = document.createElement('div')
  contentParentNode = null
  componentDidMount = () => {
    if (this.props.isOpen) {
      this.mountPortalTarget(this.portalTargetNode)
      this.addFilterEffect()
    }
  }
  componentWillUnmount = () => {
    if (this.props.isOpen) {
      this.removeFilterEffect()
      this.unmountPortalTarget(this.portalTargetNode)
    }
  }
  addFilterEffect = () => {
    this.contentParentNode = document.querySelector(
      this.props.selector || '#root'
    )
    this.contentParentNode.className += this.glassFilterEffect
  }
  removeFilterEffect = () => {
    this.contentParentNode.className = ''
  }
  mountPortalTarget = node => {
    document.querySelector('body').appendChild(node)
  }
  unmountPortalTarget = node => {
    document.querySelector('body').removeChild(node)
  }
  render() {
    const { popup, isOpen, children } = this.props
    if (!isOpen) return null
    return popup ? (
      DOM.createPortal(
        <Popup isOpen={isOpen}>
          <div className={`${common}`}>{children}</div>
        </Popup>,
        this.portalTargetNode
      )
    ) : (
      <div className={`${common} ${fixed}`}>{children}</div>
    )
  }
}

export default Overlay
