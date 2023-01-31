import React from 'react';

class Filters extends React.Component{
    constructor(){
        super();
        this.state={
            input:'',
            range:'1000',
        }
    }
    setInput=(e)=>{
        this.setState({
           input:e.target.value
        })
    }
    setRange=(e)=>{
        this.setState({
            range:e.target.value
        })
    }
    render(){
    return (
        <>
        <input type='text' id="inp" placeholder='Search For Items' value={this.state.input} onChange={this.setInput}/>
        <input type='range' value={this.state.range} onChange={this.setRange} step={100} min={0} max={1000} />{this.state.range}
        <button onClick={()=>{this.props.filteredList(this.state.input,this.state.range)}} style={{width:'150px',height:'40px',borderRadius:'20px',marginLeft:'10px',backgroundColor:'black',color:'white'}}>Search Product</button>
        </>
    )
}
}
export default Filters;