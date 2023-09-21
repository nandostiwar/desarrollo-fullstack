import React from 'react'
import'./Card.css'

const Card = ({titulo="defecto"}) => {
  return (
    <div className='Card'>
       {titulo}
        </div>
  )
}

export default Card