import React, { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light");
  useEffect(()=>{

    if (theme === "light") {
      document.body.classList.remove("dark")
    document.body.classList.add('light')
    }else{
      document.body.classList.add("dark")
      document.body.classList.remove('light')
  
    }

  },[theme])
  return (
    <header className="flex ">
      <button
        className="menu mode"
        onClick={() => {
          setShowModel(true);
        }}
      >
        {" "}
        <span className="icon-th-menu"></span>
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode flex"
      
      onClick={()=>{
        localStorage.setItem("currentMode",theme === "dark"? "light": "dark")
        setTheme(localStorage.getItem("currentMode"))
      }}>
        <span className="icon-moon-o"></span>
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModel(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
