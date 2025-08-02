import food1 from '../../assets/food1.jpg'

const PopularItemCart = () => {
  return (
    <div className='m-4 w-[200px] h-[200px] flex flex-col  '>
      <div className=" relative">
        <img src={food1} alt="" className='rounded-xl w-full h-full' />
        <h1 className="absolute top-2 right-2 text-black bg-amber-500 p-1 rounded-md">-17%</h1>
      </div>

      <div className="bg-black px-2 font-sarif">
        <h1 className="text-sm text-amber-600 font-bold ">Burger & Fast Food</h1>
        <h1 className="text-sm text-white">12 Restaurant</h1>
      </div>
    </div>
  )
}

export default PopularItemCart
