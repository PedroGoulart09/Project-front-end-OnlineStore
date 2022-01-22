import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import RenderInfo from './components/RenderInfo';
import Main from './components/Main';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      addProducts: [],
    };
  }

  getProduct = (product) => {
    this.setState((prevState) => ({
      addProducts: [...prevState.addProducts, product],
    }));
  };

  render() {
    const { addProducts } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Link to="/cart" data-testid="shopping-cart-button">
            Carrinho
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Main getProduct={ this.getProduct } /> }
            />
            <Route
              exact
              path="/cart"
              render={ () => <Cart products={ addProducts } /> }
            />
            <Route
              exact
              path="/renderinfo/:id"
              render={ (props) => (
                <RenderInfo { ...props } getProduct={ this.getProduct } />
              ) }
            />
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}
