import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
const ProductList=()=>{
      const [product,setproduct]=useState([]);
      const [key,setkey]=useState("");
      useEffect(()=>{
            getProduct();
      },[])
      const search=async(event)=>{
             let key=event.target.value;
             if(key){
            let result=await fetch(`http://127.0.0.1:5000/search/${key}`);
            result= await result.json();
            if(result){
            setproduct(result);
            }
             }else getProduct();
                 
           }
               const getProduct=async()=>{

                let result=await fetch(`http://127.0.0.1:5000/product_list`);
                result= await result.json();
                setproduct(result);
                     
               }
               const delete_product=async(id)=>{
               await fetch(`http://127.0.0.1:5000/product_list/${id}`,{
                         method:'Delete'

               });
                   //result=await result.json();
                   //setproduct(result);
                   console.log("deleted")
                   getProduct();
               }
    return (
             <div className="product-list">
              <h2 className="heading">ProductList</h2>
              <input type="text" className="search-box" placeholder="Search Products" onChange={search}/>
              <ul>
               <li>S.No</li>
               <li>Name</li>
               <li>Price</li>
               <li>Category</li>
               <li>Company</li>
               <li>Delete</li>

              </ul>
             
                {
               product.length>0? product.map((item,index)=>
                  
               <ul
                  key={item._id}>
                 <li>{index+1}</li>
                 <li>{item.name}</li>
                 <li>{item.price}</li>
                 <li>{item.category}</li>
                 <li>{item.company}</li>
                 <li > {product.length>1?<button onClick={()=>delete_product(item._id)}>delete</button>:""}
                 <Link  to={"/update/"+item._id}>Update</Link></li>
               </ul>
                 
               ):<h1>No Result Found</h1>
                }
            
            

             </div>)
}
export default ProductList;