
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
        <Link to="/digital">
        <div className="point">
            <img className="image_size" src="img/Mesa de trabajo 1.png"></img>
            <label className="lab">Digital</label>
        </div>
        </Link>

        <Link to="/vcard">
        <div className="point">
            <img className="image_size" src="img/Artboard 1.png"></img>
            <label className="lab">V-Card</label>
        </div>
        </Link>

        <Link to="/offset">
        <div className="point">
            <img className="image_size" src="img/Artboard 2.png"></img>
            <label className="lab">Offset</label>
        </div>
        </Link>

        <Link to="/yourdesign">
        <div className="point">
            <img className="image_size" src="img/digital.png"></img>
            <label className="lab">Your Design</label>
        </div>
        </Link>
       
        

    </div>
    </div>
        
        

    );
}

export default Home;