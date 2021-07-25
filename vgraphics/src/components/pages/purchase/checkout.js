import React, { useState, useEffect } from "react";
import {  MDBBtn, MDBIcon, } from 'mdbreact';
import './checkout.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";



const FormPage = () => {
    const history = useHistory()
    const [price,setPrice] = useState("")
    const [method,setMethod] = useState("")
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    const jwt = localStorage.getItem("token");
    let username = jwtDecode(jwt).username;

    useEffect(()=>{
       if(url){
        fetch("http://localhost:8080/makepayment/add",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                name:username,
                price,
                method,
                images:url,
                
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.warn){
              toast(data.warn)
           }
           else{
               toast(data.warns)
               history.push('/')
           }
        })
        
        .catch(err=>{
            console.log(err)
        })
    }
    },[url])

   const postDetails = ()=>{
       const data = new FormData()
       data.append("file",image)
       data.append("upload_preset","c-design")
       data.append("cloud_name","cnq")
       fetch("https://api.cloudinary.com/v1_1/drwrgosgj/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then(data=>{
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

      }

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
         Price
        </label>
        <input 
        type="text" 
        class="custom-file-input" 
        placeholder=" 75% of the total amount or the entire amount has to be paid" 
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        
        /><br />
        <label className="note">full amount can be change</label>
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
         payment method
        </label>
        <br />
            <input 
            type="text" 
            class="custom-file-input" 
            placeholder=" Online Transaction / Bankpament" 
            value={method}
            onChange={(e)=>setMethod(e.target.value)}
        
        />
        <br /><br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          File
        </label>
        <br />
           <input 
           type="file" 
           class="custom-file-input" 
           id="inputGroupFile01" 
           name="image" 
           onChange={(e)=>setImage(e.target.files[0])}
           
           />
         <br />
         <br />
      
        <div className="text-center mt-4">
                  <MDBBtn className="bts" color="warning" onClick={()=>postDetails()}>
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