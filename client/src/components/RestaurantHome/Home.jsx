import React from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import user from '../../assets/user.jpeg'
import { TiShoppingCart } from 'react-icons/ti'
import { FaCircleChevronRight } from 'react-icons/fa6'
import girlPic from '../../assets/girl-with-pizza.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { LuNotebookTabs } from "react-icons/lu";
import { IoIosBicycle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CircleArrowDown, ScrollText } from 'lucide-react';


const Home = () => {
  return (
    <main>
      <header className='flex justify-between items-center m-2'>
        <h1 className='text-6xl font-bold'>Order</h1>
        <div className="border p-1">
          <FiAlignJustify size={50} />
        </div>
      </header>


      {/* //image and cart */}
      <div className="flex items-center my-2">
        <div className="w-1/2 h-18 flex items-center justify-center  bg-amber-500">
          <img src={user} alt="" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold mx-4 font-sarif" >Smith</h1>
        </div>

        <div className="w-1/2 h-18 flex items-center justify-center border bg-green-500 text-white">
          <TiShoppingCart size={40} />
          <h1 className="text-2xl font-bold mx-4 font-sarif" >$ 4000</h1>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mx-4">
        <FaLocationDot />
        <p className='text-last'>Noida Sector 124</p>

      </div>

      <div className="bg-[#E2E2E2] m-2 rounded-xl">

        <div className="flex items-center justify-center relative">
          <img src={girlPic} alt="" className=' h-[200px] object-cover m-10 rounded-xl' />

          <div className="flex flex-col items-center bg-white p-1 rounded-2xl absolute bottom-4 left-15">
            <h1 className='text-4xl font-bold p-1'>3.4</h1>
            <div className="flex items-center">
              <FaStar size={10} />
              <FaStar size={10} />
              <FaStar size={10} />
              <FaStar size={10} />
              <FaStar size={10} />
            </div>
            <p className='text-sm text-gray-500'>1,360 reviews</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-[#fc8906c5] p-2 w-1/2 mb-4 text-center rounded-br-lg rounded-tr-lg text-white'>
          <CiClock2 size={20} className='text-white font-bold' />
          <p className=''>Open until 3:00 AM</p>
        </div>

        <div className="flex flex-col text-center">
          <p className='text-sm p-2'>Desi Flavours with a blend of italian aesthetics!</p>
          <h1 className='text-2xl font-bold'>Tandori Pizza London</h1>

          <div className="p-2 bg-[#03081F] text-white mx-12 rounded-full my-2 flex items-center justify-center gap-2">
            <LuNotebookTabs size={20} className='text-white font-bold' />
            <p>Minimun Order: 12GBP</p>
          </div>

          <div className="p-2 bg-[#03081F] text-white mx-12 rounded-full my-4 flex items-center justify-center gap-2 " >
            <IoIosBicycle size={20} className='text-white font-bold' />
            <p>Delivery in 20-25 minutes</p>
          </div>
        </div>

      </div>


      {/* search menu  */}

      <div className='flex items-center justify-center my-6 '>
        <input type="text" placeholder="search for menu..." className='p-2 rounded-full w-[80%] border px-5' />
      </div>

      {/* menu */}

      <div className="">
        <h1 className="text-xl text-center font-bold my-4 p-2">Ordre from Tandori Pizza London</h1>

        {/* menu button */}
        <div className=" flex  items-center justify-between mx-10 border p-4 rounded-xl">

          <div className="flex items-center gap-2 font-bold">
            <ScrollText />
            <h1>Menu</h1>
          </div>

          <div className="flex items-center justify-baseline gap-2">
            <p>Pizza</p>
            <CircleArrowDown size={15} />
          </div>

        </div>

        <div className="flex items-center justify-between mx-10 my-4">
          <h1 className='text-xl font-bold'>Pizzas</h1>

          <div className="flex items-center gap-2 border p-2 rounded-full bg-gray-50">
            <p>Sort by Pricing</p>
            <CircleArrowDown size={15} className='text-gray-500' />
          </div>
        </div>

        {/* items cart  */}

        <div className="">

          <div className="">
            <div className="">
              <h1>Form House</h1>
              <h1>Xtreme Pizza</h1>
            </div>
            <img src="" alt="" />
          </div>

          
        </div>


      </div>



    </main>
  )
}

export default Home
