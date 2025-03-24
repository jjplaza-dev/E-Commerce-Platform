import React from 'react'

function Navigation() {
  return <>
    <section className='w-screen h-12 bg-green-500 sticky top-0 my-0'>
      <button className='h-full aspect-square absolute right-0 sm:hidden'> 
        <svg xmlns="http://www.w3.org/2000/svg" className='h-full' viewBox="0 0 24 24" fill="none">
          <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </button>
    </section>
   
  </>
}

export default Navigation