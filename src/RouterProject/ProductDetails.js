import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
const ProductDetails=()=>{
    const params=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false)
    console.log("params",params);
    useEffect(()=>{
          setLoading(true);
          fetch(`https://fakestoreapi.com/products/${params.id}`).then((response)=>{
            return response.json();
          }).then((result)=>{
            setProduct(result)
            setLoading(false);
          })
    },[product])
    
    return (
        <>
        {loading===true ?<h1>Loading...</h1>:<></>}
        <div  id='productD'>
        <img src={product.image}  width={400} height={400} alt="img"/>
        <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'25px'}}>{product.title}</h1>
        <h1>$ {product.price}</h1>
        <p style={{fontSize:'20px'}}>{product.description}</p>
        </div>
        </div>
        </>
    )
}
export default ProductDetails