import React, { useEffect, useState } from 'react'

function Navigation() {
  const [onTop, setOnTop] = useState(true)
 
  window.addEventListener("scroll", () => {
    const NavBox = document.getElementById("navBox").style;
    const LogoText =  document.getElementById("logoText").style;

    
   
  

    if (window.scrollY != 0) {
      LogoText.transform = "translateY(-75%)"
      LogoText.fontSize = "2rem"
      LogoText.color = "black"
      NavBox.backgroundColor = "white"
      NavBox.height = "60px"
      setOnTop(false)


      if (window.innerWidth < 768) {
        LogoText.transform = "translate(-30%, -75%)"
      }
    } else {
      LogoText.transform = "translateY(100%)"
      LogoText.fontSize = "4.5rem"
      LogoText.color = "white"
      NavBox.backgroundColor = "transparent"
      NavBox.height = "80px"
      setOnTop(true)

    }
  })
  return <>
    <section className='w-screen h-20 fixed top-0 my-0 z-1 transition-all ease-in-out duration-500' id='navBox'>
    <h1 className='w-full h-full absolute tracking-[0.3em] translate-y-[100%] text-center text-7xl transition-all ease-in-out duration-500' id='logoText'>GUCCI</h1>
      <div className='w-12/12 sm:w-11/12 md:w-7/12 h-full relative mx-auto'>
        <div className='w-6/12 h-full absolute right-0 flex justify-end px-5'>
            <button className='h-[60px] w-[40px] scale-100'>
              {onTop? <svg width="50%" height="50%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 9.5V5C13.75 2.92893 12.0711 1.25 10 1.25C7.92893 1.25 6.25 2.92893 6.25 5V9.5M17.606 7.50723L18.8692 19.5072C18.9391 20.1715 18.4183 20.75 17.7504 20.75H2.24963C1.58172 20.75 1.06089 20.1715 1.13081 19.5072L2.39397 7.50723C2.45424 6.93466 2.93706 6.5 3.51279 6.5H16.4872C17.0629 6.5 17.5458 6.93466 17.606 7.50723ZM6.625 9.5C6.625 9.70711 6.4571 9.875 6.25 9.875C6.04289 9.875 5.875 9.70711 5.875 9.5C5.875 9.29289 6.04289 9.125 6.25 9.125C6.4571 9.125 6.625 9.29289 6.625 9.5ZM14.125 9.5C14.125 9.70711 13.9571 9.875 13.75 9.875C13.5429 9.875 13.375 9.70711 13.375 9.5C13.375 9.29289 13.5429 9.125 13.75 9.125C13.9571 9.125 14.125 9.29289 14.125 9.5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> : <svg width="50%" height="50%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 9.5V5C13.75 2.92893 12.0711 1.25 10 1.25C7.92893 1.25 6.25 2.92893 6.25 5V9.5M17.606 7.50723L18.8692 19.5072C18.9391 20.1715 18.4183 20.75 17.7504 20.75H2.24963C1.58172 20.75 1.06089 20.1715 1.13081 19.5072L2.39397 7.50723C2.45424 6.93466 2.93706 6.5 3.51279 6.5H16.4872C17.0629 6.5 17.5458 6.93466 17.606 7.50723ZM6.625 9.5C6.625 9.70711 6.4571 9.875 6.25 9.875C6.04289 9.875 5.875 9.70711 5.875 9.5C5.875 9.29289 6.04289 9.125 6.25 9.125C6.4571 9.125 6.625 9.29289 6.625 9.5ZM14.125 9.5C14.125 9.70711 13.9571 9.875 13.75 9.875C13.5429 9.875 13.375 9.70711 13.375 9.5C13.375 9.29289 13.5429 9.125 13.75 9.125C13.9571 9.125 14.125 9.29289 14.125 9.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>  }
            </button>
            <button className='h-[60px] w-[40px] aspect-square scale-50'>
              {onTop? <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1.7616C4.77208 1.7616 1.75 4.78367 1.75 8.5116C1.75 12.2395 4.77208 15.2616 8.5 15.2616C10.3642 15.2616 12.0506 14.5069 13.273 13.2846C14.4953 12.0622 15.25 10.3758 15.25 8.5116C15.25 4.78367 12.2279 1.7616 8.5 1.7616ZM0.25 8.5116C0.25 3.95525 3.94365 0.261597 8.5 0.261597C13.0563 0.261597 16.75 3.95525 16.75 8.5116C16.75 10.5194 16.032 12.3607 14.8399 13.7909L19.5303 18.4813C19.8232 18.7742 19.8232 19.249 19.5303 19.5419C19.2374 19.8348 18.7626 19.8348 18.4697 19.5419L13.7793 14.8515C12.3491 16.0436 10.5078 16.7616 8.5 16.7616C3.94365 16.7616 0.25 13.0679 0.25 8.5116Z" fill="#ffffff"/>
              </svg>: <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1.7616C4.77208 1.7616 1.75 4.78367 1.75 8.5116C1.75 12.2395 4.77208 15.2616 8.5 15.2616C10.3642 15.2616 12.0506 14.5069 13.273 13.2846C14.4953 12.0622 15.25 10.3758 15.25 8.5116C15.25 4.78367 12.2279 1.7616 8.5 1.7616ZM0.25 8.5116C0.25 3.95525 3.94365 0.261597 8.5 0.261597C13.0563 0.261597 16.75 3.95525 16.75 8.5116C16.75 10.5194 16.032 12.3607 14.8399 13.7909L19.5303 18.4813C19.8232 18.7742 19.8232 19.249 19.5303 19.5419C19.2374 19.8348 18.7626 19.8348 18.4697 19.5419L13.7793 14.8515C12.3491 16.0436 10.5078 16.7616 8.5 16.7616C3.94365 16.7616 0.25 13.0679 0.25 8.5116Z" fill="#000000"/>
              </svg>}
            </button>
            <button className='h-[60px] w-[40px] scale-50'> 
              <svg xmlns="http://www.w3.org/2000/svg" className='h-full' viewBox="0 0 24 24" fill="none">
              {onTop? <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>:<path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>}
              {onTop? <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>:<path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>}
              {onTop? <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>:<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>}
              </svg>
            </button>
            {onTop? <p className='hidden md:block h-[60px] w-[40px] py-4.5 mx-2 text-white'>MENU</p>:<p className='hidden md:block h-[60px] w-[40px] py-4.5 mx-2 text-black'>MENU</p>}
        </div>
        
      </div>
    </section>
   
  </>
}

export default Navigation