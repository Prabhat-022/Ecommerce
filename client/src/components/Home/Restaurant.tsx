import res1 from '../../assets/restaurant/res1.jpg'
import res2 from '../../assets/restaurant/res2.jpg'
import res3 from '../../assets/restaurant/res3.jpg'
import res4 from '../../assets/restaurant/res4.jpg'
import res5 from '../../assets/restaurant/res5.jpg'
import res6 from '../../assets/restaurant/res6.jpg'

const data = [
    {
        image: res1,
        name: "Butterbrot Caf'e London",

    },
    {
        image: res2,
        name: "Butterbrot Caf'e London",

    },
    {
        image: res3,
        name: "Butterbrot Caf'e London",

    },
    {
        image: res4,
        name: "Butterbrot Caf'e London",

    },
    {
        image: res5,
        name: "Butterbrot Caf'e London",

    },
    {
        image: res6,
        name: "Butterbrot Caf'e London",

    },

]

const cart = data.map((item, index) => {
    return (
        <div key={index} className="m-2 flex flex-col  pt-2 ">
            <img src={item.image} alt="" className="w-[250px] h-[100px] rounded-tl-xl rounded-tr-xl border" />
            <div className="bg-[#FC8A06] px-2 font-sarif">
                <h1 className="text-white font-bold">{item.name}</h1>
            </div>
        </div>
    )
})

const Restaurant = () => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar"   >
            {cart}
        </div>
    )
}

export default Restaurant
