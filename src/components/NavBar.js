import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import logo from "../image/logo2.png";

const NavBar = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className=" bg-white top-0 fixed z-10 w-full shadow-lg flex gap-64 font-bold h-20 m-auto justify-center items-center ">
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
      <div className=" flex space-x-2  ">
        <div className=" ">
          <img src="" alt="cart" />
        </div>

        <button
          onClick={() => {
            if (btn === "Login") {
              setBtn("Logout");
            } else {
              setBtn("Login");
            }
          }}
          className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          {btn}
        </button>

        <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default NavBar;
