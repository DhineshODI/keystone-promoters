import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonalSlider() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
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
  return (
    <>
      <div className="testimonalFullSection reveal ">
        <div className="container max-w-7xl mx-auto px-4 testimonalRow">
          <div>
            <h3 className="text-center mainheadingText textTransform ">
              Client Voice
            </h3>
            <h5
              className="secondHeadingText textTransform text-center"
              style={{ fontWeight: "600", textTransform: "uppercase" }}
            >
              Stories from our Spaces
            </h5>
            <p className="subHeadingText text-center text-[#636465] ourspacingtextmob">
              Our Spaces come alive through the people who live there, their
              stories truly inspire everthying we build
            </p>
          </div>

          {/* <div className="container max-w-7xl mx-auto px-4 testicardsconatinermob"> */}
          <div className="testimonalSliderContainer">
            <Slider ref={sliderRef} className="testimonalSliders" {...settings}>
              <div className="testimonalSlidersSlide">
                <div className="testimonalSliderborder">
                  <div className="testimonalSectionName">
                    <h4>Mr.Pandian</h4>
                    <p>Chennai</p>
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
                          src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740&q=80"
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
              <div className="testimonalSlidersSlide">
                <div className="testimonalSliderborder">
                  <div className="testimonalSectionName">
                    <h4>Mrs.Devi</h4>
                    <p>Chennai</p>
                  </div>

                  <div className="testimonalContent">
                    <p className="subHeadingText">
                      Initially hesitant about Keystone, I was soon impressed by
                      their detailed planning, thoughtful design, and highly
                      professional execution that consistently exceeded my
                      expectations.
                    </p>

                    <div className="flex items-center justify-between  testimonalPersonImageContainer ">
                      <div className="testimonalPersonImagediv">
                        <img
                          className="testimonalPersonImage"
                          src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740&q=80"
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

            <div className="flex justify-center items-center gap-7 mt-6">
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
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
