import React,{Component} from "react"
import {css} from '@emotion/react'
 
import { BounceLoader} from  'react-spinners'

import ProductList from "./Product";
import ProductDetails from "./ProductDetails";
import './App.css'


const loaderCSS=css`
margin-top: 300px;
margin-bottom: 25px;

`

class App extends Component{
    state={
        productlist:[
            {
            name: 'Milk',
            description: 'A whitish liquid containing proteins, fats, lactose, and various vitamins and minerals that is produced by the mammary glands of all mature female mammals after they have given birth and serves as nourishment for their young. 2. The milk of cows, goats, or other animals, used as food by humans.',
            price: 70,
            category: 'Dairy',
            },
            {
            name: 'Eggs',
            description: 'Eggs have a hard shell of calcium carbonate enclosing a liquid white, a single yolk (or an occasional double yolk)and an air cell. The white or albumen is a clear liquid that turns to an opaque white when cooked or beaten. The yolk is orange to yellow in color, and becomes pale yellow when cooked to a solid form.',
            price: 100,
            category: 'Dairy',
            }
           
            ],
            productdetails:null,
            
            loading: true
           
    }

    componentDidUpdate()
    {
        console.log("updated")

        
        setTimeout(() => {
            this.setState({loading: false})
               
           }, 1000);
        
    }

   componentDidMount(){
       console.log("Mounted")

       setTimeout(() => {
        this.setState({loading: false})
           
       }, 1000);
       
    
   }

    AddDetails=(show)=>{
        this.setState({productdetails:show,loading: true})
    }
    ShowList=()=>{
        this.setState({...this.state,productdetails:null})
    }

    render(){
      
        return(

            <div className="App">

                {
                    this.state.loading?
                    <BounceLoader css={loaderCSS} loading={this.state.loading} color='red'/>
                    :
                    <div style={{
                        padding: '100px'
                    }}
                   
                    >
                        
                        
                    {this.state.productlist.map((product)=>{
        
                        return(<>
                        <p onClick={()=>{this.AddDetails(product)}}>{!this.state.productdetails && <ProductList name={product.name} description={product.description} price={product.price} category={product.category}/>}</p>
                        
                        </>
                        )
                        
        
                    })}
        
                    
                    
                    <p>{this.state.productdetails && <ProductDetails loading={this.state.loading} productdetails={this.state.productdetails} ShowList={this.ShowList}/> } </p> 
                    </div>
                }

 
                
            </div>
            
        )
    }
}
export default App;
