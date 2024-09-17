import React from 'react'
import Card from './Card'
import Boton from './Boton'
import { Link } from 'react-router-dom'
import './Juego.css'

const Juego = () => {
  return (
    <div > 
    estas en juego 
    <div className='containerJuego'>
    <Card titulo='1'/> 
    <Card titulo='2'/>
    <Card titulo='3'/>
    <Card titulo='4'/>
    <Card titulo='5'/> 
    </div> <br />
    
    <Link to="/"> <Boton titulo='Volver' />  </Link>
    
    </div>
  )
}

export default Juego