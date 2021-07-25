import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import "./qut.css"







const Chats = (props) => (

  
  <tr>
    <td>{props.chat.name}</td>
    
     <td><img className="img1" src = {props.chat.imagurl} /></td>
     <td>{props.chat.designtype}</td>
    <td>{props.chat.description}</td>
    {/* <td><Button variant="danger" href="#" onClick={() => { props.deleteChat(props.chat._id) }} >Delete</Button></td> */}

    
   
   </tr>
)

  export default class ChatsList extends Component {

    constructor(props){
      super(props);
      this.state={
        name:'',             
        designtype:'',
        imagurl:'',
        description:'',
        chats:[]


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/cdesign/')
      .then(response => {

        console.log(response.data);
        this.setState({ chats: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
      deleteChat(id) {
    axios.delete('http://localhost:8080/cdesign/'+id)
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
          window.location = "/admincdesign";
      }
      
      
      
      
      });

    // this.setState({
    //   digitals: this.state.digitals.filter(el => el._id !== id)
    // })
  }


  
  chatsList() {
    

    return this.state.chats.map((chat) => {
      return (
        <Chats
          chat={chat}
          deleteChat={this.deleteChat}
          key={chat._id}
        />
      );
    });
    
  }


  render() {
    
    return (
      <div>
        
        <h3>Desing Details</h3>
        <Table striped bordered hover variant="dark" className="table">
          <thead className="thead-light">
            <tr>
            <th>Name</th>
              <th>Image</th>
              <th>Design Type</th>
              <th>Description</th>
             
             
               </tr>
          </thead>
          <tbody>
            { this.chatsList() }
          </tbody>
        </Table>
      </div>
    )
  }
}

