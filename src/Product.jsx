import React, {Component} from "react";

class ProductList extends Component{

    render()
    {
        return(
            <div
            style={
                {
                    marginBottom:'10px',
                    border: '1px solid red'
                }
            }
            >
                <p>Name:{this.props.name}</p>
                <p>Description:{this.props.description}</p>
                <p>Price:{this.props.price}</p>
                <p>Category:{this.props.category}</p>
            </div>
        )
    }
}

export default ProductList;