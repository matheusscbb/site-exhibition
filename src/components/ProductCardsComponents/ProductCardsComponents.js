import React from 'react';

const ProductCardsComponents = (props) => {
// export const ProductCardsComponents = (name, price, img, imgAlt ) => {
  // abrir as props
  // const { name, price, img, imgAlt } = props;
  const { product } = props;

  return (
    <div className="product-container">
      <img src={product.img} alt={product.description} />

      <h2>{product.name}</h2>
      <h3>{product.description}</h3>

      <span className="price">{product.price}</span>
    </div>
  )
}

export default ProductCardsComponents;