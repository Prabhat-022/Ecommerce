import { FaChevronCircleDown } from "react-icons/fa";
import FoodCart from "./FoodCart";
import PopularItemCart from "./PopularItemCart";    
import Restaurant from "./Restaurant";
import playstore from "../../assets/playstore.png"
import twofriends from '../../assets/twofriend.png'
import PartnerwithUs from "./PartnerwithUs";
import RidewithUs from "./RidewithUs";  
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <main className="my-6 h-full">
            <div className="flex items-center justify-between mx-3">
                <h1 className="text-md font-bold">Up to -40% Discount Offers 🎊 </h1>

                <div className="flex items-center border p-2 rounded-full cursor-pointer">
                    <FaChevronCircleDown size={20} />
                    <p className="text-sm">pizza & Fast Food</p>
                </div>
            </div>

            {/* food cart */}
            <div className="flex overflow-x-scroll h-full no-scrollbar">
                <FoodCart />
                <FoodCart />
                <FoodCart />
                <FoodCart />
                <FoodCart />
                <FoodCart />
            </div>


            {/* Popular category */}
            <div className="bg-[#D9D9D9] my-10 p-2 ">
                <div className="">
                    <h1 className="text-md font-bold">Order.Uk’s Popular Categories</h1>
                    <div className="flex flex-col order-2">
                        <div className="flex">
                            <PopularItemCart />
                            <PopularItemCart />
                        </div>
                        <div className="flex">
                            <PopularItemCart />
                            <PopularItemCart />
                        </div>
                        <div className="flex">
                            <PopularItemCart />
                            <PopularItemCart />
                        </div>
                    </div>
                </div>
            </div>


            {/* restaurant */}
            <div className="flex ">
                <Restaurant />

            </div>

            {/* app promotion */}
            <div className="bg-[#E0E1DC] flex flex-col items-center justify-center m-2 border rounded-xl  h-[600px]">
                <h1 className="text-3xl font-bold mt-6">Ordering is more</h1>
                <p className="text-xl p-1 "><span className="font-bold text-[#FC8A06]">Personalised</span> & Instant</p>
                <p className="text-sm p-1 ">Download the Order.Uk app for faster ordering</p>

                <div className="flex items-center w-full mt-2">
                    <img src={playstore} alt="" className="w-full" />
                </div>
                
                <div className="flex items-center h-[350px] w-full">
                    <img src={twofriends} alt="" className="w-full h-full object-cover" />
                </div>
                
            </div>

            {/* partner with us */}
            <PartnerwithUs />

            {/* ride with us */}
            <RidewithUs />  


            {/* data */}
            <div className="bg-[#FC8A06] m-2 p-2 text-white">
                <div className="p-4 text-center">
                    <h1 className="text-5xl font-semibold">546+</h1>
                    <p className="text-xl">Registered Rider</p>
                    <hr className="border-t-2 border-[#FFFFFF] w-1/2 mx-auto my-4" />
                    
                </div>
                <div className="p-4 text-center">
                    <h1 className="text-5xl font-semibold">789,900+</h1>
                    <p className="text-xl ">Orders Delivered</p>
                    <hr className="w-1/2 mx-auto my-2" />
                    
                </div>
                <div className="p-4 text-center">
                    <h1 className="text-5xl font-semibold">690+</h1>
                    <p className="text-xl">Restaurants Partnered</p>
                    <hr className="w-1/2 mx-auto my-2" />
                    
                </div>
                <div className="p-4 text-center">
                    <h1 className="text-5xl font-semibold">17,457+</h1>
                    <p className="text-xl">Food Items</p>
                    
                </div>

            </div>

            {/* footer */}
            <Footer />      

        </main>
    )
}

export default Home
