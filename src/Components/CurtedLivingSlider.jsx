import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CurtedLivingSlider() {
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  const curatedSlides = [
    {
      img: "/images/homepage/iStock-2160382418.png",
      lines: ["MODERN", "MINIMALIST", "SPACES"],
    },
    {
      img: "/images/homepage/iStock-1990444472.png",
      lines: ["NATURE", "INTEGRATED", "DESIGNS"],
    },
    {
      img: "/images/homepage/functional-comfort-layouts.jpg",
      lines: ["FUNCTIONAL", "COMFORT", "LAYOUTS"],
    },
    {
      img: "/images/homepage/timeless-quality-aesthetics.jpg",
      lines: ["TIMELESS", "QUALITY", "AESTHETICS"],
    },
    {
      img: "/images/homepage/balnced-craftmanship.jpg",
      lines: ["BALANCED", "CLEVER ", "CRAFTMANSHIP"],
    },
  ];

  return (
    <>
      <div className="curtedSectionMainRowBg reveal ">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="curtsectionrow">
            <div className="curtSliderLeftSection">
              <h5 className="secondHeadingText">Curated Living Experiences</h5>
              <h6 className="subHeadingText">
                Discover living spaces designed to inspire modern lifestyles and
                elevate everyday comfort. Each home reflects thoughtful design,
                blending elegance, function, and connection to nature-crafted
                for those who value quality living and timeless appeal.
              </h6>

              {/* <h6 className="subHeadingText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </h6> */}
            </div>
            {/* <div className="curtLivingSlider">
              <Slider ref={sliderRef} className="" {...settings}>
                <div>
                  <div>
                    <div className="curatedSliderContainer">
                      <img
                        src="./images/homepage/iStock-2160382418.png"
                        alt=""
                      />
                      <h4 className="natureIntergreated">MODERN</h4>
                      <h4 className="natureIntergreated">MINIMALIST</h4>
                      <h4 className="natureIntergreated">SPACES</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="curatedSliderContainer">
                      <img
                        src="./images/homepage/iStock-1990444472.png"
                        alt=""
                      />
                      <h4 className="natureIntergreated">NATURE</h4>
                      <h4 className="natureIntergreated">INTEGRATED</h4>
                      <h4 className="natureIntergreated">DESIGNS</h4>
                    </div>
                  </div>
                </div>
              </Slider>

              <div className="flex justify-center items-center gap-88 mt-6 curlatedLine">
                <div
                  className="custom-prev cursor-pointer curlatedArrow"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <img
                    src="/images/icons/arrow-l.svg"
                    alt="Previous"
                    className="w-7 h-7 hover:scale-110 transition-transform"
                  />
                </div>

                <div
                  className="custom-next cursor-pointer curlatedArrow"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <img
                    src="/images/icons/arrow-r.svg"
                    alt="Next"
                    className="w-7 h-7 hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div> */}
            <div className="curtLivingSlider">
              <Slider ref={sliderRef} {...settings}>
                {curatedSlides.map((slide, index) => (
                  <div key={index}>
                    <div className="curatedSliderContainer">
                      <img src={slide.img} alt={`Slide ${index}`} />

                      {slide.lines.map((text, i) => (
                        <h4 key={i} className="natureIntergreated">
                          {text}
                        </h4>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Arrows */}
              <div className="flex justify-center items-center gap-88 mt-6 curlatedLine">
                <div
                  className="custom-prev cursor-pointer curlatedArrow"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <img
                    src="/images/icons/arrow-l.svg"
                    alt="Previous"
                    className="w-7 h-7 hover:scale-110 transition-transform"
                  />
                </div>

                <div
                  className="custom-next cursor-pointer curlatedArrow"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <img
                    src="/images/icons/arrow-r.svg"
                    alt="Next"
                    className="w-7 h-7 hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
