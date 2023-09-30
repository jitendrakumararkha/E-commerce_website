import React from "react";
import { useState } from "react";


const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error,seterror]=useState(false);

    const addproduct=async ()=>{

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
        result=await result.json();
        console.log(result);
    }
    
          return (

                     <div className="register">
                    <h2 className="heading">AddProduct</h2> 
     <input className='inputBox'    type='text'  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name'/>
     {error && !name &&<span className="invalid-input"> Enter valid name</span>}
     <input className='inputBox'    type='text'  value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price'/>
     {error && !price &&<span className="invalid-input"> Enter valid price</span>}
     <input className='inputBox'    type='text'  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product category'/>
     {error && !category &&<span className="invalid-input"> Enter valid category</span>}
     <input className='inputBox'    type='text'  value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company'/>
     {error && !company &&<span className="invalid-input"> Enter valid company</span>}
     <button  className="appButton" onClick={addproduct} type='button'>AddProduct</button>
   </div>
             )
            }
export default AddProduct;