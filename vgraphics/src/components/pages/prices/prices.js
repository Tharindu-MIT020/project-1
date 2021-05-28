import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route} from "react-router-dom";


const Prices = props => (
  <tr>
    <td>{props.prices.material}</td>
    <td>{props.prices.size}</td>
    <td>{props.prices.quality}</td>
    <td>{props.prices.price}</td>
    </tr>
)

  export default class PricesList extends Component {
  
  componentDidMount() {
    axios.get('http://localhost:8080/prices/')
      .then(response => {
        this.setState({ prices: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  
  pricesList() {
  this.state.prices.map(Prices)
    
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
            { this.pricesList }
          </tbody>
        </table>
      </div>
    )
  }
}