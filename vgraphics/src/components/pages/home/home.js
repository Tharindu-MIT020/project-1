
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../button.component";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {Carousel} from 'react-bootstrap';
import './home.css';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';


function Home(){
    return(

   <div>
     <div>
            <Carousel fade>
                <Carousel.Item className="banner2">
                    <img
                    className="img05"
                    src="img/bground.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item> 
                   <Carousel.Item className="banner2">
                    <img
                    className="img05"
                    src="img/for you.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item> 
                  <Carousel.Item className="banner2">
                    <img
                    className="img05"
                    src="img/bc-2.jpeg"
                    alt="First slide"
                    />
                     <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item>  
                
                            
                     
            </Carousel>
        
        {/* <div style = {{paddingTop: "22%"}}>
        <div >
        <Link to="/register"> <button className="home-input-btn">Register</button></Link>
        <Link to="/login"><button className="home-input-btn2">login</button></Link>
        </div>
        </div> */}
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

        <Link to="/cdesign">
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