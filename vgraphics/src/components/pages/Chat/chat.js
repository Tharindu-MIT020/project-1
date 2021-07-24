import React from 'react'

import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup,} from 'react-bootstrap';


import Messages from "./newMessage/message"
import Chatlist from "./chat table/chattable"

import './chat.css'

function Chat() {
    const [modalShow, setModalShow] = React.useState(false);

    
    return (
        <div className ="main_part">
            <div className ="side_nav">
                <div className = "sideviwe">
                    <ul>
                     <Button className="Button2" onClick={() => setModalShow(true)} variant="outline-light">New Message</Button>
                      <Messages show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </ul>
                </div>
                
            </div>
            <div className="contain">
                  <div className = "odertable">
                        <Chatlist />
                    </div>
            </div>
            
        </div>
    )
}

export default Chat
