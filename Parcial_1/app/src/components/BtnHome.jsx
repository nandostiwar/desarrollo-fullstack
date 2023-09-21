import { useNavigate } from "react-router-dom";
import '../styles/BtnHome.css';

function btnHome(){
    const go = useNavigate();
    function goHome(){
        go("/");
    }

    return (
        <button id="btnHome" onClick={goHome}>REGRESAR</button>
    )
}

export default btnHome;