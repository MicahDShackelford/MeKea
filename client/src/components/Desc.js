import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: #0058A3;
`


let Desc = (props) => {
  let desc = "";
  if(props.product.longDesc !== null){
    if(props.product.longDesc.length > 175) {
      desc = props.product.longDesc.slice(0, 175) + "."
    }else {
      desc = props.product.longDesc;
    }
  }
  return (
    <div id="desc">
      <p>{desc}<Link href="#">Read More</Link></p>
    </div>
  )
}

export default Desc;