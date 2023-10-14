import Consulta from "./Consulta.jsx";
import '../styles/ViewConsulta.css';
import { useEffect, useState } from "react";

function ViewConsulta(){
    const [data, setData] = useState([]);

    function handleBtnEdad(){
      let arrayResult = [];
      let array = data.map((elem)=>{
        return parseInt(elem.edad);
      })

      let arraySorted = array.sort();
      console.log(arraySorted);

      for(let i in arraySorted){
        for(let elem of data){
          if(String(arraySorted[i])===elem.edad){
            arrayResult.push(elem);
          }
        }
      }
      setData(arrayResult)
    }

    function handleBtnEstrato(){
      let arrayResult = [];
      let array = data.map((elem)=>{
        return parseInt(elem.estrato);
      })

      let arraySorted = array.sort(); 
      console.log(arraySorted);

      for(let i in arraySorted){
        for(let elem of data){
          if(String(arraySorted[i])===elem.estrato){
            arrayResult.push(elem);
          }
        }
      }
      setData(arrayResult)
    }

    useEffect(()=>{
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/v1/form');
            const result = await response.json(); 
            setData(result.clientes);
          } catch (error) {
            console.error('Error al obtener datos:', error);
          }
        };
        fetchData();
      },[])
    return (
        <div className="container">
            <button onClick={handleBtnEstrato}>Estrato</button>
            <button onClick={handleBtnEdad}>Edad</button>
            {data.map((elem)=>{
                return <Consulta nombre={elem.nombre} edad={elem.edad} telefono={elem.telefono} correo={elem.correo} estrato={elem.estrato}/>
            })}
        </div>
    )
}

export default ViewConsulta;