import ProductItem from './ProductItem';
import React from 'react';

export default function ProductList(props) {
  return (
    <div className="row">
      {
        props.products.map(item => (
          <ProductItem key={item.id} product={item} {...props} />))
      }
    </div>
  );
}