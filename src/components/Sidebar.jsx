import React from 'react'
import { IoHomeOutline,IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";






const Sidebar = () => {
  return (
    <div className='bg-slate-200 h-full  top-0 left-0 fixed p-2'>
        <ul className='p-4 space-y-4'>
            <li>
                <button ><IoHomeOutline/></button>
            </li>

            <li>
                <button><IoCartOutline/></button>
            </li>

            <li>
                <button><FaRegHeart/></button>
            </li>

            <li>
                <button><TbTruckDelivery/></button>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar