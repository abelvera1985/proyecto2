import React, {useState, useEffect} from 'react'

function Container() {

const [users , setUsers] = useState([]);
const [search , setSearch] = useState ("");

const URL ='https://jsonplaceholder.typicode.com/users';


const showData = async () => {
const response = await fetch (URL)
const data = await response.json()
console.log(data);
setUsers (data);
}
//showData()

console.log("ñljgfsdnboñfdbug");





useEffect(()=> {
showData();

},[])

return (
  <div>
   <table>
  <thead>
    <tr>
      <th>nombre</th>
      <th>apellido</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.name}</td>

    </tr>

    
    )}

    
    
  </tbody>


   </table>

 
  </div>
)
}

export default Container