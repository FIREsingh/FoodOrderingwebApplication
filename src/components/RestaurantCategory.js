import { IoArrowDownCircleSharp } from "react-icons/io5";
const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="border shadow-md p-4 rounded-md flex justify-between items-center ">
      <div className=" font-semibold">
        {data.title} ( {data.categories.length} )
      </div>
      <div>
        <IoArrowDownCircleSharp />
      </div>
    </div>
  );
};
export default RestaurantCategory;
