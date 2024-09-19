import React from 'react'
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
   <>
   <div className='w-full sticky top-0 z-10'>
   <div className='flex justify-between'>
        <div className='font-serif font-bold lg:text-5xl text-3xl ml-4 mt-4 text-blue-500'>E-Cart</div>
        <div className='mt-4 mx-4 border border-blue-950 rounded-2xl flex items-center p-3 '>
            <input type="text" placeholder='Search product' className='outline-0' />.
            <button><FaSearch/></button>
        </div>
    </div>

    <div className='categories flex space-x-6 p-4 mt-8 '>
        <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Watches</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Laptop</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Sunglass</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Monitor</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Mouse</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Wallet</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Keyboard</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Laptop</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Sunglass</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Monitor</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Mouse</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Wallet</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Keyboard</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Laptop</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Sunglass</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Monitor</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Mouse</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Wallet</p>
        </div>

        <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'>
            <p>Keyboard</p>
        </div>


        </div>

    </div>

    <div className='products'>


    </div>

    </>
  )
}

export default Header