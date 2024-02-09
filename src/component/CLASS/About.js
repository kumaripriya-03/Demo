// function About(){
//     var name ="Priya"
//   return (
//     <h1 style={{color:"green",backgroundColor:"pink"}}>About Us {name}</h1>
//   )
// }

// export default About

import React ,{ useState } from 'react'

function About() {
  const [name,setName]=useState("Priya")
  const change=()=>{
    setName("Raushni")
  }
  return (
    <>
    <h1>About Us {name}</h1>
    <button onClick={change}>UPDATE</button>
    </>
  )
}

export default About