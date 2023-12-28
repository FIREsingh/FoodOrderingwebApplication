import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../util/constants";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { removeItem } from "./Redux/slice/CartSlice";

function Cart() {
  const dispatch = useDispatch();

  //remove handler
  function removeHandler(items) {
    dispatch(removeItem(items?.card?.info?.id));
  }
  //import data from redux
  const cartItemList = useSelector((state) => state.cart.items);

  return cartItemList.length === 0 ? (
    <div className=" text-center flex justify-center my-40 space-y-10 flex-col w-2/3 mx-72 h-screen">
      <div>
        <MdRemoveShoppingCart className=" text-9xl m-auto text-slate-600" />
      </div>

      <div className="text-5xl font-semibold text-slate-500">
        Your Cart is Empty.
      </div>
      <div className=" text-slate-500">
        Look like you have not added anything to your cart.
      </div>
      <button className="bg-blue-500 w-20 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 m-auto">
        <Link to="/"> Add</Link>
      </button>
    </div>
  ) : (
    <div className="  my-40 space-y-10 flex-col justify-center items-center align-middle w-2/3 mx-72 h-screen">
      <div className=" text-cyan-700 font-bold text-4xl">Cart</div>

      <div className="flex justify-between">
        <div className=" w-3/5">
          <div className=" text-xs text-slate-400 relative flex w-11/12 m-auto justify-between">
            <h1 className="w-2/6">PRODUCT</h1>
            <h1 className=" relative right-5">PRICE</h1>
            <h1 className=" relative right-5">QUANTITY</h1>
            <h1 className=" relative right-5">TOTAL</h1>
          </div>

          {cartItemList.map((items) => (
            <div className=" shadow-md px-4 py-2 space-y-5 m-6  text-slate-600">
              <div className="flex justify-between m-auto ">
                <div className="flex-col w-2/5 space-y-6">
                  <img
                    className="rounded-md shadow-md h-32 w-40 "
                    src={CDN_URL + items?.card?.info?.imageId}
                    alt="Pic"
                  />
                  <div className="m-auto  ">
                    <h1 className="font-semibold text-left  text-slate-600 ">
                      {items?.card?.info?.name}
                    </h1>
                  </div>
                </div>

                <h1 className=" m-auto text-lg">
                  ₹
                  {items?.card?.info?.price
                    ? items?.card?.info?.price / 100
                    : items?.card?.info?.defaultPrice / 100}
                </h1>

                <div className=" m-auto flex space-x-4    bg-blue-400 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
                  <div>-</div>
                  <div className=" border-r-2"></div>
                  <div>1 </div>
                  <div className=" border-l-2"></div>
                  <div>+</div>
                </div>

                <h1 className="m-auto text-lg"> 67 </h1>
                <MdDelete
                  onClick={() => removeHandler(items)}
                  className=" text-xl text-slate-600"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-2/5  text-cyan-700 ">
          <div className="font-bold text-3xl">Checkout</div>
          <div>Total Price : </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
