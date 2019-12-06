import React, { useEffect, useState } from 'react';
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
  svg:hover {
    cursor:pointer;
  }
  border: 1px solid rgba(0,0,0,0.45);
  align-items: center;
  justify-content: space-between;
`;

let Quantity = (props) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if(count === 1) {
      document.getElementById('sub').style.color = "rgba(0,0,0,0.2)";
    } else {
      document.getElementById('sub').style.color = "rgba(0,0,0,1)";
    }
  })

  return (
    <QuantityCont id="quantity">
      <div className="qty-txt">
        <p>Quantity</p>
      </div>
      <Counter className="qty-select">
        <FaMinus id="sub" onClick={() => {
          (count > 1) && (setCount(count-1)) || (count === 2)
          }}/>
        <h4 id="counter">{count}</h4>
        <FaPlus id="add" onClick={() => {
          setCount(count+1);
          }}/>
      </Counter>
    </QuantityCont>
  )
}

export default Quantity;