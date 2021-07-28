import React, {useState,useEffect} from 'react'
import ShowProductetails from './showProductDetails'
import { BounceLoader} from  'react-spinners'

const ProductDetails=({products,setProduct})=>{

    const [productdetails,setProductdetails]=useState(null)
    const[loading,setLoading]=useState(true)

   const AddProduct=(data)=>{
        setProductdetails(data)
        

      setProduct([])


    }
    console.log(productdetails)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
               
           }, 3000);
          setLoading(true)


           
        
        },[products]);


    return(
        <>
        {loading?<BounceLoader loading={loading}/>:
        <div>
        {productdetails?<ShowProductetails products={products} setProductdetails={setProductdetails} setProduct={setProduct} productdetails={productdetails}/>:null}
        
        {products.map((p)=>{

            return(
                <>
                



                <div onClick={()=>AddProduct(p)}>

                <div
                style={
                    {
                        marginBottom:'10px',
                        border: '1px solid red'
                    }
                }>  

            <p>{p.name}</p>
            <p>{p.description}</p>
            <p>{p.price}</p>
            <p>{p.category}</p>
                
                 </div>


                </div>

               
           
              
              
               </> 
                
                )
            
        })}
        </div>}
        
        
        </>
    )

}

export default ProductDetails