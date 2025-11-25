import ArchitectureSection from "../Components/ArchitectureSection";
import CurtedLivingSlider from "../Components/CurtedLivingSlider";
import Footer from "../Components/Footer";
import HomepageImageHoverSection from "../Components/HomePage-ImageHover";
import TextImageSection from "../Components/HomePageHover";
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
      <HomepageImageHoverSection />
      <OngoingProjects />
      <CurtedLivingSlider />
      {/* <TextImageSection/> */}
    </>
  );
}
