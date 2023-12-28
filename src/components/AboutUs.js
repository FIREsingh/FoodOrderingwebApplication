import React from "react";
import burger from "../image/burger.png";
import { Link } from "react-router-dom";
import Section from "../Animation.js/Card";

export default function AboutUs() {
  return (
    <div className=" m-auto my-20 p-10 h-full w-2/3 mx-auto flex justify-between text-4xl text-slate-500  ">
      <div className=" my-48 space-y-5">
        <Section>
          <h1>
            <span className=" text-orange-300 font-bold text-8xl">Sup!</span>
          </h1>
          <h1 className=" my-6">
            My name is Manish Singh. Say hello to me.
            <Link className=" text-blue-500" to="/contact">
              <Link to="/contact"> Contact</Link>
            </Link>
          </h1>
        </Section>
      </div>
      <Section>
        <div>
          <img width={1000} height={1000} src={burger} alt=" Burger" />
        </div>
      </Section>
    </div>
  );
}
