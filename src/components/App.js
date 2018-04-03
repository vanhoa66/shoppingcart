import React, { Component } from 'react';

import Title from './Title';
import ProductsContainer from './../containers/ProductsContainer';
import CartsContainer from './../containers/CartsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <ProductsContainer />
          <CartsContainer />
        </div >
      </div >
    );
  }
}

export default App;
