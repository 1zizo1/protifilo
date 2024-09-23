import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const[scroll,setScroll]= useState(false)
  useEffect(() => {
    window.addEventListener("scroll",() => {
      if (window.scrollY<300) {
        setScroll(true)
      }else{setScroll(false)}
    }
    
    )

  }, []);
  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up" style={{opacity: scroll? 0 : 1, transition:".3s"}}>
        <button  className="scrolltop ">
          <span className="icon-angle-double-up"></span>
        </button>
      </a>
    </div>
  );
}

export default App;
