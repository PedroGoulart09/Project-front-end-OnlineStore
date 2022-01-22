import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
/* import { getProduct } from '../App'; */

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      products: [],
      id: '',
      search: '',
    };
  }

  componentDidMount() {
    this.category();
  }

  category = async () => {
    const categoryss = await api.getCategories();
    this.setState({
      category: categoryss,
    });
  };

  produts = async () => {
    const { id, search } = this.state;
    const URL = await api.getProductsFromCategoryAndQuery(id, search);
    this.setState({ products: [...URL.results] });
  };

  handleChange = ({ value }) => {
    console.log(value);
    this.setState(
      {
        search: value,
      },
      () => {
        this.produts(value);
      },
    );
  };

  click = ({ value }) => {
    this.setState(
      {
        id: value,
      },
      () => this.produts(),
    );
  };

  render() {
    const { category, products } = this.state;
    const { getProduct } = this.props;
    return (
      <div>
        <label htmlFor="query-input" data-testid="home-initial-message">
          <input
            type="text"
            name="search"
            data-testid="query-input"
            onChange={ ({ target }) => this.handleChange(target) }
          />
          <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.produts() }
        >
          Pesquisa
        </button>
        {/* lista de categorias */}
        <div>
          {category.map((categor) => (
            <div key={ categor.name }>
              <label data-testid="category" htmlFor="category">
                <input
                  type="radio"
                  name="radio"
                  value={ categor.id }
                  id="category"
                  onClick={ ({ target }) => this.click(target) }
                />
                { categor.name }
              </label>
              <h2 style={ { display: 'none' } }>{ categor.id }</h2>
            </div>
          ))}
        </div>
        {/*  lista de produtos  */}
        <div>
          { products.map((product) => (
            <div key={ product.id } data-testid="product">
              <h3>{ product.title }</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
              <Link
                data-testid="product-detail-link"
                to={ `/renderinfo/${product.id}` }
              >
                Mais Detalhes
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => getProduct(product) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  getProduct: PropTypes.string.isRequired,
};
