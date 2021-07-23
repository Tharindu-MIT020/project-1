import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Vcards = (props) => (

  
  <tr>
    <td>{props.vcard.Productcode}</td>
    <td>{props.vcard.Description}</td>
    <td>{props.vcard.Price}</td>
    <td>{props.vcard.Imguri}</td>
    <td><Button variant="danger" href="#" onClick={() => { props.deleteVcard(props.vcard._id) }}>Delete</Button></td>
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
        vcards:[]
        


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/vcard/')
      .then(response => {

        console.log(response.data);
        this.setState({ vcards: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
    deleteVcard(id) {
    axios.delete('http://localhost:8080/vcard/'+id)
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

  
  vcardsList() {

    return this.state.vcards.map((vcard) => {
      return (
        <Vcards
          vcard={vcard}
          deleteVcard={this.deleteVcard}
          key={vcard._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Vcard List</h3>
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
            { this.vcardsList() }
          </tbody>
        </Table>
      </div>
    )
  }
}

