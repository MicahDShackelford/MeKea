import React from 'react';
import styled from 'styled-components';
import ProductDisplay from './ProductDisplay';

const UniversalStyle = styled.div`
  font-family: 'Noto Sans';
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  *{
    margin: 0.25em 0;
  }
`

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
    let pid = new URLSearchParams(document.location.search.substring(1))   .get('pid') || 1;
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
      <UniversalStyle>
        <ProductDisplay product={this.state.product} />
      </UniversalStyle>
    )
  }
}

export default App;
