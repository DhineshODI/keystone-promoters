import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SVGAnimation from "./Components/SvgAnimation";
import TextFillAnimation from "./Components/TextFillAnimation";
import Header from "./Components/Header";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Header />
      <Homepage />
      {/* <TextFillAnimation /> */}

      {/* <SVGAnimation /> */}
    </>
  );
}

export default App;
