
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../button.component";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './home.css';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';


function Home(){
    return(

   <div>
    <div className="banner">
        
        <div style = {{paddingTop: "22%"}}>
        <div >
        <Link to="/register"> <button className="home-input-btn">Register</button></Link>
        <Link to="/login"><button className="home-input-btn2">login</button></Link>
        </div>
        </div>
    </div>
    <div className="home_bt">

    </div>
    </div>
        
        

    );
}

export default Home;