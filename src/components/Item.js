import React from 'react'
import { capitalizeFirstLetter } from "../utils/util";

function Item(props) {
    const { product } = props;
  return (
    <div className="product">
        <div>
            <img src={product.imageURL} alt="Product" />
        </div>
        <div>
            <p>{product.price} $</p>
            <p>{capitalizeFirstLetter(product.title)} </p>
            <h1>{product.count}</h1>
        </div>
    </div>  )
}

export default Item
