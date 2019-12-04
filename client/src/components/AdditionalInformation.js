import React from 'react';
import styled from 'styled-components';
import {FiTruck} from 'react-icons/fi';
import {IoMdInformationCircle} from 'react-icons/io';
import {MdStore} from 'react-icons/md';
import {GiRabbit} from 'react-icons/gi';

const RowCont = styled.div`
  display:flex;
  flex-direction: row;
  svg {
    font-size: 1.5em;
    margin-right: 0.5em;
  }
  p {
    margin-left: 0.5em;
  }
  align-items: center;
  // justify-content: center;
`;
const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;
const Information = styled(IoMdInformationCircle)`
  color: #0058A3;
`;

let AdditionalInformation = (props) => {
  if(props.product.name){
    if(props.product.deliverable) {
      document.getElementById('deliveryStatus').style.background = "#0D8A01";
    }else {
      document.getElementById('deliveryStatus').style.background = "#EB6391";
    }
  }
  return (
    <div id="additional-info">
      <RowCont>
        <FiTruck />
        <Dot id="deliveryStatus"/>
        <p>Available for Delivery</p>
      </RowCont>
      <RowCont className="pickup-info">
        <MdStore/>
        <Information size="18px" />
        <a href="#">Check at your local store</a>
      </RowCont>
      <RowCont className="assembly-info">
        <GiRabbit />
        <Information size="18px" />
        <a href="#">Assembly</a>
      </RowCont>
    </div>
  )
}

export default AdditionalInformation;