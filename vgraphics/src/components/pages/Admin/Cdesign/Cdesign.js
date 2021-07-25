import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, } from 'mdbreact';
import './Cdesign.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';


const FormPage = () => {

    const history = useHistory()
    const [proofcod,setProofcod] = useState("")
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    
    useEffect(()=>{
       if(url){
        fetch("http://localhost:8080/proof/add",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                proofcod,                
                imagurl:url,
                
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.warn){
              toast(data.warn)
           }
           else{
               toast(data.warns)
               history.push('/admin')
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
          console.log(data.url)
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

      }
   

      




return (
  
    <div>
      <img className="img11" src="./img/bc-2.jpeg"></img>
      
    <div className="size">
     <div>
  <div>
     {/* <MDBCol md="10"> */}
       <form className="btcenter"> 
        <p className="text-center">Proof</p>
        <label className="label2">
          Proof cod
        </label>
        <input 
        type="text" id="defaultFormContactNameEx" 
        className="form-control"
        value={proofcod}
        onChange={(e)=>setProofcod(e.target.value)}
        />
        <br />
          <label htmlFor="defaultFormContactSubjectEx" className="label2">
          File
        </label>
        <br />

           <input 
           type="file" 
           class="custom-file-input" 
           name="image" 
           onChange={(e)=>setImage(e.target.files[0])} 
           />
         <br />
         <br />      
       
        <div className="text-center mt-4">
                  <MDBBtn className="bts" color="warning" onClick={()=>postDetails()}>
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