import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import "./qut.css"


const Chats = (props) => (
 <tr>
    <td>{props.chat.createdAt}</td>
    <td>{props.chat.name}</td>
    <td>Rs. {props.chat.price}</td>
    <td>{props.chat.method}</td>   
   </tr>
   
)



  export default class ChatsList extends Component {

    constructor(props){
      super(props);
      this.state={
        name:'',
        price:'',
        method:'',
        images:'',
        createdAt:'',
        chats:[]


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/makepayment/')
      .then(response => {

        console.log(response.data);
        this.setState({ chats: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
      deleteChat(id) {
    axios.delete('http://localhost:8080/makepayment/'+id)
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
          window.location = "/adminchat";
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
      <div className ="print">
        
        <h3>Payment</h3>
        <Table striped bordered hover  className="table">
          <thead className="thead-light">
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Profit</th>
              <th>method</th>
             
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
