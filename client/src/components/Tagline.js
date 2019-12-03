import React from 'react';

let Tagline = (props) => {
  let productName = "", price = "";
  if(props.product.name) {
    productName = props.product.name.toUpperCase();
    price = props.product.price.toString().split('');
    price.unshift("$");
    price.splice(-2,0,'.');
    price = price.join('');
  }

  return (
    <div id="tagline">
      <h2>{productName}</h2>
      <p>{props.product.shortDesc}</p>
      <h1>{price}</h1>
    </div>
  )
}

export default Tagline;