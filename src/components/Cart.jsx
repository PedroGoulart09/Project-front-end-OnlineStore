import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

export default class Cart extends Component {
  /* constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
  }

  addItemCart = () => {
    const { quantidade } = this.state;
    if (quantidade >= 0) {
      this.setState((prevState) => ({
        quantidade: prevState.quantidade + 1,
      }));
    }
  }

  removeItemCart = () => {
    const { quantidade } = this.state;
    if (quantidade > 0) {
      this.setState((prevState) => ({
        quantidade: prevState.quantidade - 1,
      }));
    }
  } */

  render() {
    const { products } = this.props;
    return (
      <div>
        <Link to="/">Home</Link>
        {products.length > 0 ? (
          products.map((produto, index) => (
            <CartProduct produto={ produto } key={ index } />
          ))
        ) : (
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.string.isRequired,
};
