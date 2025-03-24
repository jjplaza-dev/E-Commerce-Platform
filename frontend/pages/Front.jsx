import React from 'react'

function Front() {
  return <>
    <section className='w-screen h-screen relative'>
      <h1 className='w-full h-1/12 absolute text-center text-8xl tracking-[0.3em]'>GUCCI</h1>
      <img className='w-screen h-150 object-cover bg-cover object-[54%_75%] sm:h-10/12 md:h-11/12 md:object-[54%_40%] bg-no-repeat' src='../src/assets/bag-front.jpeg'/>
      <div className='w-80 h-40 mx-auto my-[-12em] flex items-center justify-center flex-col relative'>
        <h2 className='text-2xl  absolute top-0'>The New Pumpkin Pouch</h2>
        <button className='w-40 h-12 bg-white text-black my-3 border-none font-bold text-[0.8em] tracking-[0.1em] hover:w-38 hover:h-10 ease-in-out transition-all delay-50 rounded-[3px]'>SHOP HANDBAGS</button>
      </div>
      
    </section>
  </>
}

export default Front