import React from 'react';
import styled from 'styled-components';
import {FaShoppingBasket} from 'react-icons/fa';
import {MdPlaylistAdd} from 'react-icons/md';

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  .button {
    margin: 0.5em 0;
    padding: 1em;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }
  button:hover {
    cursor: pointer;
  }
  svg {
    font-size: 1.5em;
    margin-right: 10px;
  }
`;
const PrimaryButton = styled.button`
  background: #0058A3;
  color: #fff;
  ${PrimaryButton}:hover {
    background: #3379B5;
    transition 0.2s ease;
  }
  transition 0.2s ease;
`;
const SecondaryButton = styled.button`
  background: #F5F5F5;
  ${SecondaryButton}:hover {
    background: #DFDFDF;
    transition 0.2s ease;
  }
  transition 0.2s ease;
`;

let ButtonGroup = (props) => {
  return (
    <Buttons id="button-group">
      <PrimaryButton className="button"><FaShoppingBasket /> Add to shopping bag</PrimaryButton>
      <SecondaryButton className="button"><MdPlaylistAdd /> Add to shopping list</SecondaryButton>
    </Buttons>
  )
}

export default ButtonGroup;