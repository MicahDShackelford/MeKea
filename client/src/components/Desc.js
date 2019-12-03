import React from 'react';

let Desc = (props) => {
  return (
    <div id="desc">
      <p>{props.product.longDesc}</p>
    </div>
  )
}

export default Desc;