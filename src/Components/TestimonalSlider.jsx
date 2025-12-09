import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestimonalSlider() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  // const totalSlides = 3;

  const [totalSlides, setTotalSlides] = useState(2); // default desktop
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    swipe: true,
    draggable: true,
    touchMove: true,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
  const updateSlides = () => {
    if (window.innerWidth <= 768) {
      setTotalSlides(3); // mobile
    } else {
      setTotalSlides(2); // desktop
    }
  };

  updateSlides(); // run on mount
  window.addEventListener("resize", updateSlides);

  return () => window.removeEventListener("resize", updateSlides);
}, []);

  return (
    <>
      <div className="testimonalFullSection reveal ">
        <div className="container max-w-7xl mx-auto px-4 testimonalRow">
          <div>
            <h3
              className="text-center mainheadingText textTransform "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Client Voice
            </h3>
            <h5
              className="secondHeadingText textTransform text-center"
              style={{ fontWeight: "600", textTransform: "uppercase" }}
              data-aos="fade-up"
              data-aos-duration="1250"
            >
              Stories from our Spaces
            </h5>
            <p
              className="subHeadingText text-center text-[#636465] ourspacingtextmob"
              data-aos="fade-up"
              data-aos-duration="1450"
            >
              Our Spaces come alive through the people who live there, their
              stories truly inspire everthying we build
            </p>
          </div>

          {/* <div className="container max-w-7xl mx-auto px-4 testicardsconatinermob"> */}
          <div className="testimonalSliderContainer">
            <Slider ref={sliderRef} className="testimonalSliders" {...settings}>
              <div
                className="testimonalSlidersSlide"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="testimonalSliderborder">
                  <div className="testimonalSectionName">
                    <h4>Mr. Pandian</h4>
                    <p>NorthPoint, Chennai</p>
                  </div>

                  <div className="testimonalContent">
                    <p className="subHeadingText">
                      Keystone Promoters delivered quality construction with
                      excellent. finishing and reliable service. They met every
                      requirement with care and professionalism-truly a wae
                      investment
                    </p>

                    <div className="flex items-center justify-between  testimonalPersonImageContainer ">
                      <div className="testimonalPersonImagediv">
                        <img
                          className="testimonalPersonImage"
                          src="/images/youtube-image.png"
                          alt=""
                        />
                      </div>

                      <img
                        className="youtubeIcontestimonal"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="testimonalSlidersSlide"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                <div className="testimonalSliderborder">
                  <div className="testimonalSectionName">
                    <h4>Mrs. Devi</h4>
                    <p>Chennai</p>
                  </div>

                  <div className="testimonalContent">
                    <p className="subHeadingText">
                      Initially hesitant about Keystone, I was soon impressed by
                      their detailed planning, thoughtful design and highly
                      professional execution that consistently and truly
                      exceeded my expectations.
                    </p>

                    <div className="flex items-center justify-between  testimonalPersonImageContainer ">
                      <div className="testimonalPersonImagediv">
                        <img
                          className="testimonalPersonImage"
                          src="/images/youtube-image.png"
                          alt=""
                        />
                      </div>

                      <img
                        className="youtubeIcontestimonal"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="testimonalSlidersSlide"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                <div className="testimonalSliderborder">
                  <div className="testimonalSectionName">
                    <h4>M/s. KwaliteeFabs </h4>
                    <p>Karur</p>
                  </div>

                  <div className="testimonalContent">
                    <p className="subHeadingText">
                      An Architect/interior designer who creates wonders with
                      style within budget. Vaishnavi’s professionalism and team
                      spirit helped pick perfect colors, fixtures, carpeting,
                      delivering significant quality service.
                    </p>

                    <div className="flex items-center justify-between  testimonalPersonImageContainer ">
                      <div className="testimonalPersonImagediv">
                        <img
                          className="testimonalPersonImage"
                          src="/images/youtube-image.png"
                          alt=""
                        />
                      </div>

                      <img
                        className="youtubeIcontestimonal"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>

            {/* <div className="flex justify-center items-center gap-7 mt-6 visibilityhidden">
              <div
                className="custom-prev cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <img
                  src="/images/icons/left-arrow-testimonal.svg"
                  alt="Previous"
                  className="w-7 h-7 hover:scale-110 transition-transform"
                />
              </div>

              <div
                className="custom-next cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <img
                  src="/images/icons/right-arrow-testimonal.svg"
                  alt="Next"
                  className="w-7 h-7 hover:scale-110 transition-transform"
                />
              </div>
            </div> */}
            <div className="flex justify-center items-center gap-7 mt-6">
              {/* LEFT ARROW */}
              <div
                className={`custom-prev cursor-pointer transition-opacity ${
                  current === 0
                    ? "opacity-20 pointer-events-none"
                    : "opacity-100"
                }`}
                onClick={() => sliderRef.current.slickPrev()}
              >
                <img
                  src="/images/icons/left-arrow-testimonal.svg"
                  alt="Previous"
                  className="w-7 h-7 hover:scale-110 transition-transform"
                />
              </div>

              {/* RIGHT ARROW */}
              <div
                className={`custom-next cursor-pointer transition-opacity ${
                  current === totalSlides - 1
                    ? "opacity-20 pointer-events-none"
                    : "opacity-100"
                }`}
                onClick={() => sliderRef.current.slickNext()}
              >
                <img
                  src="/images/icons/right-arrow-testimonal.svg"
                  alt="Next"
                  className="w-7 h-7 hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
