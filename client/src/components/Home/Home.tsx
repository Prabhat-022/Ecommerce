import { FaChevronCircleDown } from "react-icons/fa";
import FoodCart from "./FoodCart";
import PopularItemCart from "./PopularItemCart";    

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
            <div className="flex overflow-x-scroll h-full">
                <FoodCart />
                <FoodCart />
                <FoodCart />
                <FoodCart />
                <FoodCart />
                <FoodCart />
            </div>


            {/* Popular category */}
            <div className="bg-[#D9D9D9] my-10 ">
                <div className="">
                    <h1 className="text-md font-bold">Order.Uk’s Popular Categories</h1>
                    <div className="flex flex-col order-2 gap-10">
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

        </main>
    )
}

export default Home
