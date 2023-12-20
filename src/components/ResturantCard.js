function ResturantCard(props) {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.data;

  return (
    <div className=" flex-col justify-between p-1 w-56 h-80 border rounded-md hover:shadow-lg hover:scale-110 transition duration-200 ease-out ">
      <img
        className=" h-40 rounded-md w-full"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="burger"
      />

      <div className=" p-4 space-y-2 ">
        <h1>{name}</h1>
        <h1 className=" text-xs text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap ">
          {" "}
          {cuisines.join(",")}
        </h1>
        <div className=" flex justify-between text-xs text-slate-500 ">
          <h1>{avgRating} </h1>
          <h1>₹{costForTwo / 100} for two</h1>
        </div>
      </div>
    </div>
  );
}
export default ResturantCard;
