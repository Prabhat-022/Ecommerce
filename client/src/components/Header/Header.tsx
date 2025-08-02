import { FiAlignJustify } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { FaCircleChevronRight } from "react-icons/fa6";
import user from "../../assets/user.jpeg"

const Header = () => {
    return (
        <div>
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

            {/* search cart */}
            <div className="bg-[#03081F] m-2 p-2 flex flex-col items-center justify-center rounded-xl h-64">
                <p className="text-white py-2">Order Restaurant food, takeaway and groceries.</p>
                <h1 className="text-4xl font-bold text-[#FFFFFF]">Feast Your Senses,</h1>
                <h1 className="text-4xl font-bold text-[#FC8A06]">Fast and Fresh</h1>
                <p className="text-white py-2">Enter a postcode to see what we deliver</p>

                {/* search input */}
                <div className="flex items-center ">
                    <div className="flex items-center bg-[#FFFFFF] rounded-full">
                        <input type="text" placeholder="eg. E1 1AA" className="border p-2 rounded-full bg-[#FFFFFF] h-12 border-none" />
                        <div className="p-2 rounded-full cursor-pointer bg-amber-600 h-12 w-12 flex items-center justify-center">
                            <FaCircleChevronRight size={40} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
