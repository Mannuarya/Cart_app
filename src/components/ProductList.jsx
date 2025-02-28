import React from 'react';
import Product from './Product.jsx';

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?

    props.productList.map((product,i)=>{
      return <Product product={product} key={i} 
      incrementQuantity = {props.incrementQuantity} index={i} 
      decrementQuantity={props.decrementQuantity}
      removeItem={props.removeItem}
      />
    })
    : <h1>Please add products exist in the cart</h1>
    
  )
}
