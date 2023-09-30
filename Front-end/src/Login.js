import React,{useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
const Login=()=>{
       const [email,setEmail]=useState("");
       const [password,setPassword]=useState("");
        const navigate=useNavigate();

        useEffect(()=>{
               let auth =localStorage.getItem('user');
               if(auth){
                  navigate('/');
               }
        })
  const handelLogin=async()=>{
       //console.log("email,password",email,password);
       let result=await fetch('http://127.0.0.1:5000/login',{
               method:'post',
               body:JSON.stringify({email,password}),
               headers:{
                'Content-Type':'application/json'
               },
       });
       result=await result.json();
        console.log(result);
      if(result.email){
         localStorage.setItem("user",JSON.stringify(result));
         navigate('/');
      }else{
                   alert("no user exits");
      }
       }
    return (
         
    <div className='login'>

   
     <input className='inputBox'    type='text'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
     <input className='inputBox'    type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
     <button onClick={handelLogin}   className="appButton"  type='button'>Login</button>
   </div>
    )
}
export default Login;