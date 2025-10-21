import ArchitectureSection from "../Components/ArchitectureSection";
import CurtedLivingSlider from "../Components/CurtedLivingSlider";
import Footer from "../Components/Footer";
import LiveThoughtFul from "../Components/LiveTheThoughtFul";
import OngoingProjects from "../Components/OnGoingProjects";
import ScheduleAvisit from "../Components/ScheduleAVisit";
import TestimonalSlider from "../Components/TestimonalSlider";
import VideoBanner from "../Components/VideoBanner";
import WhatMakesKeyStonesUnique from "../Components/WhatMakesKeyStoneUnqiue";

export default function Homepage() {
  return (
    <>
      <VideoBanner />
      <WhatMakesKeyStonesUnique />
      <LiveThoughtFul />
      <ArchitectureSection />
      <OngoingProjects />
      <CurtedLivingSlider />
    </>
  );
}
