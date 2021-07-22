import React from 'react'
import './adminview1.css'
import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup } from 'react-bootstrap';


import Oderdetails from "../Admin/order detais/oderdetails";
import MyVerticallyCenteredModal from "./addDigital/Adddigital"
import AddVcard from "./addVcard/addfileVcard"
import AddOffset from "./addOffset/addfileOffset"
import Digitaltable from "./digitalTable/digitalTable"


function AdminView1() {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
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
                    <Button variant="outline-light">Add Design</Button>

                    <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={() => setModalShow1(true)}>Digital</Dropdown.Item>
                        <MyVerticallyCenteredModal
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                        />
                        <Dropdown.Item  onClick={() => setModalShow2(true)}>Offset</Dropdown.Item>
                        {/* <AddOffset
                         show={modalShow2}
                            onHide={() => setModalShow2(false)}
                        /> */}
                        <Dropdown.Item onClick={() => setModalShow3(true)}>Vcard</Dropdown.Item>
                        {/* <AddVcard show={modalShow3}
                            onHide={() => setModalShow3(false)}
                        /> */}
                     </Dropdown.Menu>
                    </Dropdown>
                    </ul>
                </div>
                
            </div>
            <div className="contain">
                    <div className = "main_details">
                        <div className="order">
                            <label>Order</label>
                            <span>950+</span>

                        </div>
                        <div className="Customer">
                            <label>Active Customer</label>
                            <span>20+</span>
                            
                        </div>
                        <div className="Profit">
                            <label>Profit</label>
                            <span>Rs 25000</span>
                            
                        </div>


                    </div>
                    <div className = "odertable">
                        {/* <Digitaltable /> */}
                    </div>
            </div>
            
        </div>
    )
}

export default AdminView1
