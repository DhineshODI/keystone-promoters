import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectAminities() {
  const amenities = [
    {
      img: "/images/project-detail/aminities/CCTV-survalance.jpg",
      title: "CCTV Surveillance",
    },
    {
      img: "/images/project-detail/aminities/Children’s-Play-Area.jpg",
      title: "Children's Play Area",
    },
    {
      img: "/images/project-detail/aminities/Entrance-lobby.jpg",
      title: "Entrance Lobby",
    },
    { img: "/images/project-detail/aminities/gym.jpg", title: "gym" },
    {
      img: "/images/project-detail/aminities/Landscape.jpg",
      title: "Landscape garden",
    },
    { img: "/images/project-detail/aminities/lift.jpg", title: "lift" },
    {
      img: "/images/project-detail/aminities/Multipurpose.jpg",
      title: "Multipurpose Hall",
    },
    {
      img: "/images/project-detail/aminities/Power-backup.jpg",
      title: "Power Backup",
    },
    {
      img: "/images/project-detail/aminities/Rain-water-harvesting.jpg",
      title: "Rain water Harvesting",
    },
    { img: "/images/project-detail/aminities/solar-panel.jpg", title: "Solar Panels" },
    { img: "/images/project-detail/aminities/Spacious-Covered-car-parking.jpg", title: "Car Parking" },
  ];
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
        breakpoint: 767,
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
              {/* <div className="projectaminitesslider">
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
              </div> */}

              <div className="projectaminitesslider">
                <Slider ref={sliderRef} {...settings}>
                  {amenities.map((item, index) => (
                    <div key={index}>
                      <div className="aminitessectionproject">
                        <img src={item.img} alt={item.title} />
                        <h3 className="contentaminities">{item.title}</h3>
                      </div>
                    </div>
                  ))}
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
            <div className="subHeadingText text-hover-underline ">Download Brochure </div>{" "}
            <div className="subHeadingText "> | </div>{" "}
            <div className="subHeadingText text-hover-underline "> enquire now</div>
          </div>
        </div>
      </div>
    </>
  );
}
