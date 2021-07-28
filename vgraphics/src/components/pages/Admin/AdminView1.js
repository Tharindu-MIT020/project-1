import React from 'react'
import './adminview1.css'
import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup,} from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';


import Oderdetails from "../Admin/order detais/oderdetails";
import MyVerticallyCenteredModal from "./addDigital/Adddigital"
import AddVcard from "./addVcard/addfileVcard"
import AddOffset from "./addOffset/addfileOffset"
import Digitaltable from "./digitalTable/digitalTable"
import Offsettable from "./offsetTable/OffsetTable"
import Vcardtable from "./vcardTable/vacrdlTable"
import Pricetable from "./priceTable/priceTable"
import Test from "./addDigital/adddigital1"
import Addprice from "./addPricelist/addfilePrice"
import Chats from "./Chat/Adminchat"


function AdminView1() {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    
    return (
        <div className ="main_part">
            <div className ="side_nav">
                <div className = "sideviwe">
                    <ul>
                     <Link to="/adminprint">
                    <Button className="Button2"  variant="outline-light">Print Doc</Button> </Link><br />
                    <Link to="/adminproof">
                    <Button className="Button2"  variant="outline-light">Proof Upload</Button> </Link><br />
                    <Link to="/adminpaymet">
                    <Button className="Button2"  variant="outline-light">Payment</Button> </Link><br />
                    <Link to="/admincdesign">
                    <Button className="Button2"  variant="outline-light">Quotation</Button> </Link>
                    
                     <br />
                    <Link to="/adminchat">
                    <Button className="Button2"  variant="outline-light">Chat</Button> </Link><br />
                     
                    
                    <Dropdown className="Button2"  as={ButtonGroup}>
                    <Button variant="outline-light">Add Design</Button>

                    <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={() => setModalShow1(true)}>Digital</Dropdown.Item>
                        <Test
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                        />
                        <Dropdown.Item  onClick={() => setModalShow2(true)} >Offset</Dropdown.Item>
                        <AddOffset
                         show={modalShow2}
                            onHide={() => setModalShow2(false)}
                        />
                        <Dropdown.Item onClick={() => setModalShow3(true)} >Vcard</Dropdown.Item>
                        <AddVcard show={modalShow3}
                            onHide={() => setModalShow3(false)}
                        />
                     </Dropdown.Menu>
                    </Dropdown>
                    <br />
                    <Button className="Button2" onClick={() => setModalShow4(true)} variant="outline-light">Price Add</Button>
                      <Addprice show={modalShow4}
                        onHide={() => setModalShow4(false)}
                        />
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
                        <Digitaltable />
                        <br />
                     <Divider/> 
                        <Offsettable /> <br />
                    <Divider />
                        <Vcardtable /> <br />
                    <Divider />
                        <Pricetable />
                    </div>
            </div>
            
        </div>
    )
}

export default AdminView1
