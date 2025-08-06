import chef from "../../assets/chef1.jpg"

const PartnerwithUs = () => {
    return (
        <div 
            className="relative bg-no-repeat bg-center bg-cover h-[300px]  bg-[url('${chef}')"
        >
            {/* Dark overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-4xl font-bold text-white mr-4">Partner with us</h1>
                <button className="bg-[#FC8A06] p-2 rounded-md text-white font-medium">
                    Get started
                </button>
            </div>
        </div>
    )
}

export default PartnerwithUs