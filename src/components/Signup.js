import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className=" flex-col flex justify-center align-middle text-center shadow-md p-20 space-y-5 ">
      <h1 className=" font-semibold text-3xl text-slate-500 ">SignUp Here</h1>

      <div className="flex justify-center space-x-3">
        <input
          className=" border rounded-md p-1"
          type="text"
          name="userName"
          placeholder="user name"
        />
      </div>
      <div className="flex justify-center space-x-3 my-5 ">
        <input
          className=" border rounded-md p-1"
          type="email"
          name="user"
          placeholder="email"
        />
      </div>
      <div className="flex justify-center space-x-3">
        <input
          className=" border rounded-md p-1"
          type="text"
          name="password"
          placeholder="password"
        />
      </div>
      <div className="flex justify-center space-x-3">
        <input
          className=" border rounded-md p-1"
          type="text"
          name="confirmPassword"
          placeholder="confirm password"
        />
      </div>
      <div>
        <Link to="/login">
          <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
}
