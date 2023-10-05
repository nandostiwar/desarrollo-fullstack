function ButtonCounter({contador, value}){

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
        <button value={value} onClick={handleClick}>{contador}</button>
    )
}

export default ButtonCounter;