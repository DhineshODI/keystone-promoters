import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OngoingProjects() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 600,
    autoplay: false,
    swipe: false,
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
      ProjectTitle: "Spectra",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project-detail",
    },
    {
      id: 2,
      ProjectTitle: "Spectra",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project-detail",
    },
    {
      id: 3,
      ProjectTitle: "Spectras",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project-detail",
    },
    {
      id: 4,
      ProjectTitle: "Spectras",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project-detail",
    },
    {
      id: 5,
      ProjectTitle: "Spectras",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project-detail",
    },
    {
      id: 6,
      ProjectTitle: "Spectras",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
      projectImage: "/images/ongoing-images/onGoingProjectsImage.jpg",
      projectLink: "/project-detail",
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
            <div style={{ width: "56%" }} className="widthnewseciton">
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

                        <div className="onGoingViewProject">
                          <a href="/project-detail" className="cursor-pointer">
                            view project
                          </a>
                        </div>
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
                Designed <br /> for Today, Built for Tomorrow
              </h5>
              <div className="secondSliderContentSections">
                <p className="subHeadingText">
                  Each project reflects our commitment to excellence, blending
                  modern design with sustainable and lasting construction.
                </p>
              </div>

              <div className="viewallprojectsongoing cursor-pointer">
                <a href="/project-detail">
                  <button className="cursor-pointer">View All Projects</button>
                </a>
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

            <div style={{ width: "56%" }} className="widthnewseciton formobilewidthsection">
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
