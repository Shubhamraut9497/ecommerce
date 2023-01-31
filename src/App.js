import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
// import Products from './components/Products'
import About from '../src/RouterProject/About'
import Contact from '../src/RouterProject/Contact'
import Home from '../src/RouterProject/Home'
import Error from './RouterProject/Error'
import ProductDetails from '../src/RouterProject/ProductDetails'
// import Products from './components/Products'
import './App.css'

function App() {
  return (
    <>
    <div className="App">
     <h1 style={{backgroundColor:'black',color:'white',fontSize:'40px',borderRadius:'30px'}}><span style={{color:'royalblue'}}>U</span>niquic<span style={{color:'red'}}>K</span> Products</h1>
     
     {/* <Products/> */}
     
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/contact"  element={<Contact/> } />
        <Route path="/about"  element={<About/> } />
        <Route path="*" element ={<Error />}/>
        <Route path="/product/:id" element={<ProductDetails/>} />
     </Routes>

    </div>
    </>
  );
}

export default App;
