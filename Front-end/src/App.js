import React from 'react';
import './App.css';
import Nav from'./Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';
import Login from './Login';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
  
         <div>
          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/update/:id' element={<UpdateProduct/>}/>
            <Route path='/profile' element={<h1>profile paroducts</h1>}/>
            <Route path='/logout' element={<h1>logout</h1>}/>
            </Route>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/login' element ={<Login/>}/>
           </Routes>
          
          </BrowserRouter>
         <Footer/>
         </div>
          
        
      
    
  );
}

export default App;
