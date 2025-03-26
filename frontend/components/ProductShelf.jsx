import React, { useEffect, useState } from 'react'
import ProductContainer from './ProductContainer'

function ProductShelf() {
    const [myProducts, setMyProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3000/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
     
          setMyProducts(data.products || []); 
        } catch (err) {
          console.error(err);
        } 
      };
      fetchProducts()
      console.log(myProducts)
    })

  return <>
      <section className='w-full h-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {myProducts.map(product => (
            <ProductContainer key={product.id} id={product.id} name={product.name} price={product.price} image={product.image}/>
        ))}
      </section>
  </>
}

export default ProductShelf