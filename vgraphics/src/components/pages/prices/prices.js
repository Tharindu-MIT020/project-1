import React, { Component } from 'react';
import axios from 'axios';



const Prices = (props) => (

  
  <tr>
    <td>{props.price.material}</td>
    <td>{props.price.size}</td>
    <td>{props.price.quality}</td>
    <td>{props.price.price}</td>
    </tr>
)

  export default class PricesList extends Component {



   
    constructor(props){
      super(props);
      this.state={

        material:'',
        size:'',
        quality:'',
        prices:[]


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/price/')
      .then(response => {

        console.log(response.data);
        this.setState({ prices: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  
  pricesList() {

    return this.state.prices.map((price) => {
      return (
        <Prices
          price={price}
          // deleteCompany={this.deleteCompany}
          key={price._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Prices List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Material</th>
              <th>Size</th>
              <th>Qulaity</th>
              <th>Price</th>
              </tr>
          </thead>
          <tbody>
            { this.pricesList() }
          </tbody>
        </table>
      </div>
    )
  }
}

