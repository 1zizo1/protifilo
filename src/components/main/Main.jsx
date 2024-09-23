import React from "react";
import "./main.css";
import { useState } from "react";
import { projects } from "./myprojects";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
  

  const [active, setactive] = useState("all");
  const [arr, setArr] = useState(projects);
   const handleCat = (btnCategory) => {
    setactive(btnCategory);
    const newarr = projects.filter((item) => {
      const categoryFilter = item.category.find((filtered) => {
        return filtered === btnCategory;
      });
      return categoryFilter === btnCategory;
    });
    setArr(newarr);
  }
  
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setactive("all");
            setArr(projects);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
           handleCat("css")
          }}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
           handleCat("js")
          }}
          className={active === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleCat("react")
          }}
          className={active === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleCat("node")
          }}
          className={active === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      <section className="right-section flex">


        <AnimatePresence>


        {arr.map((item) => {
          return (
            <motion.article
            
            layout
            animate={{ transform: "scale(1)" }}
            initial={{ transform: "scale(0)" }}
            transition={{type:"spring",damping:8 ,stiffness:50}}
            key={item.title} className="card">
              <img src={item.imagePath} width={266} alt="" />
              <div className="box" style={{ width: "266px" }}>
                <h1 className="title">{item.title}</h1>
                <p className="sub-title">{item.desc}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a className="icon-link" href={item.liveDemoLink}></a>
                    <a className="icon-github" href={item.githubLink}></a>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}

        </AnimatePresence>
      </section>
    </main>
  );
}
