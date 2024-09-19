import React from 'react'

import { FaCartArrowDown } from "react-icons/fa6";
import  { PRODUCTS } from '../utils/products.js'


const CardContainer = ({filterList}) => {
  

  return (
    
    <>
    <div className='products grid grid-cols-2 xl:grid-cols-5 lg:grid-col-3 gap-9 p-4 z-20'>
      {
        filterList.map ((product,id)=>{
         return(
          <div key={id} className='product h-fit w-fit bg-slate-300 drop-shadow-2xl p-2 border'>
          <img src={product.img} alt="sunglass" />
          <div className='m-2 p-2'>
            <h1 className='text-xl font-semibold'>{product.name}</h1>
            <p className='text-sm'>{product.title}</p>
         
            <div className='flex justify-between items-center mt-2'>
            <h2 className='font-bold'>{product.price}</h2>
            <FaCartArrowDown/>
            </div>
            </div>
        </div>
         )

        })
      }
      



    </div>
    </>
  )
}

export default CardContainer