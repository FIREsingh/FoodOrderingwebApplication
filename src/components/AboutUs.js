import React from "react";
import burger from "../image/burger.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function AboutUs() {
  return (
    <div className=" m-auto my-20 p-10 h-full w-2/3 mx-auto flex justify-between text-4xl text-slate-500  ">
      <div className=" my-48 space-y-5">
        <Section>
          <h1>
            <span className=" text-8xl">Sup!</span>
          </h1>
          <h1 className=" my-6">
            My name is Manish Singh. Say me Hello!{" "}
            <Link className=" text-blue-500" to="/contact">
              Contact
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
