import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';
import jwtDecode from "jwt-decode";



import "./navbar.css";
import { useSelector } from "react-redux";

 const jwt = localStorage.getItem("token");
//  let type = jwtDecode(jwt).type;
let type
 
 




 function logout(){
   localStorage.clear()
   window.location = '/';
 }

export default class Navbar extends Component {


 
  render() {
    return (
      

      <nav className="navbar navbar-dark bg-dark navbar-expand-lg flex-column flex-md-row bd-navbar">
       
        <div className="navbar">
         
        <ul>
            <li><img className="navimg" src='img/white.png' alt='logo' /></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><Link to="/digital">Digital</Link></li>
            <li><Link to="/vcard">V-Card</Link></li>
            <li><Link to="/offset">Offset</Link></li>
            <li><Link to="/prices">Price List</Link></li>
        </ul>
        <ul>
          
          {jwt?
            
            (
              type = jwtDecode(jwt).type,
              type === "user"?
              
              (
                <>
             
                  <li className ="re_li"><Link to="/cart" className="cart__link">Cart</Link></li>
                <DropdownButton variant="outline-primary" as={ButtonGroup} title="user" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                <Dropdown.Item eventKey="2">Notification</Dropdown.Item>
                  <Dropdown.Item eventKey="3" onClick={logout}>Log out</Dropdown.Item>
                </DropdownButton>
                </>

              ):(
                <>
                <li className ="re_li"><Link to="/admin" className="cart__link">Admin Dashbord</Link></li>
                 <DropdownButton variant="outline-primary" as={ButtonGroup} title="user" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                <Dropdown.Item eventKey="2">Notification</Dropdown.Item>
                  <Dropdown.Item eventKey="3" onClick={logout}>Log out</Dropdown.Item>
                </DropdownButton>
                </>
              )
              
              
             ):
             (
              <>
             <li className ="re_li"><Link to="/login" className="cart__link">Login </Link> </li> 
             <li className ="re_li"><Link to="/register" className="cart__link">Register</Link> </li> 
             </>
             )

        }
                     
       </ul>
       {/* <ul>
         {decode? 
         (
           <>
           <li className ="re_li"><Link to="/cart" className="cart__link">Cart</Link></li>
             <DropdownButton variant="outline-primary" as={ButtonGroup} title="user" id="bg-vertical-dropdown-1">
             <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
             <Dropdown.Item eventKey="2">Notification</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={logout}>Log out</Dropdown.Item>
             </DropdownButton>
           </>

         ):
         (
           <>
           <DropdownButton variant="outline-primary" as={ButtonGroup} title="user" id="bg-vertical-dropdown-1">
             <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
             <Dropdown.Item eventKey="2">Notification</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={logout}>Log out</Dropdown.Item>
             </DropdownButton>
           </>

         )
         }
       </ul> */}

    </div>
      </nav>
    );
  }
}