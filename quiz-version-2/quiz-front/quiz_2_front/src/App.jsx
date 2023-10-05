import { useEffect, useState } from 'react'
import './App.css'
import ButtonCounter from './components/ButtonCounter';

function App() {
  const [count, setCount] = useState(0);
  const [objBtn, setObjBtn] = useState('');
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4700/v1/boton');
        const result = await response.json();
        setObjBtn(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }
  ,[])

  return (
    <>
      <ButtonCounter value={"boton1"} contador={objBtn.boton1}/><br />
      <ButtonCounter value={"boton2"} contador={objBtn.boton2}/><br />
      <ButtonCounter value={"boton3"} contador={objBtn.boton3}/>
    </>
  )
}

export default App
