import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ProjecSpecification() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div class="projectspecifiationclass">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div>
            <div>
              <h5 className="secondHeadingText  textTransform text-center">
                specifications
              </h5>
              <p className="subHeadingText text-center text-[#636465]">
                Every Element is carefully to meet industry standards and
                elevate your daily living experience
              </p>
            </div>
          </div>

          <div className="projectsspccards">
            <Slider ref={sliderRef} className="" {...settings}>
              <div>
                <div className="projectspecificationcard">
                  <div>
                    <img
                      className="projectspecicon"
                      src="/images/project-detail/builind-icon-pink.svg"
                      alt=""
                    />
                  </div>
                  <p className="projectspecname">Structure</p>

                  <ul className="projectspeclist">
                    <li>RCC Framed</li>
                    <li>structure (Stit + 5 Floors)</li>
                    <li>with brick work</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="projectspecificationcard">
                  <div>
                    <img
                      className="projectspecicon"
                      src="/images/project-detail/builind-icon-pink.svg"
                      alt=""
                    />
                  </div>
                  <p className="projectspecname">Kitchen</p>

                  <ul className="projectspeclist">
                    <li>Virtified tile flooring 2' high-glazed</li>
                    <li>tile dado Granite countertop</li>
                    <li>Stainless steel sink</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="projectspecificationcard">
                  <div>
                    <img
                      className="projectspecicon"
                      src="/images/project-detail/builind-icon-pink.svg"
                      alt=""
                    />
                  </div>
                  <p className="projectspecname">Kitchen</p>

                  <ul className="projectspeclist">
                    <li>
                      <span>Internal -</span> 2 coats of Putty, I coat of
                    </li>
                    <li>primer and 2 coats of interior emulsion</li>
                    <li>
                      <span> Extermal -</span>2 coats of Exterior emulsion
                    </li>
                    <li>paint over I coat of pimer</li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>

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
      </div>
    </>
  );
}
