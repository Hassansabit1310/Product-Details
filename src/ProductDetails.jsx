import React,{Component} from "react";
import ProductList from "./Product";
import { BounceLoader} from  'react-spinners'

class ProductDetails extends Component{
    componentDidMount(){
        console.log("mounted")
       
    }

    
    render()
    {
        return(
            
            <div className="App">

                <BounceLoader loading={this.props.loading} color='red'/>
                
                <p>Name:{this.props.productdetails?.name}</p>
            <p>Description:{this.props.productdetails?.description}</p>
            <button onClick={()=>{this.props.ShowList()}}>back to list</button>

            </div>
            
        )
      
    }
}

export default ProductDetails

