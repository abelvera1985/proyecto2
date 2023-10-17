import { BrowserRouter, Route } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"



const Navegador = () => {
return (
    <header >
    <ul   class="flex items-center justify-between flex-wrap bg-teal-500 p-2">
      
      <li  class="mr-3"><Link to="/shop" class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >shop</Link></li>
      <li   class="mr-3"><Link to="/productos" class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >productos</Link></li>
      <li  class="mr-3"><Link to="/login" class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >login</Link></li>
      <CartWidget/>
      
    </ul>

    


  </header>




)



}















export default Navegador