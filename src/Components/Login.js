import React, { useState } from 'react'
import axios from 'axios'
export default function Login() {
  const[email,setEmail]=useState('')
  const[password,setPass]=useState('')
  const handleLog=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/auth/signin",{email,password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
  }
  return (
    <div>
      <form className='Login-form' onSubmit={handleLog}>
        <fieldset>
        <label>Email</label>
        <input type='email' value={email} placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <label>Password</label>
        <input type='password' value={password} placeholder='Password' onChange={(e)=>setPass(e.target.value)}/><br></br>
        <button>Login</button>
        </fieldset>
      </form>
    </div>
  )
}
