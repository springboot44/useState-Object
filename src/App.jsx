import { useState } from 'react'

import './App.css'

function App() {

  const [allvalues,Setallvalues]=useState({firstname:"yoshitha",lastname:"jain"})

  const [name,setName]=useState()

  const handleClick=()=>{
    Setallvalues({firstname:name})
  }
  return (
  <div>


 <h1>hello myfirst nameis :{allvalues.firstname}</h1>
 <h1>my lastname is:{allvalues.lastname}</h1>


  <input

  type='text'
  placeholder='enter your name'
  value={name}

  
  onChange={(e)=>setName(e.target.value)}
  />

 <button onClick={handleClick}>Update</button>

  </div>
  )
}

export default App
