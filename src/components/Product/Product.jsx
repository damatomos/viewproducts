import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

function Product({id, name, image, ...props}) {
  
  return (
    <div className="Product animLeft" {...props}>
      <Link to={`/products/${id}`}> 
        <img src={image} alt={name} />
      </Link>
      <span>{name}</span>
    </div>
  );
}

export default Product;