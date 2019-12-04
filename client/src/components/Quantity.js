import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const QuantityCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em;
`;
const Counter = styled.div`
  display: flex;
  width: 150px;
  padding: 0.7em 1em;
  svg {
    font-size: 0.8em;
    color: rgba(0,0,0,1)
  }
  #sub {
    color: rgba(0,0,0,0.2)
  }
  border: 1px solid rgba(0,0,0,0.45);
  align-items: center;
  justify-content: space-between;
`;

let Quantity = (props) => {
  const [count, setCount] = useState(1);

  return (
    <QuantityCont id="quantity">
      <div className="qty-txt">
        <p>Quantity</p>
      </div>
      <Counter className="qty-select">
        <FaMinus id="sub" onClick={() => {
          (count > 1) && (setCount(count-1)) || (count === 2) && (document.getElementById('sub').style.color = "rgba(0,0,0,0.2)") // Ensure the user doesnt go below 1
          }}/>
        <h4>{count}</h4>
        <FaPlus onClick={() => {
          setCount(count+1)
          document.getElementById('sub').style.color = "rgba(0,0,0,1)"
          }}/>
      </Counter>
    </QuantityCont>
  )
}

export default Quantity;