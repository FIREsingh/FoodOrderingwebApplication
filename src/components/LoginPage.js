import React from "react";
import pizza from "../image/pizza.png";
import Login from "./Login";
import Signup from "./Signup";
import Section from "../Animation.js/Section";

export default function LoginPage() {
  return (
    <Section>
      <div className=" my-56 h-screen ">
        <div className="flex justify-center space-x-10 ">
          <div className=" w-1/4 ">
            <img src={pizza} alt="" />
          </div>

          <Login />
        </div>
      </div>
    </Section>
  );
}
