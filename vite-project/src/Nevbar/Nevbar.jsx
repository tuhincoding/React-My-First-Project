import React from 'react'
import { Link } from 'react-router-dom'

function Nevbar() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img className='w-20' src="public/assets/image/logo/logo.png" alt="" />
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to='/' class="mr-5 border hover:border-indigo-600 p-4 rounded-full hover:bg-emerald-400 hover:text-black">Home</Link>
          <Link to='/tours' class="mr-5 border hover:border-indigo-600 p-4 rounded-full hover:bg-emerald-400 hover:text-black">Tours</Link>
          <Link to="/aboutUs" class="mr-5 border hover:border-indigo-600 p-4 rounded-full hover:bg-emerald-400 hover:text-black">About Us</Link>
          <Link to='/contact' class="mr-5 border hover:border-indigo-600 p-4 rounded-full hover:bg-emerald-400 hover:text-black">Contact</Link>
        </nav>
      </div>
  </header>
  )
}

export default Nevbar