import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Offsets = (props) => (

  
  <tr>
    <td>{props.offset.Productcode}</td>
    <td>{props.offset.Description}</td>
    <td>{props.offset.Price}</td>
    <td>{props.offset.Imguri}</td>
    <td><Button variant="danger" href="#" onClick={() => { props.deleteOffset(props.offset._id) }}>Delete</Button></td>
    </tr>
)

  export default class OffsetsList extends Component {



   
    constructor(props){
      super(props);
      this.state={

        Productcode:'',
        Description:'',
        Price:'',
        Imguri:'',
        offsets:[]
        


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/offset/')
      .then(response => {

        console.log(response.data);
        this.setState({ offsets: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
    deleteOffset(id) {
    axios.delete('http://localhost:8080/offset/'+id)
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

  
  offsetsList() {

    return this.state.offsets.map((offset) => {
      return (
        <Offsets
          offset={offset}
          deleteOffset={this.deleteOffset}
          key={offset._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Offset List</h3>
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
            { this.offsetsList() }
          </tbody>
        </Table>
      </div>
    )
  }
}

