import React from 'react'
import pt from 'prop-types'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import * as sys from 'styled-system'

const styles = Object.keys(sys)

const _blacklist = ['css', 'is', 'as', ...styles]

const makePropFilter = bl => prop => {
  const blacklist = bl.reduce(
    (map, key) => ({
      ...map,
      [key]: true
    }),
    {}
  )
  return isPropValid(prop) && !blacklist[prop]
}

function make ({
  api = [],
  css = '',
  extend,
  baseTag = 'div',
  defaults = {},
  blacklist = []
}) {
  const shouldForwardProp = extend
    ? () => true
    : makePropFilter([..._blacklist, ...blacklist])

  const _Base = styled(extend || 'div', {
    shouldForwardProp
  })`
    ${css}
    ${api.map(a => sys[a] || a)}
  `

  const Base = props => {
    const tag = props.as || props.is || baseTag
    return extend ? (
      <_Base {...defaults} {...props} />
    ) : (
      <_Base as={tag} {...defaults} {...props} />
    )
  }

  Base.propTypes = {
    as: pt.string,
    is: pt.string
  }

  return Base
}

export default make
