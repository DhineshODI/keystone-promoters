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
    autoplay: true,
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
        breakpoint: 768,
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
            <p className="subHeadingText text-center text-[#636465]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              deserunt officiis neque iusto a voluptas in vel fugit! Libero
              velit similique nobis
            </p>
          </div>

          <div className="testimonalSliderContainer">
            <Slider ref={sliderRef} className="testimonalSliders" {...settings}>
              {/* Example slides */}
              <div className="testimonalSlidersSlide">
                <div className="testimonalSliderborder">
                  <div className="testimonalSectionName">
                    <h4>Mr.Dhinesh</h4>
                    <p>Chennai</p>
                  </div>

                  <div className="testimonalContent">
                    <p className="subHeadingText">
                      Lorem Ipsum is simply dummy text of the printing and types
                      etting industry. Lorem Ipsum has been the dustry's
                      standard dummy text ever sinwhen an unknown printer took a
                      galley of changed.
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
                    <h4>Mr.Dhinesh</h4>
                    <p>Chennai</p>
                             </div>

                  <div className="testimonalContent">
                    <p className="subHeadingText">
                      Lorem Ipsum is simply dummy text of the printing and types
                      etting industry. Lorem Ipsum has been the dustry's
                      standard dummy text ever sinwhen an unknown printer took a
                      galley of changed.
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

              {/* <div>
              <div className="bg-gray-200 p-8 rounded-lg text-center shadow">
                <h3>Slide 3</h3>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 p-8 rounded-lg text-center shadow">
                <h3>Slide 4</h3>
              </div>
            </div> */}
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
      </div>
    </>
  );
}
