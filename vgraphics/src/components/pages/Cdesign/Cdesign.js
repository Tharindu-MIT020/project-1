import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, } from 'mdbreact';
import './Cdesign.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';


const FormPage = () => {

    const history = useHistory()
    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [discription,setDiscription] = useState("")
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    
    useEffect(()=>{
       if(url){
        fetch("http://localhost:8080/cdesign/add",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                name,
                designtype:type,
                imagurl:url,
                description:discription
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
        <input 
        type="text" id="defaultFormContactNameEx" 
        className="form-control"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="label2">
         Design type
        </label>
        <br />
            <input 
            type="text" id="defaultFormContactNameEx" 
            className="form-control"
            value={type}
            onChange={(e)=>setType(e.target.value)}
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
       
        <label htmlFor="defaultFormContactMessageEx" className="label2">
          Your message
        </label>
        <textarea 
        type="text" 
        id="defaultFormContactMessageEx" 
        className="form-control" 
        rows="3"          
        value={discription}
        onChange={(e)=>setDiscription(e.target.value)}
        />
      
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