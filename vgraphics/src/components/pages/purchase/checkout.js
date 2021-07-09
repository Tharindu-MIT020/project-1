import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, } from 'mdbreact';
import './checkout.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';


const FormPage = () => {
return (
  
    <div>
      <img className="img11" src="./img/checkout.jpg"></img>
      
    <div className="size">
     <div>
  <div>
     {/* <MDBCol md="10"> */}
       <form className="btcenter"> 
        <p className="text-center">Process To Checkout</p>
        <div className = "bankdetails">
        <p className = "btd">
          Bank Details <br />
        </p>
        <label className = "labld">
          Bank Name - commercial bank<br />
          Branch - Monaragala<br />
          Name - V-Graphics<br />
          No - 1254986572<br />
        </label>
        </div>
        {/* <input type="text" id="defaultFormContactNameEx" className="form-control" /> */}
        <br />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
         payment method
        </label>
        <br />
            <select class="browser-default-custom-select">
              <option selected>Select payment method</option>
              <option value="1">Online Payment</option>
              <option value="2">Bank Deposit</option>
              <option value="3">Paypal</option>
             </select>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          File
        </label>
        <br />

      
           <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
         <br />
         <br />
      
        <div className="text-center mt-4">
                  <MDBBtn className="bts" color="warning" outline type="submit">
                    Submit
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                     <MDBBtn className="bts" color="warning" outline type="submit">
                    Paypal
                    <MDBIcon fab icon="cc-paypal" className="ml-2" />
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