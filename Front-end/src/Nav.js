import { useEffect } from 'react';
import './App.css';
import {Link,useNavigate}from 'react-router-dom';
function Nav(){
       const auth =localStorage.getItem('user');
       const navigate=useNavigate();
       const logout=()=>{
       localStorage.clear();
       navigate('/signup');
       }
      return (

     <div className='App'>
           <img alt="logo" 
           className='logo'
           src='https://cdn3.vectorstock.com/i/1000x1000/95/32/online-shop-logo-ecommerce-logo-design-vector-32009532.jpg'/>
            {
            auth? <ul className="nav-ul"> 
            <>   
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link  onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
            </>
            </ul>:
           
           <ul className="nav-ul nav-right"> 
            
            
            <li><Link to='/login'>Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            
            

            </ul>
}
            </div>
     
 );
}
export default Nav;