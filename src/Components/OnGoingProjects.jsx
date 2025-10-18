import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OngoingProjects() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    beforeChange: (_, next) => setActiveIndex(next),
    afterChange: (index) => {
      sliderTop.current?.slickGoTo(index);
      sliderBottom.current?.slickGoTo(index);
    },
  };

  const OnGoingProjectsData = [
    {
      id: 1,
      ProjectTitle: "Spectras",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project1",
    },
    {
      id: 2,
      ProjectTitle: "Urban Heights",
      ProjectLocation: "OMR, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1045 - 1342",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project2",
    },
    {
      id: 3,
      ProjectTitle: "Elite Residency",
      ProjectLocation: "Velachery, Chennai",
      BHKStatus: "3 & 4",
      unitSize: "1250 - 1620",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project3",
    },
    {
      id: 4,
      ProjectTitle: "Serene Villas",
      ProjectLocation: "Porur, Chennai",
      BHKStatus: "3",
      unitSize: "1450 - 1820",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project4",
    },
    {
      id: 5,
      ProjectTitle: "Skyline Apartments",
      ProjectLocation: "Anna Nagar, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1100 - 1600",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project5",
    },
    {
      id: 6,
      ProjectTitle: "Harmony Homes",
      ProjectLocation: "Tambaram, Chennai",
      BHKStatus: "2",
      unitSize: "980 - 1300",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project6",
    },
  ];

  const sliderTop = useRef(null);
  const sliderBottom = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Split data dynamically
  const oddProjects = OnGoingProjectsData.filter((_, i) => i % 2 === 0);
  const evenProjects = OnGoingProjectsData.filter((_, i) => i % 2 === 1);

  const totalSlides = Math.min(oddProjects.length, evenProjects.length);

  const goToSlide = (i) => {
    sliderTop.current?.slickGoTo(i);
    sliderBottom.current?.slickGoTo(i);
    setActiveIndex(i);
  };
  return (
    <>
      <div className="ongoingBg">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="onGoingMainSectionDiv">
            <div style={{ width: "56%" }}>
              <Slider ref={sliderTop} {...settings}>
                {oddProjects.map((project) => (
                  <div>
                    <div className="ongoingProjectSection">
                      <img src={project.projectImage} alt="" />

                      <div className="projectsNameOnGoingmAINcONTAINER">
                        <div className="projectsNameOnGoing">
                          <h5>{project.ProjectTitle}</h5>
                          <span>{project.ProjectLocation}</span>
                        </div>
                        <div className="projectsNameOnGoing">
                          <h5>
                            {project.BHKStatus} <span>BHK</span>
                          </h5>
                        </div>
                        <div className="projectsNameOnGoing">
                          <h5>
                            {project.unitSize} <span>UNIT SIZE</span>
                          </h5>
                        </div>

                        <div className="onGoingViewProject">view project</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="onGoingRightSection">
              <h5 className="mainheadingText">Ongoing Projects</h5>
              <div>
                <h6 className="secondHeadingText">Crafted with Purpose</h6>
              </div>
            </div>
          </div>
          <div className="onGoingMainSectionDiv">
            <div className="onGoingRightSection">
              <h5 className="mainheadingText onGoingSecondTextContainer">
                Lorem ipsum dolor sitamet consecte turadipiscing
              </h5>
              <div className="secondSliderContentSections">
                <p className="subHeadingText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                  eiusmmpor incididunt ut labore et dolore magna uis ipsum
                  suspendisse
                </p>
              </div>

              {/* ===== SINGLE DOT CONTROL ===== */}
              <div className="customDots">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${
                      i === activeIndex ? "active" : ""
                    } cursor-pointer`}
                    onClick={() => goToSlide(i)}
                  />
                ))}
              </div>
            </div>

            <div style={{ width: "56%" }}>
              <Slider ref={sliderBottom} {...settings}>
                {evenProjects.map((project) => (
                  <div>
                    <div className="ongoingProjectSection">
                      <img src={project.projectImage} alt="" />

                      <div className="projectsNameOnGoingmAINcONTAINER">
                        <div className="projectsNameOnGoing">
                          <h5>{project.ProjectTitle}</h5>
                          <span>{project.ProjectLocation}</span>
                        </div>
                        <div className="projectsNameOnGoing">
                          <h5>
                            {project.BHKStatus} <span>BHK</span>
                          </h5>
                        </div>
                        <div className="projectsNameOnGoing">
                          <h5>
                            {project.unitSize} <span>UNIT SIZE</span>
                          </h5>
                        </div>

                        <div className="onGoingViewProject">view project</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
