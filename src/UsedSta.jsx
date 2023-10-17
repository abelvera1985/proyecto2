import React, { useState } from 'react'

function UsedSta() {

const [luz, oscuridad] = useState (false);

const encenderApagar = () => {
    oscuridad (!luz);

};

  return (
    <div> 
        <header>
            <h3>hola estoy aca : { luz ? "encendido" : "apagado" }</h3>
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </header>
    </div>
  );
}

 
export default UsedSta