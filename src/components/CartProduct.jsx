import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProduct extends Component {
  constructor() {
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
  }

  render() {
    const { produto, index } = this.props;
    const { quantidade } = this.state;
    return (
      <div key={ index }>
        <p data-testid="shopping-cart-product-name">{produto.title}</p>
        <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>{ produto.price }</p>
        <button
          type="button"
          onClick={ () => this.removeItemCart() }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.addItemCart() }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default CartProduct;
