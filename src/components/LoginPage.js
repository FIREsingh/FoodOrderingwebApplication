import React from "react";
import pizza from "../image/pizza.png";
import Login from "./Login";
import Signup from "./Signup";

export default function LoginPage() {
  return (
    <div className=" my-56 h-screen ">
      <div className="flex justify-center space-x-10 ">
        <div className=" w-1/4 ">
          <img src={pizza} alt="" />
        </div>

        <Login />
      </div>
    </div>
  );
}
