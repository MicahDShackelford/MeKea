import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid rgba(0,0,0,0.3);
  width: 90%;
  ${Dropdown}:hover {
    cursor: pointer;
  }
`
const ArrowDown = styled(IoIosArrowDown)`
  font-size: 1.75em;
`
const Modal = styled.div`
  display: none;
  position: absolute;
  width 500px;
  height: 500px;
  img {
    width: 250px;
    height: auto;
  }
  justify-content: center;
  align-items: center;
`
const ModalOption = styled.div`

`

let Options = (props) => {
  let modalToggle = (e) => {
    e.target.children[e.target.children.length-1].style.display = "flex";
  }
  return (
    <div id="options">
    <h4>This price reflects slected options.</h4>
        {props.product.options.map((option) => (
          <div>
            <Dropdown onClick={modalToggle}>
              <div>
                <p>{option.name}</p>
              </div>
              <div>
                <ArrowDown/>
              </div>
              <Modal>
                {option.options.map((subOption) => (
                  <ModalOption>
                    <img src={subOption.image}></img>
                    <p>{subOption.name}</p>
                  </ModalOption>
                ))}
              </Modal>
            </Dropdown>
          </div>
        ))}
      </div>
  )
}

export default Options;