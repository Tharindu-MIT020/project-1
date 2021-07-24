import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Chats = (props) => (

  
  <tr>
    <td>{props.chat.name}</td>
    <td>{props.chat.message}</td>
    <td>{props.chat.message}</td>
   </tr>
)

  export default class ChatsList extends Component {

    constructor(props){
      super(props);
      this.state={

        name:'',
        message:'',
        chats:[]


      };
    }
  
  componentDidMount() {
    axios.get('http://localhost:8080/chat/')
      .then(response => {

        console.log(response.data);
        this.setState({ chats: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  
  chatsList() {

    return this.state.chats.map((chat) => {
      return (
        <Chats
          chat={chat}
          key={chat._id}
        />
      );
    });
    
  }

  render() {
    return (
      <div>
        <h3>Chat</h3>
        <Table striped bordered hover variant="dark" className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Message</th>
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

