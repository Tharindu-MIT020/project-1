import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Digitals = (props) => (

  
  <tr>
    <td>{props.digital.Productcode}</td>
    <td>{props.digital.Description}</td>
    <td>{props.digital.Price}</td>
    <td>{props.digital.Imguri}</td>
    <td><Button variant="danger" href="#" onClick={() => { props.deleteDigital(props.digital._id) }}>Delete</Button></td>
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
    deleteDigital(id) {
    axios.delete('http://localhost:8080/digital/'+id)
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

  
  digitalsList() {

    return this.state.digitals.map((digital) => {
      return (
        <Digitals
          digital={digital}
          deleteDigital={this.deleteDigital}
          key={digital._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Digital List</h3>
        <Table striped bordered hover variant="dark" className="table">
          <thead className="thead-light">
            <tr>
              <th>Productcode</th>
              <th>Description</th>
              <th>Price (Rs.)</th>
              <th>Image URL</th>
              <th>Delete</th>
              </tr>
          </thead>
          <tbody>
            { this.digitalsList() }
          </tbody>
        </Table>
      </div>
    )
  }
}

