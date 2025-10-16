import CurtedLivingSlider from "../Components/CurtedLivingSlider";
import Footer from "../Components/Footer";
import LiveThoughtFul from "../Components/LiveTheThoughtFul";
import ScheduleAvisit from "../Components/ScheduleAVisit";
import TestimonalSlider from "../Components/TestimonalSlider";
import WhatMakesKeyStonesUnique from "../Components/WhatMakesKeyStoneUnqiue";

export default function Homepage() {
  return (
    <>
      <WhatMakesKeyStonesUnique />
      <LiveThoughtFul />
      <CurtedLivingSlider />
      <TestimonalSlider />
      <ScheduleAvisit />
      <Footer />
    </>
  );
}
