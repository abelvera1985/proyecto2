import Navegador  from "./components/NavBar.jsx"
import Brand from "./components/Brand.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import Main from "./components/Main.jsx"

import React,{ useState, useEffect } from 'react'
import Container from "./components/Container.jsx"
import { BrowserRouter } from "react-router-dom";
import UsedSta from "./UsedSta.jsx";
import Arti from "./Arti.jsx";

function App() {

  return (
    
    <BrowserRouter>

    <Navegador/>
    <Brand/>
    <Main/>
    <Container/>
    <UsedSta/>
    <Arti/>
    
    
    <ItemListContainer
    greeting="Bienvenido a shop-online"
    /> 

   </BrowserRouter>
    
    
  )

}

export default App


