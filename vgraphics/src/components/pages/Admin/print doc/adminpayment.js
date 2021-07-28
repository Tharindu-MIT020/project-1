import React from 'react'

import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup,} from 'react-bootstrap';


import Example from "./print"
import ComponentToPrint from "./printProfit"

import './chat.css'

function Chat() {
    const [modalShow, setModalShow] = React.useState(false);

    
    return (
        <div className ="main_part">
            <div className ="side_nav">
                <div className = "sideviwe">
                    {/* <ul>
                     <Button className="Button2" onClick={() => setModalShow(true)} variant="outline-light">Reply</Button>
                      <Messages show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </ul> */}
                </div>
                
            </div>
            <div className="contain">
                  <div className = "odertable">
                        {/* <ComponentToPrint /> */}
                        <Example />
                 </div>
            </div>
            
        </div>
    )
}

export default Chat
