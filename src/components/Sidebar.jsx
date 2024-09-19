import React from 'react'
import { IoHomeOutline,IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";






const Sidebar = () => {
  return (
    <div className='bg-slate-200 h-full  top-0 left-0 fixed p-2'>
        <ul className='p-4 space-y-4'>
            <li>
                <button ><IoHomeOutline size={'1.4rem'}/></button>
            </li>

            <li>
                <button><IoCartOutline size={'1.4rem'}/></button>
            </li>

            <li>
                <button><FaRegHeart size={'1.4rem'}/></button>
            </li>

            <li>
                <button><TbTruckDelivery size={'1.4rem'}/></button>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar