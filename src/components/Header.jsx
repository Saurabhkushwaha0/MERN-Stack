import React from 'react'
import { FaSearch } from 'react-icons/fa';


export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
        <a href="/" class="flex items-center">
            <img
              src="../src/assets/1.png"
              class="mr-2 h-8 sm:h-9"
              alt="Sharvaya Logo"
            />
          </a>
        
        <form
          className='bg-slate-50 p-3 rounded-lg flex items-center'
        > 
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-20 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4 items-center'>
         
            <li className='hidden sm:inline text-black font-semibold hover:text-pink-600 focus:outline-none'>
              Home
            </li>
        
            <li className='hidden sm:inline text-black  font-semibold hover:text-pink-600 focus:outline-none '>
              About
            </li>
          
              <li className=' font-semibold bg-violet-500 hover:bg-pink-600 focus:outline-none rounded-lg px-3 py-1 text-white '> Sign in</li>
        
        </ul>
      </div>
    </header>
  )
}
