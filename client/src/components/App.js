import React from 'react';
import ProductDisplay from './ProductDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  render() {
    return (
      <div id="app">
        <ProductDisplay product={this.props.product} />
      </div>
    )
  }
}

export default App;