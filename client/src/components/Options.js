import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
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
  ${Dropdown} > * {
    pointer-events: none;
  }
`;
const DropdownText = styled.div`
  *{
    margin: 0.25em;
  }
`;
const ArrowDown = styled(IoIosArrowDown)`
  font-size: 1.75em;
`;
const Modal = styled.div`
  display: none;
  position: fixed;
  // width: 95vh;
  // height: 90vh;
  max-width: 80vh;
  background: #fff;
  img {
    width: 250px;
    height: 250px;
  }
  z-index: 6;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .OptionHead {
    padding-left: 2em;
    margin-left: auto;
  }
  .CloseOptions {
    margin-left: auto;
    margin-right: 1em;
    margin-top: 1em;
    height: 20px;
  }
  .CloseOptions:hover {
    cursor: pointer;
  }
  .CloseOptions > * {
    pointer-events: none;
  }
`;
const ModalOptionCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const ModalBg = styled.div`
  display: none;
  position: fixed;
  top:0;
  left:0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.4);
  z-index: 4;
`;
const ModalCont = styled.div`
  display: none;
  position: fixed;
  top:0;
  left:0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items:center;
  z-index:5
`;

const ModalOption = styled.div`
  width: 300px;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding-top: 0.75em;
  }
  ${ModalOption}:hover {
    background: #F7F7F7;
    // transition: 0.25s ease;
    cursor: pointer;
  }
  ${ModalOption}:hover img {
    width: 260px;
    height: 260px;
    transition: 0.2s ease;
  }
  ${ModalOption}:hover p {
    margin-bottom: 1em;
  }
  img {
    transition 0.2s ease;
  }
`;
const WeightedP = styled.p`
  font-weight: 600;
`;


let Options = (props) => {
  let modalToggle = (e) => {
    let modalCont = document.getElementById("modalCont-" + e.target.id.split('-')[1]);
    let modal = document.getElementById("modal-" + e.target.id.split('-')[1]);
    let modalBg = document.getElementById("modal-bg");
    if(modalBg.style.display !== "flex") {
      modalCont.style.display = 'flex';
      modal.style.display = 'flex';
      modalBg.style.display = 'flex';
    } else {
      modalCont.style.display = 'none';
      modal.style.display = 'none';
      modalBg.style.display = 'none';
    }
  }
  return (
    <OptionsContainer>
    <WeightedP>This price reflects slected options.</WeightedP>
        {props.product.options.map((option) => (
          <div key={option.name}>
            <Dropdown className="dropdown" onClick={modalToggle} id={`dropdown-${option.name}`}>
              <DropdownText>
                <h5>{option.name}</h5>
                <p>{option.options[0].name}</p>
              </DropdownText>
              <div>
                <ArrowDown/>
              </div>
            </Dropdown>
            <ModalBg id="modal-bg" />
            <ModalCont id={`modalCont-${option.name}`}>
              <Modal id={`modal-${option.name}`}>
                <ModalHead>
                  <div className="OptionHead">
                    <h1>Choose {option.name}</h1>
                  </div>
                  <div className="CloseOptions" id={`close-${option.name}`} onClick={modalToggle}>
                    <IoIosClose size="2em" />
                  </div>
                </ModalHead>
                <ModalOptionCont>
                  {option.options.map((subOption, i) => (
                    <ModalOption key={subOption.name}>
                      <img src={`https://source.unsplash.com/250x250/?${option.name},${subOption.name}`}></img>
                      <div>
                        <p>{subOption.name}</p>
                      </div>
                    </ModalOption>
                  ))}
                </ModalOptionCont>
              </Modal>
            </ModalCont>
        </div>
        ))}

      </OptionsContainer>
  )
}

export default Options;