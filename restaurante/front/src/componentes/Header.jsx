import React from 'react'
import './stylescomp/styles.css'

const Header = ({ Nombre }) => {
  return (
    <header>
        {Nombre}
    </header>
  )
}

export default Header