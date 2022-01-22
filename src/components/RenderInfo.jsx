import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormReview from './FormReview';

export default class RenderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {},
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  handleChange = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
    const info = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const obj = await info.json();
    this.setState({ information: obj });
  };

  render() {
    const { information } = this.state;
    const { getProduct } = this.props;
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>{ information.name }</h1>
        <h2 data-testid="product-detail-name">{ information.title }</h2>
        <h2>{ information.price }</h2>
        <img src={ information.thumbnail } alt={ information.title } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => getProduct(information) }
        >
          Adicionar ao Carrinho
        </button>
        <FormReview />
      </div>
    );
  }
}

RenderInfo.propTypes = {
  match: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  getProduct: PropTypes.string.isRequired,
};
