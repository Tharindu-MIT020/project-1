import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
  
  render() {
    return (
      <Router>
        <div class= "button" >
        <Link to="/register"> <button type="button">Register</button></Link>
        <button type="button">Login</button>
        </div>
    </Router>
    );
  }
}