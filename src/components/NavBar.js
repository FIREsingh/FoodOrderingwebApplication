import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [btn, setBtn] = useState("Login");

  return(
    <div className=" shadow-lg header flex gap-64 font-bold h-20 m-auto justify-center items-center align-middle ">
      <div className="">
        <Link to="/home"> <img className="logo" src="src/image/Designer.jpeg" alt="Monato" /> </Link>
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
        </ul>
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
