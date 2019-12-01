import React from 'react';

let Quantity = (props) => {
  return (
    <div id="quantity">
      <div className="qty-txt">
        <p>Quantity</p>
      </div>
      <div className="qty-select">
        <p>-</p>
        <h4>1</h4>
        <p>+</p>
      </div>
    </div>
  )
}

export default Quantity;