import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  return (
    <div>
  <nav className="flex flex-wrap items-center justify-between p-3 bg-yellow-100">
    <img src="https://tailwindflex.com/public/favicon.ico" className="h-10 w-10" alt />
    <div className="flex md:hidden">
      <button id="hamburger">
        <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width={48} height={48} />
        <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width={48} height={48} />
      </button>
    </div>
    <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
      <Link to="/" className="block md:inline-block text-teal-1500 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none">Home
      </Link>
      <Link to="/about" className="block md:inline-block text-teal-1500 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none">About
      </Link>
      <Link to="#" className="block md:inline-block text-teal-1500 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Pricing
      </Link>
      <Link to="#" className="block md:inline-block text-teal-1500 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Contact
      </Link>
    </div>
    <Link to="#" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded">Create
      Account
    </Link>

  </nav>
</div>

  )
}

export default Navbar
