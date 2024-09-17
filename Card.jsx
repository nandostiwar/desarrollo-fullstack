import React from 'react'
import './Card.css'

const Card = ({titulo="por defecto"}) => {

  return (
    <div className='card'>
        {titulo}
    </div>
  )
}

export default Card