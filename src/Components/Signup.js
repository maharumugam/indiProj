import React, { useState } from 'react'
import image3 from '../Images/healthy.png'
import axios from 'axios'
export default function Signup() {
  const[Firstname,setFname]=useState('')
  const[Lastname,setLname]=useState('')
  const[email,setEmail]=useState('')
  const [phonenumber,setPhone]=useState('')
  const[password,setPass]=useState('')
  const handleSign=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/auth/signup",{Firstname,Lastname,email,phonenumber,password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
  }
  return (
    <div className='signup-form'>
      <div className='sign-img'>
        <img src={image3} alt='img' width={470}/>
      </div>
      <div>
        <form className='form-wrapper' onSubmit={handleSign}>
        <h1>SignUp</h1>
        <fieldset className='form-fieldset'>
        <label>FIrstName</label><br></br>
        <input type='text' value={Firstname} placeholder='Fname' onChange={(e)=>setFname(e.target.value)} /> <br></br>
        <label>LastName</label><br></br>
        <input type='text' value={Lastname} placeholder='Lname' onChange={(e)=>setLname(e.target.value)}/><br></br>
        <label>Email</label><br></br>
        <input type='email' value={email} placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <label>Phone number</label><br></br>
        <input type='pno' value={phonenumber} placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/><br></br>
        <label>Password</label><br></br>
        <input type='password' value={password} placeholder='Password' onChange={(e)=>setPass(e.target.value)}/><br></br>
        <button>Registered</button>
        </fieldset>
        </form>
      </div>
    </div>
  )
}
