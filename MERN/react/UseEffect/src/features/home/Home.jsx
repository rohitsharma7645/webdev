import Card from "./Components/Card";

const Home = () => {
    return (
        <div >
            <div className="bg-[#6366F1] text-white p-5 border-2 border-black rounded-xl">
                <div className="p-4 m-2 flex justify-center items-center gap-1 border-2 border-black rounded-xl">
                    <Card text="Card 1"></Card>
                    <Card text="Card 2"></Card>
                    <Card text="Card 3"></Card>
                </div>
                <div className="p-4 m-2 flex justify-center items-center border "> 
                    <div className="w-2/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed earum expedita quis id porro optio distinctio quae minima repudiandae. </div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home