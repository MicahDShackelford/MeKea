import React from 'react';

let AdditionalInformation = (props) => {
  return (
    <div id="additional-info">
      <div className="assembly-info">
        <a href="#">Assembly</a>
      </div>
      <div className="delivery-info">
        <h3>Available for Delivery</h3>
      </div>
      <div className="pickup-info">
        <a href="#">Check at your local store</a>
      </div>
    </div>
  )
}

export default AdditionalInformation;