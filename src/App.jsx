import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SVGAnimation from "./Components/SvgAnimation";
import TextFillAnimation from "./Components/TextFillAnimation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactMainPage from "./Pages/ContactMainPage";
import Footer from "./Components/Footer";
import TestimonalSlider from "./Components/TestimonalSlider";
import ScheduleAvisit from "./Components/ScheduleAVisit";

// gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      {/* <TextFillAnimation /> */}

      {/* <SVGAnimation /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactMainPage />} />
        </Routes>
      </Router>

      <TestimonalSlider />
      <ScheduleAvisit />
      <Footer />
    </>
  );
}

export default App;
