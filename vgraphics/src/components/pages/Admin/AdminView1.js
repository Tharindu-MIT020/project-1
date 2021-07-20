import React from 'react'
import './adminview1.css'
import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup } from 'react-bootstrap';


function AdminView1() {
    return (
        <div className ="main_part">
            <div className ="side_nav">
                <div className = "sideviwe">
                    <ul>
                    <li><Link to="/admin">Dashbord</Link></li>
                    <li><Link to="/">Notification</Link></li>
                    <li><Link to="/">Chat</Link></li>
                    <li><Link to="/">Order</Link></li>
                    <li><Link to="/">quotation</Link></li>
                    
                    <Dropdown as={ButtonGroup}>
                    <Button variant="outline-light">Add Desing</Button>

                    <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Digital</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Offset</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Vcard</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </ul>
                </div>
                
            </div>
            <div className="contain">
                    <div className = "main_details">
                        
                    </div>
            </div>
            
        </div>
    )
}

export default AdminView1
