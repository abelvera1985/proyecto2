import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react'
import Brand from "./Brand";
import Arti from "../Arti";

/*function Main() {
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
}*/

const Main  = () => {
  return (
    <main>
    
    <Routes>
          <Route path="/" element={<Brand/>} />
          <Route path="/shop" element={<p>joyas</p>} />
          <Route path="/productos" element={<p>productos</p>}/>
          <Route path="/login" element={<p>login</p>}/>
          <Route path="/detalle/:id" element={<Arti/>} />
          <Route path="*" element={<p>404 error</p>}/>

      </Routes>

     


    </main>
    

  )
 
}
 

export default Main

