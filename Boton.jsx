import React from 'react'
import './Boton.css'


const Boton = ({titulo="por defecto"}) => {
  return (
    <div className='boton'>
        {titulo}
    </div>
  )
}

export default Boton