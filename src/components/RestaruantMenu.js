import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaruantMenu from "../util/useRestaruantMenu";
import { PiStarFill } from "react-icons/pi";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom hook
  const resInfo = useRestaruantMenu(resId);

  //Shimmer UI
  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const category =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  //
  console.log("this is category: ", category);
  return (
    <div className="my-40 w-2/5 mx-auto space-y-10 ">
      <div className=" flex justify-between ">
        <div className="flex flex-col justify-self-start text-xs gap-1">
          <h1 className=" font-bold text-3xl">{name}</h1>
          <h3 className=" text-slate-600">{cuisines.join(",")}</h3>
        </div>

        <div className="flex align-middle space-x-2 text-slate-600">
          <PiStarFill className="m-auto " />
          <h2 className="flex justify-center align-middle text-center m-auto">
            {avgRating}
          </h2>
        </div>
      </div>
      <div className=" border-b-2"></div>

      <div className="">
        {category.map((c) => (
          <RestaurantCategory data={c?.card?.card} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
