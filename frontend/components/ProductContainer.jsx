import React from 'react'

function ProductContainer(props) {
  return <>
    <div id={props.id} className='w-full aspect-[2/3] text-black border-black border-1 hover:cursor-pointer'>
        <div className='w-full aspect-[2/2.5] bg-amber-500'></div>
        <div className='w-full aspect-[2/0.5] p-2'>
          <h1 className='text-[0.8em] tracking-[0.5px]'>{props.name}</h1>  
          <h2 className='text-[0.8em]'>${props.price}</h2>
        </div>
    </div>
  </>
}

export default ProductContainer 