import React from 'react'

import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup,} from 'react-bootstrap';


import Messages from "./newMessage/message"
import QuotationTable from "./QuotationTable/QuotationTable"
import ChatTable from "./chatTable/chattable"


import './chat.css'

function Chat() {
    const [modalShow, setModalShow] = React.useState(false);

    
    return (
        <div className ="main_part">
            <div className ="side_nav">
                <div className = "sideviwe">
                    <ul>
                     
                    </ul>
                </div>
                
            </div>
            <div className="contain">
                  <div className = "odertable">
                        <QuotationTable /><br />
                        
                    </div>
            </div>
            
        </div>
    )
}

export default Chat
