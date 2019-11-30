import React from 'react';
import Tagline from './Tagline';
import Ratings from './Ratings';
import Desc from './Desc';
import Options from './Options';
import Quantity from './Quantity';
import ButtonGroup from './ButtonGroup';
import AdditionalInformation from './AdditionalInformation';

let ProductDisplay = (props) => {
  return (
    <div id="product-display">
      <Tagline />
      <Ratings />
      <Desc />
      <Options />
      <Quantity />
      <ButtonGroup />
      <AdditionalInformation />
    </div>
  )
}

export default ProductDisplay;