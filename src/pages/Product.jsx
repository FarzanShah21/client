import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Product = () => {
    const [product, setProduct]=useState([])
    const getdata = async()=>{
        let response = await axios.get("http://localhost:8000/getProduct")
         if(response){
            console.log(response)
            setProduct(response.data.detail)
            toast.success(response.data.message)
         }else{
             console.log("Failed to fetch data")
         }

    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div className='container my-24  mx-auto '>

{
    product.length === 0? (<div>loader ....</div>) :(<div className='flex flex-wrap w-full mb-20'>
    {product.map((item,i)=>{
        return(
            <div className='lg:w-1/4 w-full mb-6 md:w-1/3 sm:w-1/2 lg:mb-0 text-center' key={i}>
<div className="bg-gray-100 p-6 rounded-lg">
<Link to={`/product/${item._id}`}>  <img className="h-40 rounded w-full object-contain object-center mb-6" src={item.image} alt="content" /></Link>
  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
</div>
</div>
        )
    })} 
    </div>)
}


     

    </div>
  )
}

export default Product