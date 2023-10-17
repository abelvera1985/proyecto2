import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Productos from './Productos.json'

function Arti() {

const [loading, setLoading] = useState(true)
const [producto, setProducto] = useState ({})
const params = useParams ()

useEffect (()=> {
  setTimeout(() => {
    setLoading (false)
    console.log (Productos)
    Productos.forEach(producto => {
      console.log (producto.id)
      if(Productos.id == parseInt (params.id)){
        console.log("dfbdfgbhdfg",producto)
        setProducto(producto)
        
      }
    })
  }, 2000);



},[])

if(loading){
  return <p>LOADING .......</p>
}


  return (
    <h2> {Productos.foto}</h2>
  )
}

export default Arti