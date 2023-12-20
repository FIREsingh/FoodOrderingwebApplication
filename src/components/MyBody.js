
import resList from "../util/mocData";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

function MyBody() {
  const [resturantData, setResturantData] = useState(resList);

  const clickHandler = () => {
     let filteredResturant = resturantData.filter((res)=> res.data.avgRating >= 4)
     setResturantData(filteredResturant);
  }
  
  const clickHandler400 = () => {
    
      let filteredResturant400 = resturantData.filter((res)=> res.data.costForTwo > 30000)
      setResturantData(filteredResturant400);
    }

 const [text, setText] = useState("");
    console.log("Renderd")

    useEffect(()=>{
      const filtered = resList.filter(
        (res)=> res.data.name.toLowerCase().includes(text.toLowerCase()))
        setResturantData(filtered)},[text]);

  return (
    <div className=" space-y-10 flex-col justify-center items-center align-middle w-2/3 mx-72 h-screen">
      <div className=" my-10 flex justify-center align-middle p-1 space-x-1">
        <input
          type="text"
          placeholder="Search"
          value={text}
          onInput={(e)=> setText(e.target.value)}
          className=" border rounded-lg p-2"
        />

        
        <button onClick={()=>{
          const filtered = resList.filter(
            (res)=> res.data.name.toLowerCase().includes(text.toLowerCase()))
            setResturantData(filtered)
        }} 
        className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
          Go
        </button> 
      </div>

      <div className=" space-x-3">
        <button onClick={clickHandler} className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
          Top Rated Resturant
        </button>

        <button onClick={clickHandler400} className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
          Price {`>`} 300
        </button>

      </div>


      <div className=" my-10 grid grid-cols-5 gap-10 ">
        {
          resturantData.map( (resturant) => <ResturantCard key = {resturant.data.id}  resData = {resturant} /> )
        }
      </div>

      <div className="">
        <ul className=" flex gap-10 justify-center">
          <li>Link</li>
          <li>link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
}
export default MyBody;
