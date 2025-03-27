import React from 'react'

function CrossCategory() {
    const crossCategoryArray = [
        {category:"Men's Bag", image: "../src/assets/black-m-bag.jpg"},
        {category:"Men's Shoes", image: "../src/assets/black-m-shoes.jpg"},
        {category:"Women's Bag", image: "../src/assets/orange-w-bag.jpeg"},
        {category:"Women's Shoes", image: "../src/assets/black-w-shoes.jpeg"}
      ]
  return <>
    <section className='w-full aspect-square md:h-[25vw]  grid grid-cols-2 md:flex'>
    {crossCategoryArray.map(product => (
          <div className='w-11/12 aspect-square m-auto md:hover:scale-105 hover:z-1'>
            <button className='w-full h-full relative '> 
                <img className='w-full h-full bg-cover object-cover bg-no-repeat ' src={product.image}/>
                <div className='w-full h-full backdrop-brightness-80 hover:backdrop-brightness-120 absolute top-0 ease-in transition-all duration-200'></div>
                <p className='w-fit absolute left-[50%] translate-x-[-50%] bottom-5 bg-white p-2 rounded-[2px] text-center text-black whitespace-nowrap'>{product.category}</p>
            </button>
            
          </div>
        ))}
    </section>
  </>
}

 
export default CrossCategory