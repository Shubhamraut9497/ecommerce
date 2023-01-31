import React from 'react'
import {Link} from 'react-router-dom'

function Product(props) {
    const arr = props.item;
    
  return (
    <div className='card'>
        <Link to={`/product/${arr.id}`} style={{textDecoration:"none",textAlign:'center',marginLeft:'20px'}}>
            <div className="hello" style={{display:'flex',textDecoration:'none',flexWrap:'wrap',paddingLeft:'20px'}}>
        <div className="hi" style={{textAlign:'center',boxShadow:'0px 5px 5px 4px',width:'250px',height:'250px',margin:'20px',borderRadius:'20px',overflow:'hidden',backgroundColor:'white'}}>
        <img src={arr.image} className="img" style={{color:'black',width:"150px", height:"150px",borderRadius:'20px',paddingTop:'4px'}} alt="img" />
        <h1 style={{fontSize:'18px'}}> {arr.title} </h1>
        </div>
        </div>
        </Link>
    </div>
  )
}

export default Product