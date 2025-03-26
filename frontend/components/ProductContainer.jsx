import React from 'react'

function ProductContainer(props) {
  return <>
    <div id={props.id} className='w-full aspect-[2/2.5] text-black border-red-900 border-1 hover:cursor-pointer'>
        <div className='w-full aspect-square bg-amber-500'></div>
    </div>
  </>
}

export default ProductContainer 