import React, { useEffect } from "react";
import { useState } from "react";
import {useParams,useNavigate} from 'react-router-dom'


const UpdateProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error,seterror]=useState(false);
    const param=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
          
        console.log(param);
        getProductDetails();

    },[]);
    const getProductDetails=async()=>{
         let result=await fetch(`http://127.0.0.1:5000/product_list/${param.id}`);
         result=await result.json();
         setName(result.name)
         setPrice(result.price)
         setCategory(result.category)
         setCompany(result.company)
         await fetch(`http://127.0.0.1:5000/product_list/${param.id}`,{
            method:'Delete'
         })
    }

    const updateproduct=async ()=>{

        console.log(name,price,category,company);
        if(!name||!price||!category||!company){
            seterror(true);
            return false;
        }
        let user_id=localStorage.getItem("user")._id;

        let result =await fetch('http://127.0.0.1:5000/addProduct',{
              
            method:'POST',
            body:JSON.stringify({name,price,category,user_id,company}),
            headers:{
                'Content-Type':'application/json'
            }


        });
        //result=await result.json();
        navigate('/');
       // console.log(result);
    }
    
          return (

                     <div className="register">
                    <h2 className="heading">UpdateProduct</h2> 
     <input className='inputBox'    type='text'  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name'/>
     {error && !name &&<span className="invalid-input"> Enter valid name</span>}
     <input className='inputBox'    type='text'  value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price'/>
     {error && !price &&<span className="invalid-input"> Enter valid price</span>}
     <input className='inputBox'    type='text'  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product category'/>
     {error && !category &&<span className="invalid-input"> Enter valid category</span>}
     <input className='inputBox'    type='text'  value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company'/>
     {error && !company &&<span className="invalid-input"> Enter valid company</span>}
     <button  className="appButton" onClick={updateproduct} type='button'>UpdateProduct</button>
   </div>
             )
            }
export default UpdateProduct;