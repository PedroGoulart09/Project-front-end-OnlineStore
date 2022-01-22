import React, { Component } from 'react';

class FormReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setEmail: '',
      rate: '',
      setOption: '',
    };
  }

   handleChange = ({ name, value }) => {
     this.setState({
       [name]: value,
     });
   }

   clickStorages = () => {
     const { setEmail, rate, setOption } = this.state;

     localStorage.setItem('email', setEmail);
     localStorage.setItem('name', rate);
     localStorage.setItem('option', setOption);
   }

   render() {
     const { setEmail, setOption } = this.state;

     return (
       <form>
         <input
           type="email"
           value={ setEmail }
           data-testid="product-detail-email"
           placeholder="Digite seu Email"
           name="setEmail"
           onChange={ ({ target }) => this.handleChange(target) }
         />
         <label htmlFor="ratenote">
           Avalie o Produto
           <label htmlFor="rate1">
             <input
               value="1"
               data-testid="1-rating"
               type="radio"
               id="rate1"
               name="rate"
               onClick={ ({ target }) => this.handleChange(target) }
             />
             1
           </label>
           <label htmlFor="rate2">
             <input
               value="2"
               data-testid="2-rating"
               type="radio"
               id="rate2"
               name="rate"
               onClick={ ({ target }) => this.handleChange(target) }
             />
             2
           </label>
           <label htmlFor="rate3">
             <input
               value="3"
               data-testid="3-rating"
               type="radio"
               id="rate3"
               name="rate"
               onClick={ ({ target }) => this.handleChange(target) }
             />
             3
           </label>
           <label htmlFor="rate4">
             <input
               value="4"
               data-testid="4-rating"
               type="radio"
               id="rate4"
               name="rate"
               onClick={ ({ target }) => this.handleChange(target) }
             />
             4
           </label>
           <label htmlFor="rate5">
             <input
               value="5"
               data-testid="5-rating"
               type="radio"
               id="rate5"
               name="rate"
               onClick={ ({ target }) => this.handleChange(target) }
             />
             5
           </label>
         </label>
         <textarea
           value={ setOption }
           placeholder="mensagem (opcional)"
           name="setOption"
           data-testid="product-detail-evaluation"
           onChange={ ({ target }) => this.handleChange(target) }
         />
         <button
           type="button"
           data-testid="submit-review-btn"
           onClick={ () => this.clickStorages() }
         >
           Avaliar
         </button>
         <p>{localStorage.getItem('email')}</p>
         <p>{localStorage.getItem('name')}</p>
         <p>{localStorage.getItem('option')}</p>
       </form>
     );
   }
}

export default FormReview;
