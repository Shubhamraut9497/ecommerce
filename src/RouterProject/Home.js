import React, { useEffect, useState } from 'react'
// import {BrowserRouter as Router,Routes,Route, json} from "react-router-dom"
import Product from './Product';

function Home() {
   
    const url = "https://fakestoreapi.com/products"
    const [api,setApi] = useState([]);
    let [loading,setLoading]=useState(false);
    useEffect(()=>{

      async  function getData(){
        try{
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false)
            setApi(data);
       
        }
        catch(err){
            console.log(err)
        }
      }
      getData();
      

    },[])
    
    if(loading){
        <h1>...Loading</h1>
    }
  return (
    <>
   
    {
        api.map((ele)=>{
          return <Product item={ele} key={ele.id} />
        })
    }

    </>
  )
}

export default Home