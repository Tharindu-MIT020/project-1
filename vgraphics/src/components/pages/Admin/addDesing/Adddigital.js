import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, } from 'mdbreact';
import { Link } from 'react-router-dom';
import './Cdesign.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';


const FormPage = () => {
return (
  
    <div>
      <img className="img11" src="./img/add image.jpg"></img>
      
    <div className="size">
     <div>
  <div>
     {/* <MDBCol md="10"> */}
       <form className="btcenter"> 
        <p className="text-center">Add Digital Design</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Productcode
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
         Description
        </label>
        <br />
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Price (Rs.)
        </label>
        <br />
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
         <br />
         <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Image Link
        </label>
        <br />
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
         <br />
      
        <div className="text-center mt-4">
                  <MDBBtn className="bts" color="warning" outline type="submit">
                    Submit
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
               
              </form>

            
           
          </div>
        </div> 
        </div>
         </div>
      );
    };

    export default FormPage;