import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useSelector } from "react-redux";
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
        <li className ="re_li"><Link to="/cart" className="cart__link">Cart</Link></li>
        <li className ="re_li"><Link to="/login" className="cart__link">Login </Link> </li> 
        <li className ="re_li"><Link to="/register" className="cart__link">Register</Link> </li> 
       </ul>
    </div>
      </nav>
    );
  }
}