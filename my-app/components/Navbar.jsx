import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <ul>
        <li>
            <Link href="/login">Login</Link>
        </li>
        <li>
            <Link href="/login/loginuser">Login user</Link>
        </li>
        <li>
            <Link href="/login/loginadmin">Login admin</Link>
        </li>
      </ul>
  )
}

export default Navbar
