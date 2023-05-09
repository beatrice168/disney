import React from 'react'
import {NavLink} from "react-router-dom"
const linkStyles={
    Color:"black",
    textAlign:"center",
    marginLeft:"10px",
    fontWeight:"bold",
    fontSize:"30px",
    padding:"10px 20px",
    textDecoration:"none",
}
 function NavBar() {
  return (
    <nav>
        <NavLink to="/" style={linkStyles}>Home</NavLink>
        <NavLink to="/disneylist" style={linkStyles}>DisneyList</NavLink>
    </nav>
  )
}
export default NavBar;