import React from 'react'
import { Link } from 'react-router-dom'

function LoginLinks() {
  return (
    <div className='flex'>
      <Link to={`/login`}>
        <p className="text-lg  text-white hover:underline pl-2">Login</p>
      </Link>
      <Link to={`/register`}>
        <p className="text-lg  text-white hover:underline pl-2">sign up</p>
      </Link>
    </div>
  )
}

export default LoginLinks