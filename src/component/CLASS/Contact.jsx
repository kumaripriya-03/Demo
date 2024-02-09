// import React, { Component } from 'react'
// import "./css/style.css"

//  class Contact extends Component {
//     address = "Noida"
//   render() {
//     return (
//       <h2>Contact {this.address}</h2>
//     )
//   }
// }

// export default Contact

// import React, { Component } from 'react'

// export default class Contact extends Component {
//   state={name:"" ,email:"",mobile:"",msg:""}
//   handler=(e)=>{
//     this.setState({[e.target.name]:e.target.value})
//   }
//    readData=()=>{
//     console.log(this.state)
//    }
//   render() {
//     return (
//       <>
//       <h1>Contact us</h1>
//       <form>
//         <input type='text' placeholder='Your Name' name='name' value={this.state.name} onChange={this.handler}/>
//         <input type='email' placeholder='Email Id' name='email' value={this.state.email} onChange={this.handler}/>
//         <input type='number' placeholder='Your Mobile' name='mobile' value={this.state.mobile} onChange={this.handler}/>
//         <textarea placeholder='Your Message' name='msg' value={this.state.msg} onChange={this.handler}></textarea>
//         <button type='button' onClick={this.readData}>Contact Us</button>
//       </form>
//       </>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class Contact extends Component {
//   state={ty:"password",btnText:"Show"}
//   change=()=>{
//     this.setState({ty:"text",btnText:"Hide"})
//   }
//   render() {
//     return (
//       <>
//         <input type={this.state.ty} />
//         <button onClick={this.change}>{this.state.btnText}</button>
//       </>
//     )
//   }
// }

// 


// import React, { Component } from 'react'

// export default class Contact extends Component {
//     state={courses:["React","Angular","java"]}
//   render() {
//     return (
//       <>
//       <h1>Contact</h1>
//       <ul>
//         {
//           this.state.courses.map((val,i)=>
//              <li key={i}>{val}</li>
//           )
//         }
//       </ul>
//       </>
//     )
//   }
// }


import React, { Component } from 'react'

export default class Contact extends Component {
  state={data:[]}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>{
       console.log(json)
       this.setState({data:json}) 
    })
     .catch(err=>console.log(err))
  }
  render() {
    return (
      <>
      <h1>Contact</h1>
      {
        this.state.data.map((val,ind)=>
        <div key={ind}>
            <h1>{val.name}</h1>
            <p>{val.email}</p>
            <hr/>
        </div>
        )
      }
      </>
    )
  }
}

