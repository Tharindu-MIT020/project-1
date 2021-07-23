import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Prices = (props) => (

  
  <tr>
    <td>{props.price.material}</td>
    <td>{props.price.size}</td>
    <td>{props.price.quality}</td>
    <td>{props.price.price}</td>
    <td><Button variant="danger" href="#" onClick={() => { props.deletePrice(props.price._id) }}>Delete</Button></td>
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
    deletePrice(id) {
    axios.delete('http://localhost:8080/price/'+id)
      .then(response => { console.log(response.data)
      if(response.data.warns){
        toast (response.data.warns,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          window.location = "/admin";
      }
      
      
      
      
      });

    // this.setState({
    //   digitals: this.state.digitals.filter(el => el._id !== id)
    // })
  }

  
  pricesList() {

    return this.state.prices.map((price) => {
      return (
        <Prices
          price={price}
          deletePrice={this.deletePrice}
          key={price._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Price List</h3>
        <Table striped bordered hover variant="dark" className="table">
          <thead className="thead-light">
            <tr>
              <th>Material</th>
              <th>Size</th>
              <th>Qulaity</th>
              <th>Price</th>
              <th>Delete</th>
              </tr>
          </thead>
          <tbody>
            { this.pricesList() }
          </tbody>
        </Table>
      </div>
    )
  }
}

