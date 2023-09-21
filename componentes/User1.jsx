// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Card';
import './User1.css'
import Regresar from './regresar';



const User1 = () => {
  return (
    <div className='App' >
      <h1>Bienvenido a juego </h1>

      <div className='container'>
      <Card titulo='1' />
      <Card  titulo='2'/>
      <Card   titulo='3'/>
      <Card titulo='4'/>
      <Card titulo='5'/>
      <Regresar/>



     


      </div>
   
      
    </div>
  );
};

export default User1;
