import { Navigate } from "react-router-dom";
import BtnHome from "./BtnHome";
import CardMina from "./CardMina";
import '../styles/Game.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game({user}){
    if(user!=='userGame' || !user){
        return <Navigate to="/"/>
    }
    let [random1, setRandom1] = useState(null);
    let [random2, setRandom2] = useState(null);
    const goTo = useNavigate();
    const arrayCards = [
        1,
        2,
        3,
        4,
        5
    ]
    function generateRandom(){
        setRandom1(Math.floor(Math.random() * (5 - 1) + 1));
        setRandom2(Math.floor(Math.random() * (5 - 1) + 1));
        if(random2 === random1){
            setRandom2(random2+Math.floor(Math.random() * (3 - 1) + 1));
        }
    }
    return (
        <div>
            <h1>GAME</h1>
            {
                arrayCards.map((number, index)=>{
                    if(random1 === index+1 || random2 === index+1){
                        return <CardMina key={number} numero ={number} bomba={number}/>
                    }
                    return <CardMina key={number} numero={number} />
                })
            }
            <BtnHome />
            <button onClick={generateRandom}>VOLVER A JUGAR</button>
        </div>
        
    )
}

export default Game;