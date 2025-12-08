import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatMakesKeyStonesUnique() {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  return (
    <>
      <div className="whatsmakeSectionBG reveal " ref={boxRef}>
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="whatMakesHeadingMainRow">
            <h5 className="secondHeadingText whatMakesHeading1">What Makes</h5>
            <h5 className="secondHeadingText whatMakesHeading2">
              Keystone Unique?
            </h5>

            <div className="WhatMakesKeyStonesFlex">
              <p className="subHeadingText text-center text-[#636465]">
                At Keystone, every creation embodies the harmony of engineering
                excellence and architectural thoughtfulness crafting spaces that
                inspire trust, reflect individuality and timeless quality.
              </p>
            </div>
          </div>

          <div className="contentWhatMakesSection">
            <div className="FirstcontentWhatMakesSection">
              <div
                className="FlexFirstcontentWhatMakesSection"
                data-aos="fade-right"
              >
                <h5 className="secondHeadingText">Timely</h5>
                <h5 className="secondHeadingText">Delivery</h5>
                <p className="subHeadingText">
                  Every commitment met with precision
                </p>
              </div>

              <div
                className="FlexFirstcontentWhatMakesSection"
                data-aos="fade-left"
              >
                <h5 className="secondHeadingText">Design</h5>
                <h5 className="secondHeadingText">Led</h5>
                <p className="subHeadingText">Architecture with a soul</p>
              </div>
            </div>
            <div className="FirstcontentWhatMakesSection">
              <div
                className="FlexFirstcontentWhatMakesSection"
                data-aos="fade-right"
              >
                <h5 className="secondHeadingText">Investor</h5>
                <h5 className="secondHeadingText">Friendly</h5>
                <p className="subHeadingText">High appreciation value</p>
              </div>

              <div
                className="FlexFirstcontentWhatMakesSection"
                data-aos="fade-left"
              >
                <h5 className="secondHeadingText">100%</h5>
                <h5 className="secondHeadingText">Complaint</h5>
                <p className="subHeadingText">
                  Legal clarity, clear title
                </p>
              </div>
            </div>
            <div className="FirstcontentWhatMakesSection lastSectionWhatMakes">
              <div
                className="FlexFirstcontentWhatMakesSection"
                data-aos="fade-up"
              >
                <h5 className="secondHeadingText">Solid</h5>
                <h5 className="secondHeadingText">Foundations</h5>
                <p className="subHeadingText">
                  Structurally sound and aesthetically modern
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
