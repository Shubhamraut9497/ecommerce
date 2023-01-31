import React from 'react'
import Filters from './Filters'
class Products extends React.Component{
   constructor(){
      super();
      this.state={
      products:[],
      loading:false,
      }
   }
   componentDidMount(){
      const ecommerce=async()=>{
         try{
            this.setState({
               loading:true
            })
          const response=await fetch("https://fakestoreapi.com/products");
          const responseJson=await response.json();
          console.log(responseJson)
          this.setState({
            products:responseJson,
            loading:false
          })
          
         }
         catch(err){
            console.log("error:",err);
         }

      }
      ecommerce();
   }
   filteredList=(searchProduct,SearchPrice)=>{
       const filterdProduct= this.state.products.filter((product)=>{
             return((product.title.includes(searchProduct) || product.description.includes(searchProduct)) && product.price<=SearchPrice)
       })
       this.setState({
         products:filterdProduct
       })
   }
   
   render(){
      if(this.state.loading){
         return(
            <>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>
           <h1>...Loading</h1>
         </div>
         </>
         )
      }
      
      return (
         <>
         <Filters filteredList={this.filteredList}/>
         <div style={{textAlign:'center',display:'flex',flexWrap:'wrap'}}>  
         {this.state.products.map((product)=>{
            return (
               <div key={product.id} style={{marginLeft:'20px'}}>
               <img src={product.image} width={200} height={200}alt='img' style={{margin:'20px'}} /> 
               <h1>{`Price:${product.price}$`}</h1>
               <h3 style={{width :'300px'}}>{product.title}</h3>
               <p style={{width:'200px' ,marginLeft:'20px'}}>{product.description}</p>
               </div> 
               
            )
         })}
         
         </div>
         </>
      )
   }
 
     
}
export default Products;