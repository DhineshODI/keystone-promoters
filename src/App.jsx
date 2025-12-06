import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SVGAnimation from "./Components/SvgAnimation";
import TextFillAnimation from "./Components/TextFillAnimation";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import TestimonialPage from "./Pages/TestimonialPage";
import NriPage from "./Pages/NriPage";
import Menubar from "./Components/Menubar";
import OngoingProjectsPage1 from "./Components/Ongoingprojects1";
import OngoingProjectsPage2 from "./Components/OngoingProjects2";

// gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menufunction, setMenuFunction] = useState(false);

  const menuOnlick = () => {
    setMenuFunction((olddata) => !olddata);
  };

  const location = useLocation();

  useEffect(() => {
    if (menufunction) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }
  }, [menufunction]);
  return (
    <>
      {/* <TextFillAnimation /> */}

      {/* <SVGAnimation /> */}

      <AnimatePresence>
        {menufunction && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="menubarWrapper smoothMenu"
          >
            <Menubar menuOnlick={menuOnlick} />
          </motion.div>
        )}
      </AnimatePresence>

      <Header menuOnlick={menuOnlick} />
      {/* <Router> */}
      <Routes>
        <Route path="/project-detail" element={<ProjectDetailMainPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/brand" element={<AboutUsPage />} />
        <Route path="/ongoing-projects" element={<OngoingProjectsMainPage />} />
        <Route path="/contact" element={<ContactMainPage />} />
        <Route path="/joint-venture" element={<JointVentureMainPage />} />
        <Route path="/channel-partners" element={<ChannelPartner />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/nri" element={<NriPage />} />

        <Route path="/architecture" element={<OngoingProjectsPage1 />} />
        <Route path="/completed" element={<OngoingProjectsPage1 />} />
        <Route path="/interior" element={<OngoingProjectsPage2 />} />
      </Routes>
      {/* </Router> */}

      {location.pathname !== "/testimonials" && <TestimonalSlider />}

      {/* {location.pathname !== "/testimonials" && <TestimonalSlider />} */}
      <ScheduleAvisit />
      <Footer />

      <div className="whatsaicon">
        <a
          href="https://api.whatsapp.com/send?phone=919940008855&text=Enquiry%20For%20Keystone%20Promotors%20in%20Chennai"
          target="_blank"
        >
          <img src="/images/icons/whatsapp.svg" alt="" />
        </a>
      </div>
    </>
  );
}

export default App;
