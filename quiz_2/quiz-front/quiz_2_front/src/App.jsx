import { useEffect, useState } from 'react'
import './App.css'

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

  function handleClick(e){
    const boton = e.target.value;
    const numero = e.target.innerText;
    fetch(`http://localhost:4700/v1/boton/changeNumber/${boton}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({numero})
            });
  }
  return (
    <>
      <button value="boton1" onClick={handleClick}>{objBtn.boton1}</button><br/>
      <button value="boton2" onClick={handleClick}>{objBtn.boton2}</button><br/>
      <button value="boton3" onClick={handleClick}>{objBtn.boton3}</button>
    </>
  )
}

export default App
