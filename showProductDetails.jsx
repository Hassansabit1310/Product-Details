import React,{useState,useEffect} from 'react'
import ProductDetails from './ProductDetails'
import { BounceLoader} from  'react-spinners'

const ShowProductetails=({productdetails,setProductdetails,setProduct,products})=>{

    const ShowProducts=()=>{
        console.log("ok");

        setProductdetails(null)

    setProduct([{
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
       ])
     
    }
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
               
           }, 3000);
          setLoading(true)


           
        
        },[products]);

    return(
        <>
        {loading?<BounceLoader loading={loading}/>: <div  style={
                    {
                        marginBottom:'10px',
                        border: '1px solid red'
                    }
                }>
        <p>{productdetails?.description}</p>
        <button onClick={()=>ShowProducts()}>Back</button>
        </div>}
        
       
        
        </>
    )

}

export default ShowProductetails