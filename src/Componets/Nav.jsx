import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <div >
        <nav id='nav'>
        <Link to="home" className='link'>
            <p>Home</p>
        </Link>
        <Link to="singin" className='link'>
            <p>Signin</p>
        </Link>
        </nav>
    </div>
  )
}

export default Nav