import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/Organ.png'
export default function Navbar() {
  return (
   <nav className='header-nav'>
    <div>
      <img src={logo} alt='img' width={100}/>
      <input type='search'/><button>search</button>
    </div>
    <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/signUp">SignUp</NavLink>
    </div>
   </nav>
  )
}
