import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/portfolio'>Portfolio</Link>
      </ul>
    </nav>
  )
}

export default Navbar
