import { CDN_URL } from "../util/constants";

function RestaurantCard(props) {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className=" bg-slate-50 flex-col justify-between p-1 w-56 h-80 border rounded-md hover:shadow-lg hover:scale-110 transition duration-200 ease-out ">
      <img
        className=" h-40 rounded-md w-full"
        src={CDN_URL + cloudinaryImageId}
        alt="burger"
      />

      <div className=" p-4 space-y-3  ">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </h1>
        <h1 className=" text-xs text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap ">
          {" "}
          {cuisines.join(",")}
        </h1>
        <div className=" flex justify-between text-xs text-slate-500 ">
          <h1>{avgRating} </h1>
          <h1>{costForTwo}</h1>
        </div>

        <div className=" text-sm ">
          <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
            {" "}
            Add to cart+
          </button>
        </div>
      </div>
    </div>
  );
}
export default RestaurantCard;

//Higher Order Component
//Input => RestaurantCart , Output => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute z-10 bg-blue-400 rounded-md text-white p-1 ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
