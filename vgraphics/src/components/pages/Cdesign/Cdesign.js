import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './Cdesign.css'


const FormPage = () => {
return (
    <div>
<MDBContainer className="size">
     <div>
  <MDBRow>
     {/* <MDBCol md="10"> */}
       <form className="btcenter"> 
        <p className="h4 text-center mb-4">For your design</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
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
            
            {/* </MDBCol>
         */}
          </MDBRow>
        </div> 
        </MDBContainer>
         </div>
      );
    };

    export default FormPage;