import React from 'react';

let Options = (props) => {
  let options = props.product.options;
  return (
    <div id="options">
      <h4>This price reflects slected options.</h4>
      <div className="drop-modal">
        {options.map((option) => (
          <div>
            <h4>{option.name}</h4>
            {option.options.map((subOption) => (
              <p>{subOption.name}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Options;