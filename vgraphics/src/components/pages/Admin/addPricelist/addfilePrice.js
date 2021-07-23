import React from 'react'
import {Modal, Button, ButtonGroup } from 'react-bootstrap';
import { MDBBtn, MDBIcon, } from 'mdbreact';
import './Cdesign.css';
import useLog from "./AddPrice"

const AddVcard = ( submitLogin) => {
    const { handleChange, handleSubmit, values} = useLog(
    submitLogin,
  );
  return (
    <Modal 
        
      {...submitLogin}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
        </Modal.Header> */}
         <Modal.Body>
        <div>
       
       <form className="btcenter" onSubmit={handleSubmit} noValidate> 
        <p className="text-center">Add Prices</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Material
        </label>
        <input 
            name='material'
            value={values.material}
            onChange={handleChange} 
            type="text" id="defaultFormContactNameEx" 
            className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
         Size
        </label>
        <br />
        <input 
            name='size'
            value={values.size}
            onChange={handleChange} 
            type="text" id="defaultFormContactMessageEx" 
            className="form-control" rows="3" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Qulaity
        </label>
        <br />
        <input 
            name='quality'
            value={values.quality}
            onChange={handleChange}
            type="text" id="defaultFormContactNameEx" 
            className="form-control" />
         <br />
         <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Price
        </label>
        <br />
        <input 
            name='price'
            value={values.price}
            onChange={handleChange}
            type="text" id="defaultFormContactNameEx" className="form-control" />
         <br />
      
                <div className="text-center mt-4">
                  <MDBBtn className="bts" color="warning" outline type="submit">
                    Submit
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
               
        </form>

            
           
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default AddVcard

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);