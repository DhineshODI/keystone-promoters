import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectAminities() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      <div className="fordownloadbrocedh">
        <div className="projectaminitessection">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div>
              <div>
                <p className="subHeadingText">AMINITIES</p>
                <h5 className="secondHeadingText  textTransform text-center">
                  Designed for Comfort and Convenience
                </h5>
                <p className="subHeadingText">
                  Enjoy thoughtfully curated amenities that enhance everyday
                  living with relaxation, recreation, wellness, and community
                  connection.
                </p>
              </div>
            </div>

            <div className="mainprojectaminitesslider">
              <div className="projectaminitesslider">
                <Slider ref={sliderRef} className="" {...settings}>
                  <div>
                    <div className="aminitessectionproject">
                      <img src="/images/project-detail/aminites1.jpg" alt="" />
                      <h3 className="contentaminities">Gymnasium</h3>
                    </div>
                  </div>
                  <div>
                    <div className="aminitessectionproject">
                      <img src="/images/project-detail/aminites2.jpg" alt="" />
                      <h3 className="contentaminities">Children's Play Area</h3>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

            <div className="arrowwidthsection">
              <div className="onearrowwidthsection">
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
          </div>
        </div>

        <div className="downloadbrocedhurebuttonflex">
          <div className="downloadbrocedhurebutton">
            <div className="subHeadingText ">Download Brochure </div>{" "}
            <div className="subHeadingText "> | </div>{" "}
            <div className="subHeadingText "> enquire now</div>
          </div>
        </div>
      </div>
    </>
  );
}
