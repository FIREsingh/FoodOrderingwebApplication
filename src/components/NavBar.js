import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import logo from "../image/logo2.png";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";

const NavBar = () => {
  //data from redux for cart's number count
  const cartItem = useSelector((state) => state.cart.items);

  const onlineStatus = useOnlineStatus();
  return (
    <div className=" bg-white top-0 fixed z-20 w-full shadow-lg flex gap-64 font-bold h-20 m-auto justify-center items-center ">
      <div className="">
        <Link to="/home">
          <img
            height={10}
            width={80}
            className="logo"
            src={logo}
            alt="Monato"
          />
        </Link>
      </div>

      <div>
        <ul className="flex gap-x-10 ">
          <li>
            <Link to="/home"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <Link className=" text-blue-400 " to="/grocery">
              🛒 Grocery
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h1>Online Status: {onlineStatus ? "😃 ✅" : "😭 ❎"}</h1>
      </div>
      <div className=" flex space-x-8  ">
        <Link className="m-auto " to="/cart">
          <div className="m-auto ">
            <HiMiniShoppingCart className=" text-2xl" />
          </div>
        </Link>
        <div className=" h-6 px-1 text-white relative -left-10 bg-orange-500 rounded-full">
          <h1 className=" px-1 "> {cartItem.length} </h1>
        </div>

        <div className=" space-x-2 ">
          <Link to="/login">
            <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
