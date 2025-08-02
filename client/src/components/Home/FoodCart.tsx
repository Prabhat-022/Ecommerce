import pizza from '../../assets/pizza1.jpg'

const FoodCart = () => {
    return (
        <div className='m-4 w-[200px] h-[200px] flex flex-col '>
            <div className="w-[150px] h-[150px] relative">
                <img src={pizza} alt="" className='rounded-xl' />
                <h1 className="absolute top-2 right-2 text-black bg-amber-500 p-1 rounded-md">-17%</h1>
            </div>

            <div className="">
                <p className="text-sm text-amber-600">Restaurant</p>
                <h1 className="text-xl font-bold">Butterbrot Caf'e London</h1>
            </div>
        </div>
    )
}

export default FoodCart
