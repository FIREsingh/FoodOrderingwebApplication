import { IoArrowDownCircleSharp } from "react-icons/io5";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [visible, setVisible] = useState(true);
  const clickHandler = () => {
    setVisible(!visible);
  };
  return (
    <div className="border my-10 shadow-md p-3 rounded-md  ">
      <div
        className=" flex justify-between items-center cursor-pointer"
        onClick={clickHandler}
      >
        <div className=" font-semibold text-2xl ">{data.title}</div>
        <div>
          <IoArrowDownCircleSharp />
        </div>
      </div>
      {visible && <ItemList items={data?.categories} />}
    </div>
  );
};
export default RestaurantCategory;
