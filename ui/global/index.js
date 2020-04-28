import React, { useEffect } from 'react'

export const LoadFont = () => {
  useEffect(() => {
    const WebFont = require('webfontloader')
    WebFont.load({
      google: {
        families: ['Work+Sans:300,400,500,700', 'Righteous', 'sans-serif'],
      },
    })
  }, [])
  return <div />
}
