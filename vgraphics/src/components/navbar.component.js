import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useSelector } from "react-redux";



export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><Link to="/digital">Digital</Link></li>
            <li><Link to="/vcard">V-Card</Link></li>
            <li><a href="#">Offset</a></li>
            <li><Link to="/prices">Price List</Link></li>
        </ul>
              <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* <i className="fas fa-shopping-cart"></i> */}
            <span>
              Cart 
              
            </span>
          </Link>
        </li>
        </ul>
    </div>
      </nav>
    );
  }
}