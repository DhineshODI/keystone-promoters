import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutusSlider() {
  return (
    <>
      <div>
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersection ">
            <div className="aboutusslidersectionnew">
              <p className="mainheadingText ">Award-Winning Excellence </p>
              <h5 className="secondHeadingText ">
                Celebrating Craft Through National Design Awards
              </h5>
              <p className="subHeadingText ">
                Our commitment to quality and innovation has earned us
                prestigious industry awards, reflecting our excellence across
                design, delivery, and trust.
              </p>

              <div>
                <img src="/images/about-us/star-award.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
