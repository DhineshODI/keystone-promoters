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
import OngoingProjectsMainPage from "./Pages/OngoingProjectsMainPage";
import CareersPage from "./Pages/CareersPage";
import JointVentureMainPage from "./Pages/JonitVentureMainPage";
import ChannelPartner from "./Pages/ChannelPartnerMainPage";
import ProjectDetailMainPage from "./Pages/ProjectDetailMainPage";
import AboutUsPage from "./Pages/AboutusPage";
import Header from "./Components/Header";

// gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      {/* <TextFillAnimation /> */}

      {/* <SVGAnimation /> */}
 <Header />
      <Router>
        <Routes>
           
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactMainPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/joint-venture" element={<JointVentureMainPage />} />
          <Route path="/channel-partner" element={<ChannelPartner />} />
          <Route
            path="/ongoing-projects"
            element={<OngoingProjectsMainPage />}
          />
          <Route path="/project-detail" element={<ProjectDetailMainPage />} />
        </Routes>
      </Router>

      <TestimonalSlider />
      <ScheduleAvisit />
      <Footer />
    </>
  );
}

export default App;
