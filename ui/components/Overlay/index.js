import React from 'react'
import DOM from 'react-dom'
import pt from 'prop-types'
import { css } from '@emotion/core'
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
const glassFilterEffect = css`
  filter: blur(5px);
`

let portalTargetNode
let contentParentNode = null
const mountPortalTarget = node =>
  document.querySelector('body').appendChild(node)
const unmountPortalTarget = node =>
  document.querySelector('body').removeChild(node)
const addFilterEffect = selector => {
  contentParentNode = document.querySelector(selector || '#root')
  contentParentNode.setAttribute('style', glassFilterEffect.styles)
}
const removeFilterEffect = () => {
  contentParentNode.setAttribute('style', {})
}
function Overlay (props) {
  portalTargetNode = document.createElement('div')
  React.useEffect(() => {
    if (props.isOpen) {
      mountPortalTarget(portalTargetNode)
      addFilterEffect(props.selector)
    }

    return function cleanup () {
      if (props.isOpen) {
        unmountPortalTarget(portalTargetNode)
        removeFilterEffect()
      }
    }
  })

  if (!props.isOpen) return null
  return props.popup ? (
    DOM.createPortal(
      <Popup isOpen={props.isOpen}>
        <div
          css={css`
            ${common}
          `}
        >
          {props.children}
        </div>
      </Popup>,
      portalTargetNode
    )
  ) : (
    <div className={`${common} ${fixed}`}>{props.children}</div>
  )
}

Overlay.propTypes = {
  popup: pt.bool,
  isOpen: pt.bool,
  selector: pt.string,
  children: pt.node
}

export default Overlay
