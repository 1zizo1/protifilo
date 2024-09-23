import React, { useRef } from "react";
import "./hero.css";
import devAnimation from "../../../public/aninmation/devloper.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Hero() {
  const lotiieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="perant-avatar flex">
          <motion.img
          initial={{transform:"scale(0)"}}
          animate={{transform:"scale(1)"}}
          transition={{damping:6, type:"spring",stiffness:"100" }}
           src="./zoz.jpg" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration:2}}
        className="title">Ahmed Abd EllAziz</motion.h1>
        <p className="sub-title">
        Seeking a Front-End Developer role to leverage my framework expertise and 
development skills, aiming to advance to Full-Stack Developer and gain experience in 
mobile and desktop app development while contributing to innovative projects. 
        </p>
        <div className="icons flex">
          <div className="icon icon-facebook-f"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github "></div>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-linkedin"></div>
          <div className="icon "></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lotiieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // eslint-disable-next-line no-undef
            lotiieRef.current = setSpeed(0.5);
          }}
          style={{ height: 355 }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
