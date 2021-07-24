import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, } from 'mdbreact';
import './Cdesign.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';


const FormPage = () => {
return (
  
    <div>
      <img className="img11" src="./img/bc-2.jpeg"></img>
      
    <div className="size">
     <div>
  <div>
     {/* <MDBCol md="10"> */}
       <form className="btcenter"> 
        <p className="text-center">FOR YOUR DESIGN</p>
        <label className="label2">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="label2">
         Design type
        </label>
        <br />
            <select class="browser-default-custom-select">
              <option selected>Open this select menu</option>
              <option value="1">Digital</option>
              <option value="2">Offset</option>
              <option value="3">V-Card</option>
              <option value="4">Other</option>
            </select>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="label2">
          File
        </label>
        <br />

      
           <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
         <br />
         <br />
        <label htmlFor="defaultFormContactMessageEx" className="label2">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
      
        <div className="text-center mt-4">
                  <MDBBtn className="bts" color="warning" outline type="submit">
                    Send
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