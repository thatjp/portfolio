import React from "react"
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <nav className="flex justify-cente">
      <ul className='flex items-center space-x-6'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello-world">Sample Page</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
