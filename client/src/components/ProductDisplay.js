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
      <Tagline product={props.product} />
      <Ratings product={props.product} />
      <Desc product={props.product} />
      <Options product={props.product} />
      <Quantity product={props.product} />
      <ButtonGroup product={props.product} />
      <AdditionalInformation product={props.product} />
    </div>
  )
}

export default ProductDisplay;