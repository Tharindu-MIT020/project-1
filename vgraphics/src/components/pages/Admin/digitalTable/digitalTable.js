import React, { Component } from 'react';
import axios from 'axios';



const Digitals = (props) => (

  
  <tr>
    <td>{props.digital.Productcode}</td>
    <td>{props.digital.Description}</td>
    <td>{props.digital.Price}</td>
    <td>{props.digital.Imguri}</td>
    <td><a href="#" onClick={() => { props.deleteDigitals(props.digital._id) }}>delete</a></td>
    </tr>
)

  export default class DigitalsList extends Component {



   
    constructor(props){
      super(props);
      this.state={

        Productcode:'',
        Description:'',
        Price:'',
        Imguri:'',
        digitals:[]
        


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/digital/')
      .then(response => {

        console.log(response.data);
        this.setState({ digitals: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
    deleteDigitals(id) {
    axios.delete('http://localhost:8080/digital/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      digitals: this.state.digitals.filter(el => el._id !== id)
    })
  }

  
  digitalsList() {

    return this.state.digitals.map((digital) => {
      return (
        <Digitals
          digital={digital}
          deleteDigitals={this.deleteDigitals}
          key={digital._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Digital List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Productcode</th>
              <th>Description</th>
              <th>Price</th>
              <th>Imguri</th>
              </tr>
          </thead>
          <tbody>
            { this.digitalsList() }
          </tbody>
        </table>
      </div>
    )
  }
}

