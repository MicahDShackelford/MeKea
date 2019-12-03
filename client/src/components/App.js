import React from 'react';
import ProductDisplay from './ProductDisplay';

const style = {
  universal: {
    'fontFamily': 'Noto Sans'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        deliverable: false,
        id: null,
        longDesc: null,
        name: null,
        options: [{name: null, options: [{name:null, imgUrl: null}]}],
        price: null,
        qtyAvailable: null,
        review: {stars: null, reviews: null},
        shortDesc: null
      }
    }
  }

  componentDidMount() {
    this.grabParams();
  }

  grabParams() {
    let pid = new URLSearchParams(document.location.search.substring(1)).get('pid');
    fetch(`http://127.0.0.1:3001/product/${pid}`)
      .then((res) => {
        return res.json();
      }).then((res) => {
        this.setState({
          product: res
        })
      })
  }

  render() {
    return (
      <div id="app" style={style.universal}>
        <ProductDisplay product={this.state.product} />
      </div>
    )
  }
}

export default App;
